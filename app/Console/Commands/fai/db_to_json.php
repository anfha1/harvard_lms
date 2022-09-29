<?php

namespace App\Console\Commands\fai;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class db_to_json extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:toJson';

    /**
     * Lệnh này sẽ lưu lại tất cả dữ liệu của database dưới dạng json
     *
     * @var string
     */
    protected $description = 'Backup data json';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        # liêt kê các bảng cần backup
        $tables = ['lusers', 'lblogs', 'lcourses', 'lsessions', 'lsessionroles', 'lppts'];

        # chạy lệnh
        // php artisan db:toJson

        # khu vực xử lý
        $time = (int)(microtime(1) * 1000);

        foreach ($tables as $table) {
            $results = DB::select("select * from {$table}");
            Storage::put("backup/{$time}/{$table}.json", json_encode($results));
        }

        echo $time;
    }
}
