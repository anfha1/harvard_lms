<?php

namespace App\Console\Commands\fai;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use App\Models\lsession;

class processppt extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fai:processppt';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Xử lý dữ liệu ppt';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $idc = 1664717770712; # idc của powepoint
        $id_session = 5; # id của session

        $status = true; // xử lý có được hay không nếu đc cho vào true không thì false
        $msg = ''; // text thông báo nếu xử lý bị lỗi

        // đường đẫn đến thư mục đã render nếu xử lý thành công
        $path = 'C:\PTA_Media\Project\PHP_8\harvard_lms\public\ppt\1662515239603 (Published)';
        // __DIR__.'/../../../../storage/app/1662560906049';

        // không sửa đổi gì ở dưới này
        $session_info = lsession::find($id_session);
        if ($session_info) {
            if ($session_info->ppttype) {
                if ($status) {
                    $this->process_data($id_session, $idc, $path);
                } else {
                    $path_file_info = "/ppt/info/{$id_session}.json";
                    $ppt_info = json_decode(Storage::get($path_file_info), 1);
                    $ppt_info['status'] = 2;
                    $ppt_info['msg'] = $msg;
                    Storage::put($path_file_info, json_encode($ppt_info));
                }
            } else {
                echo 'Chưa tải lên ppt!';
            }
        } else {
            echo 'Không có session!';
        }
    }

    private function process_data($id_session, $idc, $path) {
        $path_file_info = "/ppt/info/{$id_session}.json";
        $ppt_info = json_decode(Storage::get($path_file_info), 1);
        if (is_dir($path)) {
            $path = realpath($path);
            if (is_dir($path.'/data') && is_file($path.'/index.html')) {
                $dataRender = $this->process_html($path.'/index.html');

                // xử lý xong tiến hành xóa file index.html
                unlink($path.'/index.html');

                // di chuyển toàn bộ thư mục qua thư mục được chỉ định
                $folder = public_path('ppt');
                if (!is_dir($folder)) {
                    mkdir($folder);
                }
                $folder .= '/'.$idc;
                if (!is_dir($folder)) {
                    mkdir($folder);
                }

                $this->cut_folder($path, $folder);
                $ppt_info['data'] = $dataRender;
                $ppt_info['status'] = 1;
                Storage::put($path_file_info, json_encode($ppt_info));
            } else {
                echo 'Thư mục không hợp lệ! 1';
            }
        } else {
            echo 'Thư mục không tồn tại! 2';
        }
    }

    private function process_html($file) {
        $dom = new \DomDocument();
        libxml_use_internal_errors(true);
        $dom->loadHTMLFile($file);
        $head = $dom->getElementsByTagName('head')[0];
        $dataHead = '';
        foreach ($head->childNodes as $child) {
            if ($child->nodeName != 'meta' && $child->nodeName != '#text' && $child->nodeName != 'title') {
                if (
                    $child->nodeName == 'link' &&
                    $child->hasAttribute('rel') &&
                    $child->getAttribute('rel') == 'shortcut icon'
                ) {
                    echo "Đã loại bỏ icon\n";
                } else {
                    $dataHead .= $dom->saveHTML($child);
                }
            }
        }
        $body = $dom->getElementsByTagName('body')[0];
        $dataRender['style'] = $dataHead;
        $dataRender['content'] = $dom->saveHTML($body);
        libxml_clear_errors();
        return $dataRender;
    }

    private function cut_folder($from, $to) {
        foreach(glob($from.'/*') as $file) {
            $fileName = preg_replace('/^'.preg_quote($from, '/').'\//', '', $file);
            $fileNameNew = $to.'/'.$fileName;

            if (is_dir($file)) {
                // tạo thư mục
                if (!is_dir($fileNameNew)) {
                    mkdir($fileNameNew);
                }
                // tiếp tục cut thưu mục bên trong
                $this->cut_folder($file, $fileNameNew);
            } else {
                // copy file và xóa file cũ
                rename($file, $fileNameNew);
                // unlink($file);
            }
        }

        // xóa thư mục cũ
        rmdir($from);
    }
}
