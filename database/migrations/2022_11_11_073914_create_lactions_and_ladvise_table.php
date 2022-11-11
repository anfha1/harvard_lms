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
        // hoạt động trải nhiệm
        Schema::create('lactions', function (Blueprint $table) {
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
        Schema::create('laction_sessions', function (Blueprint $table) {
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
            $table->integer('laction_id')->foreign('laction_id')->references('id')->on('lactions')->onDelete('cascade'); // id của khối
            $table->timestamps();
        });
        Schema::create('laction_session_roles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('laction_session_id')->foreign('laction_session_id')->references('id')->on('laction_sessions')->onDelete('cascade'); // id tiết học
            $table->integer('luser_id')->nullable()->foreign('luser_id')->references('id')->on('lusers')->onDelete('cascade'); // id course khối
            $table->timestamps();
        });

        // Tư vấn học đường
        Schema::create('ladvises', function (Blueprint $table) {
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
        Schema::create('ladvise_sessions', function (Blueprint $table) {
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
            $table->integer('ladvise_id')->foreign('ladvise_id')->references('id')->on('ladvises')->onDelete('cascade'); // id của khối
            $table->timestamps();
        });
        Schema::create('ladvise_session_roles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('ladvise_session_id')->foreign('ladvise_session_id')->references('id')->on('ladvise_sessions')->onDelete('cascade'); // id tiết học
            $table->integer('luser_id')->nullable()->foreign('luser_id')->references('id')->on('lusers')->onDelete('cascade'); // id course khối
            $table->timestamps();
        });

        // Thêm thông tin của user
        Schema::table('lusers', function (Blueprint $table) {
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lactions');
        Schema::dropIfExists('laction_sessions');
        Schema::dropIfExists('laction_session_roles');
        Schema::dropIfExists('ladvises');
        Schema::dropIfExists('ladvise_sessions');
        Schema::dropIfExists('ladvise_session_roles');
        Schema::table('lusers', function (Blueprint $table) {
            $table->dropColumn(['phone', 'email']);
        });
    }
};
