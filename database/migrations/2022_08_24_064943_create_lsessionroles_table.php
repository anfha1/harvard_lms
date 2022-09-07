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
        Schema::create('lsessionroles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('lsession_id')->foreign('lsession_id')->references('id')->on('lsessions'); // id tiết học
            $table->integer('luser_id')->nullable(); // id course khối
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
        Schema::dropIfExists('lsessionroles');
    }
};
