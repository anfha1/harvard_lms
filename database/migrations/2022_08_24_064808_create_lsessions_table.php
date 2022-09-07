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
        Schema::create('lsessions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('lppt_id')->nullable(); // id ppt
            $table->tinyInteger('doctype')->default(0);
            /* Loại tài liệu
                0: Chưa có tài liệu
                1: file doc
                2: Text HTML
            */
            $table->tinyInteger('status')->default(1);
            /* Trạng thái
                0: Không được hiển thị
                1: Được hiển thị
            */
            $table->integer('lcourse_id')->foreign('lcourse_id')->references('id')->on('lcourses'); // id course khối
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
        Schema::dropIfExists('lsessions');
    }
};
