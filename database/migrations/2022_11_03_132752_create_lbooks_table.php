<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        # bảng sách
        Schema::create('lbooks', function (Blueprint $table) {
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

        # bảng tiết của sách
        Schema::create('lbook_sessions', function (Blueprint $table) {
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
            $table->tinyInteger('status')->default(1);
            /* Trạng thái
                0: Không được hiển thị
                1: Được hiển thị
            */

            $table->integer('lbook_id')->foreign('lbook_id')->references('id')->on('lbooks')->onDelete('cascade'); // id của khối
            $table->timestamps();

            // liên kết và thêm trình tự xóa
        });

        # Bảng quyền đối với tiết và sacus
        Schema::create('lbook_session_roles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('lbook_session_id')->foreign('lbook_session_id')->references('id')->on('lbook_sessions')->onDelete('cascade'); // id tiết học
            $table->integer('luser_id')->nullable()->foreign('luser_id')->references('id')->on('lusers')->onDelete('cascade'); // id course khối
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
        Schema::dropIfExists('lbooks');
        Schema::dropIfExists('lbook_sessions');
        Schema::dropIfExists('lbook_session_roles');
    }
};
