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
        Schema::table('lusers', function (Blueprint $table) {
            $table->string('school')->nullable();
            $table->string('course')->nullable();
        });
        Schema::create('lcategorys', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->timestamps();
        });
        Schema::create('lblog_categorys', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('lblog_id')->foreign('lblog_id')->references('id')->on('lusers')->onDelete('cascade'); // id blog
            $table->integer('lcategorys_id')->foreign('lcategorys_id')->references('id')->on('lcategorys')->onDelete('cascade'); // id blog
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
        Schema::table('lusers', function (Blueprint $table) {
            $table->dropColumn(['school', 'course']);
        });
        Schema::dropIfExists('lblog_categorys');
        Schema::dropIfExists('lcategorys');
    }
};
