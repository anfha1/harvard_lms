<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\V1\Home as ControllersApiV1Home;

use App\Http\Controllers\Api\V1\ManageBlog as ControllersApiV1ManageBlog;
use App\Http\Controllers\Api\V1\ManageCourse as ControllersApiV1ManageCourse;
use App\Http\Controllers\Api\V1\ManageBook as ControllersApiV1ManageBook;
use App\Http\Controllers\Api\V1\ManageAction as ControllersApiV1ManageAction;
use App\Http\Controllers\Api\V1\ManageAdvise as ControllersApiV1ManageAdvise;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// lấy thông tin đăng nhập
Route::post('/user/info', [ControllersApiV1Home::class, 'check_info']);

// Đăng nhập
Route::post('/login', [ControllersApiV1Home::class, 'login']);

// session get
Route::post('/session/get', [ControllersApiV1Home::class, 'session_get']);

// session get
Route::post('/session/check', [ControllersApiV1Home::class, 'session_check']);

// đăng xuất
Route::post('/logout', [ControllersApiV1Home::class, 'logout']);

// lấy danh sách tin tức tin tức
Route::post('/blog', [ControllersApiV1Home::class, 'blog']);

// lấy danh sách tin tức tin tức lấy 2 bài
Route::post('/blog1', [ControllersApiV1Home::class, 'blog1']);

// lấy danh sách tin tức tin tức lấy 2 bài
Route::post('/feedback', [ControllersApiV1Home::class, 'feedback']);

// Check quyền giới thiệu
Route::post('/blog/role/check', [ControllersApiV1Home::class, 'blog_role_check']);

// lấy danh sách giáo trình để hiển thị ở trang chủ
Route::post('/course', [ControllersApiV1Home::class, 'course']);

// check quyền xem ppt
Route::post('course/ppt/get-data', [ControllersApiV1Home::class, 'course_ppt_get_data']);

// lấy danh sách sách kỹ năng để hiển thị ở trang chủ
Route::post('/book', [ControllersApiV1Home::class, 'book']);

// lấy danh sách hoạt động trải nghiệm để hiển thị ở trang chủ
Route::post('/action', [ControllersApiV1Home::class, 'action']);

// check quyền xem tài liệu
Route::post('action/get-data', [ControllersApiV1Home::class, 'action_get_data']);

// lấy danh sách tư vấn học đường để hiển thị ở trang chủ
Route::post('/advise', [ControllersApiV1Home::class, 'advise']);

// check quyền xem tài liệu
Route::post('advise/get-data', [ControllersApiV1Home::class, 'advise_get_data']);

// search category
Route::post('/category/search', [ControllersApiV1Home::class, 'search_category']);

