<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\lcourse;
use App\Models\lsession;
use App\Models\lppt;
use App\Models\lsessionrole;

return new class extends Migration
{
    /**
     * Run the migrations.
     * mirgate này sau khi chạy sẽ không khôi phục được :v
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lusers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('username')->unique();
            $table->string('password');
            $table->string('name');
            $table->string('photo')->nullable();
            $table->tinyInteger('role')->default(0);
            /* Loại tài khoản
                0: Bình thường - giáo viên
                1: Admin
                2: Cộng tác viên
            */
            $table->tinyInteger('status')->default(1);
            /* Trạng thái
                0: Không được hoạt động
                1: Được hoạt động
            */
            $table->timestamps();
        });

        # bảng khối
        Schema::create('lcourses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('slug')->nullable();
            $table->string('photo')->nullable();
            $table->text('description')->nullable();
            $table->tinyInteger('status')->default(1);
            /* Trạng thái
                0: Không được hiển thị
                1: Được hiển thị
            */
            $table->timestamps();
        });

        # bảng tiết
        Schema::create('lsessions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('slug')->nullable();
            $table->string('photo')->nullable();
            $table->text('description')->nullable();
            $table->tinyInteger('doctype')->default(0);
            /* Loại tài liệu
                0: Chưa có tài liệu
                1: pdf dữ liệu lưu ở dạng json
            */
            $table->tinyInteger('ppttype')->default(0);
            /* Loại tài liệu
                0: Chưa có powerpoint
                1: đã có ppt thông tin lưu ở dạng dạng json
            */
            $table->tinyInteger('status')->default(1);
            /* Trạng thái
                0: Không được hiển thị
                1: Được hiển thị
            */

            $table->integer('lcourse_id')->foreign('lcourse_id')->references('id')->on('lcourses')->onDelete('cascade'); // id của khối
            $table->timestamps();

            // liên kết và thêm trình tự xóa
        });

        # Bảng quyền đối với tiết
        Schema::create('lsessionroles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('lsession_id')->foreign('lsession_id')->references('id')->on('lsessions')->onDelete('cascade'); // id tiết học
            $table->integer('luser_id')->nullable()->foreign('luser_id')->references('id')->on('lusers')->onDelete('cascade'); // id course khối
            $table->timestamps();
        });

        # bảng blog
        Schema::create('lblogs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('slug')->nullable();
            $table->string('photo')->nullable();
            $table->text('description')->nullable();
            $table->tinyInteger('status')->default(1);
            /* Trạng thái
                0: Không được hiển thị
                1: Được hiển thị
            */

            // bài viết sẽ không xóa chỉ khi quản trị viên xóa
            $table->integer('luser_id')->nullable()->foreign('luser_id')->references('id')->on('lusers'); // người đăng
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // không hỗ trợ khôi phục lại
        Schema::dropIfExists('lsessionroles');
        Schema::dropIfExists('lsessions');
        Schema::dropIfExists('lcourses');
        Schema::dropIfExists('lblogs');
        Schema::dropIfExists('lusers');
    }
};
