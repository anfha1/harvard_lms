<?php

namespace App\Console\Commands\fai;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class db_to_v2 extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:toV2 {id}';

    /**
     * Lệnh này sẽ cập nhật dữ liệu lên v2
     *
     * @var string
     */
    protected $description = 'Update databse v2';

    private $imgs = [];

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        # id của database
        $id_db_backup = $this->argument('id');

        # ảnh mặc định
        $this->imgs = config('app.photo');

        # chạy lệnh
        // php artisan db:toV2 và thêm id của database

        # khu vực xử lý

        // cập nhật bảng user
        $db_lusers = $this->read_file_json("/backup/{$id_db_backup}/lusers.json");
        $this->db_lusers($db_lusers);

        // khu vực cập nhật bảng blog
        $db_lblogs = $this->read_file_json("/backup/{$id_db_backup}/lblogs.json");
        $this->db_lblogs($db_lblogs);

        // khu vực cập nhật bảng course
        $db_lcourses = $this->read_file_json("/backup/{$id_db_backup}/lcourses.json");
        $this->db_lcourses($db_lcourses);

        // khu vực cập nhật bảng session
        $db_lsessions = $this->read_file_json("/backup/{$id_db_backup}/lsessions.json");
        $db_lppts = $this->read_file_json("/backup/{$id_db_backup}/lppts.json");
        $this->db_lsessions($db_lsessions, $db_lppts);

        // khu vực quyền của session
        $db_lsessionroles = $this->read_file_json("/backup/{$id_db_backup}/lsessionroles.json");

        DB::table('lusers')->insert($db_lusers);
        DB::table('lblogs')->insert($db_lblogs);
        DB::table('lcourses')->insert($db_lcourses);
        DB::table('lsessions')->insert($db_lsessions);
        DB::table('lsessionroles')->insert($db_lsessionroles);
    }

    private function db_lusers(&$data) {
        $k = count($data);
        for ($i = 0; $i < $k; $i++) {
            if (empty($data[$i]['photo'])) {
                $name = Str::slug($data[$i]['name'], '-');
                $data[$i]['photo'] = "https://avatars.dicebear.com/api/adventurer-neutral/{$name}.svg";
            }
        }
    }

    private function db_lblogs(&$data) {
        $k = count($data);
        for ($i = 0; $i < $k; $i++) {
            // thay đổi tên
            $data[$i]['name'] = $data[$i]['title'];
            unset($data[$i]['title']);

            // tự thêm ảnh
            $this->check_photo($data[$i]);

            // tự thêm slug
            $this->check_slug($data[$i]);
        }
    }

    private function db_lcourses(&$data) {
        $k = count($data);
        for ($i = 0; $i < $k; $i++) {
            // tự thêm ảnh
            $this->check_photo($data[$i]);

            // tự thêm slug
            $this->check_slug($data[$i]);
        }
    }

    private function db_lsessions(&$data, $ppts) {
        // tái cấu trúc lại ppt
        $obj_ppt = [];
        foreach ($ppts as $ppt) {
            $obj_ppt[$ppt['id']] = $ppt;
        }

        $k = count($data);
        for ($i = 0; $i < $k; $i++) {
            // xử lý powerpoint
            if (empty($data[$i]['lppt_id'])) {
                // sửa lại file dưới dạng không có ppt
                $data[$i]['ppttype'] = 0;
            } else {
                // lấy thông tin powerpoint
                $info_ppt = $obj_ppt[$data[$i]['lppt_id']];

                // chuyển sang file json
                $info_ppt = [
                    'name' => $info_ppt['name'],
                    'nameor' => $info_ppt['nameor'],
                    'idc' => $info_ppt['idc'],
                    'status' => $info_ppt['status'],
                ];
                Storage::put("/ppt/info/{$data[$i]['id']}.json", json_encode($info_ppt));

                // lưu lại với trang thái có
                $data[$i]['ppttype'] = 1;
            }

            // xóa trường lppt_id
            unset($data[$i]['lppt_id']);

            // xử lý tài liệu
            $data[$i]['doctype'] = 0;

            // tự thêm ảnh
            $this->check_photo($data[$i]);

            // tự thêm slug
            $this->check_slug($data[$i]);
        }
    }

    private function check_photo(&$obj, $key = 'photo') {
        if (empty($obj[$key])) {
            $obj[$key] = $this->imgs[rand(0, count($this->imgs)-1)];
        }
    }

    private function check_slug(&$obj, $key = 'slug', $key_name = 'name') {
        if (empty($obj[$key])) {
            $obj[$key] = Str::slug($obj[$key_name], '-');
        }
    }

    private function read_file_json($file) {
        return json_decode(Storage::get($file), 1);
    }
}