Route::prefix('manage')->group(function () {
    Route::prefix('user')->group(function () {
        // lấy danh sách khóa học với trang thái quản trị viên
        Route::post('/', [ControllersApiV1Home::class, 'manage_user']);

        // Tạo tài khoản mới
        Route::post('/create', [ControllersApiV1Home::class, 'manage_user_create']);

        // Sửa tài khoản
        Route::post('/edit', [ControllersApiV1Home::class, 'manage_user_edit']);

        // Xóa tài khoản
        Route::post('/delete', [ControllersApiV1Home::class, 'manage_user_delete']);

        // Xóa tài khoản
        Route::post('/lock', [ControllersApiV1Home::class, 'manage_user_lock']);

        // Xóa tài khoản
        Route::post('/active', [ControllersApiV1Home::class, 'manage_user_active']);
    });

    Route::prefix('blog')->controller(ControllersApiV1ManageBlog::class)->group(function () {
        // lấy danh sách blog
        Route::post('/', 'get');

        // lựa chọn blog blog
        Route::post('/select', 'select');

        // hiển thị blog
        Route::post('/show', 'show');

        // hiển thị blog
        Route::post('/off', 'off');

        // lấy data blog
        Route::post('/get-data', 'get_data');

        // tạo blog
        Route::post('/create', 'create');

        // sửa blog
        Route::post('/edit', 'edit');

        // xóa blog
        Route::post('/delete', 'delete');
    });

    Route::prefix('course')->controller(ControllersApiV1ManageCourse::class)->group(function () {
        // lấy danh sách khóa học
        Route::post('/', 'get');

        // lấy danh sách quyền course
        Route::post('/role/get', 'role_get');

        // cập nhật quyền tài khoản course
        Route::post('/role/set', 'role_set');

        // mở hiển thị lớp
        Route::post('/show', 'show');

        // tắt hiển thị lớp
        Route::post('/off', 'off');

        // tạo lớp | khối mới
        Route::post('/create', 'create');

        // sửa lớp | khối
        Route::post('/edit', 'edit');

        // xóa lớp
        Route::post('/delete', 'delete');

        Route::prefix('session')->group(function () {
            // tạo tiết mới
            Route::post('/create', 'session_create');

            // sửa tiết
            Route::post('/edit', 'session_edit');

            // mở hiển thị tiết
            Route::post('/show', 'session_show');

            // tắt hiển thị tiết
            Route::post('/off', 'session_off');

            // xóa tiết
            Route::post('/delete', 'session_delete');
        });

        // upload file ppt
        Route::post('/ppt/upload', 'ppt_upload');

        // delete file ppt
        Route::post('/ppt/delete', 'ppt_delete');

        // upload file pdf
        Route::post('/pdf/upload', 'pdf_upload');

        // delete file pdf
        Route::post('/pdf/delete', 'pdf_delete');
    });

    Route::prefix('book')->controller(ControllersApiV1ManageBook::class)->group(function () {
        // lấy danh sách khóa học của sách kỹ năng sống
        Route::post('/', 'get');

        // lấy danh sách quyền book
        Route::post('/role/get', 'role_get');

        // cập nhật quyền tài khoản book
        Route::post('/role/set', 'role_set');

        // mở hiển thị lớp
        Route::post('/show', 'show');

        // tắt hiển thị lớp
        Route::post('/off', 'off');

        // tạo lớp | khối mới
        Route::post('/create', 'create');

        // sửa lớp | khối
        Route::post('/edit', 'edit');

        // xóa lớp
        Route::post('/delete', 'delete');

        Route::prefix('session')->group(function () {
            // tạo tiết mới
            Route::post('/create', 'session_create');

            // sửa tiết
            Route::post('/edit', 'session_edit');

            // mở hiển thị tiết
            Route::post('/show', 'session_show');

            // tắt hiển thị tiết
            Route::post('/off', 'session_off');

            // xóa tiết
            Route::post('/delete', 'session_delete');
        });

        // upload file pdf
        Route::post('/pdf/upload', 'pdf_upload');

        // delete file pdf
        Route::post('/pdf/delete', 'pdf_delete');
    });

    Route::prefix('action')->controller(ControllersApiV1ManageAction::class)->group(function () {
        // lấy danh sách lớp tư vấn học đường
        Route::post('/', 'get');

        // lấy danh sách quyền book
        Route::post('/role/get', 'role_get');

        // cập nhật quyền tài khoản book
        Route::post('/role/set', 'role_set');

        // mở hiển thị lớp
        Route::post('/show', 'show');

        // tắt hiển thị lớp
        Route::post('/off', 'off');

        // tạo lớp | khối mới
        Route::post('/create', 'create');

        // sửa lớp | khối
        Route::post('/edit', 'edit');

        // xóa lớp
        Route::post('/delete', 'delete');

        Route::prefix('session')->group(function () {
            // tạo tiết mới
            Route::post('/create', 'session_create');

            // sửa tiết
            Route::post('/edit', 'session_edit');

            // mở hiển thị tiết
            Route::post('/show', 'session_show');

            // tắt hiển thị tiết
            Route::post('/off', 'session_off');

            // xóa tiết
            Route::post('/delete', 'session_delete');
        });
    });

    Route::prefix('advise')->controller(ControllersApiV1ManageAdvise::class)->group(function () {
        // lấy danh sách lớp tư vấn học đường
        Route::post('/', 'get');

        // lấy danh sách quyền book
        Route::post('/role/get', 'role_get');

        // cập nhật quyền tài khoản book
        Route::post('/role/set', 'role_set');

        // mở hiển thị lớp
        Route::post('/show', 'show');

        // tắt hiển thị lớp
        Route::post('/off', 'off');

        // tạo lớp | khối mới
        Route::post('/create', 'create');

        // sửa lớp | khối
        Route::post('/edit', 'edit');

        // xóa lớp
        Route::post('/delete', 'delete');

        Route::prefix('session')->group(function () {
            // tạo tiết mới
            Route::post('/create', 'session_create');

            // sửa tiết
            Route::post('/edit', 'session_edit');

            // mở hiển thị tiết
            Route::post('/show', 'session_show');

            // tắt hiển thị tiết
            Route::post('/off', 'session_off');

            // xóa tiết
            Route::post('/delete', 'session_delete');
        });
    });

    // phẩn hồi
    Route::post('/feedback', [ControllersApiV1Home::class, 'manage_feedback']);
});

// đây là thông tin của pdf view
Route::post('/loguseractivity/create-many-async',  [ControllersApiV1Home::class, 'loguseractivity']);

// xử lý upload ảnh chỉ có quản trị viên mới có quyền up
// Route::post('ckfinder/upload', [ControllersApiV1Home::class, 'ckfinderUpload']);

// xử lý upload ảnh chỉ có quản trị viên mới có quyền up
Route::post('tiny/upload', [ControllersApiV1Home::class, 'tinyUpload']);
