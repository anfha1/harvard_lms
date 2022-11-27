<?php

namespace App\Console\Commands\cicd;

use Fai\Lib\App;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class frontend extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cicd:frontend';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'file này xử lý sau khi cicd frontend thành công cần quét data của frontend';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle() {
        $config_project = [
            'public' => public_path(), # vị trí của thư mục public dự án này
            'source' => 'C:\PTA_Media\Project\Nodejs\harvard_lms_frontent\dist', # vị trí của thư mục dist frontend cần đồng bộ
        ];
        $file_map = 'config/frontend-map.json'; # vị trí file map
        $file_content = 'config/frontend.json'; # vị trí của file lưu trữ lại content

        // xử lý frontend trước rồi xóa file index.html đi
        if (is_dir($config_project['public'])) {
            if (is_dir($config_project['source'])) {
                $file_content_process = $config_project['source'].'/index.html';
                if (is_file($file_content_process)) {
                    $dom = new \DomDocument();
                    libxml_use_internal_errors(true);
                    $dom->loadHTMLFile($file_content_process);
                    $head = $dom->getElementsByTagName('head')[0];
                    $dataHead = '';
                    foreach ($head->childNodes as $child) {
                        if ($child->nodeName != 'title') {
                            $dataHead .= $dom->saveHTML($child);
                        }
                    }
                    $body = $dom->getElementsByTagName('body')[0];
                    $dataBody = '';
                    foreach ($body->childNodes as $child) {
                        if ($child->nodeName != 'div' || !isset($child->attributes['id']) || $child->attributes['id']->value != 'app') {
                            $dataBody .= $dom->saveHTML($child);
                        }
                    }

                    // lưu lại data
                    Storage::put($file_content, json_encode([
                        'head' => $dataHead,
                        'body' => $dataBody,
                    ]));

                    // xóa file index.html
                    unlink($file_content_process);

                    // map file
                    $map_file_old_project = [];
                    $map_file_old_project_data = Storage::get($file_map);
                    if ($map_file_old_project_data && App::is_json($map_file_old_project_data)) {
                        $map_file_old_project = json_decode($map_file_old_project_data, 1);
                    }

                    $map_file_new_project = $this->map_and_create_folder_project($config_project['source'], $config_project['public']);

                    $map_file_new_project_pr = $map_file_new_project;
                    foreach ($map_file_old_project as $file_pr) {
                        if (array_search($file_pr, $map_file_new_project_pr) !== false) {
                            unset($map_file_new_project_pr[$file_pr]);
                        } else {
                            unlink($config_project['public'].'/'.$file_pr);
                        }
                    }

                    foreach ($map_file_new_project_pr as $file_pr) {
                        $file_old = $config_project['source'].'/'.$file_pr;
                        if (is_file($file_old)) {
                            copy($file_old, $config_project['public'].'/'.$file_pr);
                        } else {
                            echo "\nKhông thấy file: {$file_old}";
                        }
                    }

                    // lưu lại file map
                    Storage::put($file_map, json_encode($map_file_new_project));
                } else {
                    echo 'Thư mục source không chứa file index.html';
                }
            } else {
                echo 'Thư mục source không hợp lệ';
            }
        } else {
            echo 'Thư mục public không hợp lệ';
        }
    }

    private function map_and_create_folder_project($dir_old, $dir_new, $pattem_map = '') {
        $list_file = [];
        $pattem = '/^'.preg_quote($dir_old.'/', '/.\+*?[^]$(){}=!<>|:-').'/';
        if (empty($pattem_map)) {
            $pattem_map = $pattem;
        }
        foreach (glob($dir_old.'/*') as $file) {
            $file_name = preg_replace($pattem, '', $file);
            if (is_dir($file)) {
                $folder_sub_new = $dir_new.'/'.$file_name;
                if (!is_dir($folder_sub_new)) {
                    mkdir($folder_sub_new);
                }
                $list_file_sub_new = $this->map_and_create_folder_project($file, $folder_sub_new, $pattem_map);
                $list_file = array_merge($list_file, $list_file_sub_new);
            } else {
                $list_file[] = preg_replace($pattem_map, '', $file);
            }
        }
        return $list_file;
    }
}
