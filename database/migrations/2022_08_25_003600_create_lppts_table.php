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
        Schema::create('lppts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('nameor');
            $table->string('idc');
            $table->tinyInteger('status')->default(0);
            /* Trạng thái powerpoint
                0: Chưa xử lý
                1: Đã được xử lý
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
        Schema::dropIfExists('lppts');
    }
};
