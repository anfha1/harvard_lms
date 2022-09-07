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
        Schema::create('lblogs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('slug')->nullable();
            $table->string('photo')->nullable();
            $table->text('description')->nullable();
            $table->tinyInteger('status')->default(1);
            /* Trạng thái
                0: Không được hiển thị
                1: Được hiển thị
            */
            // thông tin khác
            $table->integer('luser_id')->foreign('luser_id')->references('id')->on('lusers'); // người đăng
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
        Schema::dropIfExists('lblogs');
    }
};
