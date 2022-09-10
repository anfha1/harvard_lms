<?php

namespace App\Console\Commands\fai;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use App\Models\lppt;

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
        # B1: truyền style và content vào 2 tệp ở bin

        # B2: sau đó nhập id là tên ppt vào đây
        $id = '1662559740000';

        # B3: nếu ppt không đúng thì chuyển thành false để báo lỗi
        $status = true;

        # B4: Chạy lênh "php artisan fai:processppt" để chuyển đổi thành định dạng cần

        // khu vực xử lý ppt cho về đúng chuẩn
        $ppt = lppt::where('idc', $id)->first();

        if ($ppt) {
            if ($status) {
                // xóa file index
                $fileIndex = public_path("ppt/{$id}").'/index.html';
                if (is_file($fileIndex)) {
                    unlink($fileIndex);
                }

                // b2 copy style và content vào file lưu trữ
                Storage::disk('ftp')->put("ppt_{$ppt->id}.json", json_encode([
                    'style' => file_get_contents(__dir__.'/bin/style.html'),
                    'content' => file_get_contents(__dir__.'/bin/content.html'),
                ]));

                // b3 chuyển trạng thái về ok
                $ppt->status = 1;
            } else {
                // chuyển trang thái về không ok để báo file lỗi
                $ppt->status = 2;
            }
            $ppt->save();
        } else {
            echo $id." Không tồn tại\n";
        }
        
    }
}
