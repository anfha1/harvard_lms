<?php

namespace App\Console\Commands\fai;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use App\Models\luser;
use App\Models\lcourse;

class db_start extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fai:db_start';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Tao CSDL ban dau';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        # thêm tài khoản quản trị admin mật khẩu 12345678
        $admin = new luser;
        $admin->username = 'admin';
        $admin->password = md5('12345678');
        $admin->name = 'Admin';
        $admin->role = 1; // Quyền admin
        $admin->save();

        # thêm các khóa học
        $imgs = config('app.photo');
        for ($i = 1; $i < 6; $i++) {
            $name = 'Khối lớp ' . $i;
            $course = new lcourse;
            $course->name = $name;
            $course->slug = Str::slug($name, '-');
            $course->photo = $imgs[rand(0, count($imgs)-1)];
            $course->save();
        }
    }
}
