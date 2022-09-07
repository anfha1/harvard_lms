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
        Schema::create('lusers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('username')->unique();
            $table->string('password');
            $table->string('name');
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
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lusers');
    }
};
