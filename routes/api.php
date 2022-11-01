<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\V1\Home as ControllersApiV1Home;

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
// Route::get('/test', function() {
//     $file_upload_info['idc'] = '1664436283212';
//     $file_upload_info['name'] = '1664436283212.pdf';

//     $file_pdf = public_path('upload/pdf').'/'.$file_upload_info['name'];
//     $folder_pdf = public_path('pdf');
//     if (!is_dir($folder_pdf)) {
//         mkdir($folder_pdf);
//     }
//     $folder_pdf .= '/'.$file_upload_info['idc'];
//     if (!is_dir($folder_pdf)) {
//         mkdir($folder_pdf);
//     }

//     // tạo và lưu lại ảnh
//     $pdf = new \Spatie\PdfToImage\Pdf($file_pdf);
//     for ($i = 0; $i < $pdf->getNumberOfPages(); $i++) {
//         $pdf->setPage(($i+1))->saveImage($folder_pdf.'/page-'.$i.'.jpg');
//     }
//     return ':))';
// });

// lấy thông tin đăng nhập
Route::post('/user/info', [ControllersApiV1Home::class, 'check_info']);

// Đăng nhập
Route::post('/login', [ControllersApiV1Home::class, 'login']);

// đăng xuất
Route::post('/logout', [ControllersApiV1Home::class, 'logout']);

// lấy danh sách tin tức tin tức
Route::post('/blog', [ControllersApiV1Home::class, 'blog']);

// lấy danh sách tin tức tin tức lấy 2 bài
Route::post('/blog1', [ControllersApiV1Home::class, 'blog1']);

// Check quyền giới thiệu
Route::post('/blog/role/check', [ControllersApiV1Home::class, 'blog_role_check']);

// giải lập khối và lớp học
Route::post('/course', [ControllersApiV1Home::class, 'course']);

// check quyền xem ppt
Route::post('ppt/role/check', [ControllersApiV1Home::class, 'ppt_role_check']);

// lấy danh sách khóa học với trang thái quản trị viên
Route::post('/manage/user', [ControllersApiV1Home::class, 'manage_user']);

// Tạo tài khoản mới
Route::post('/manage/user/create', [ControllersApiV1Home::class, 'manage_user_create']);

// Sửa tài khoản
Route::post('/manage/user/edit', [ControllersApiV1Home::class, 'manage_user_edit']);

// Xóa tài khoản
Route::post('/manage/user/delete', [ControllersApiV1Home::class, 'manage_user_delete']);

// Xóa tài khoản
Route::post('/manage/user/lock', [ControllersApiV1Home::class, 'manage_user_lock']);

// Xóa tài khoản
Route::post('/manage/user/active', [ControllersApiV1Home::class, 'manage_user_active']);

// lấy danh sách quyền
Route::post('/manage/role/get', [ControllersApiV1Home::class, 'manage_role_get']);

// cập nhật quyền tài khoản
Route::post('/manage/role/set', [ControllersApiV1Home::class, 'manage_role_set']);

// lấy danh sách khóa học với trang thái quản trị viên
Route::post('/manage/course', [ControllersApiV1Home::class, 'manage_course']);

// mở hiển thị lớp
Route::post('/manage/course/show', [ControllersApiV1Home::class, 'manage_course_show']);

// tắt hiển thị lớp
Route::post('/manage/course/off', [ControllersApiV1Home::class, 'manage_course_off']);

// tạo lớp | khối mới
Route::post('/manage/course/create', [ControllersApiV1Home::class, 'manage_course_create']);

// sửa lớp | khối
Route::post('/manage/course/edit', [ControllersApiV1Home::class, 'manage_course_edit']);

// xóa lớp
Route::post('/manage/course/delete', [ControllersApiV1Home::class, 'manage_course_delete']);

// tạo tiết mới
Route::post('/manage/session/create', [ControllersApiV1Home::class, 'manage_session_create']);

// sửa tiết
Route::post('/manage/session/edit', [ControllersApiV1Home::class, 'manage_session_edit']);

// mở hiển thị tiết
Route::post('/manage/session/show', [ControllersApiV1Home::class, 'manage_session_show']);

// tắt hiển thị tiết
Route::post('/manage/session/off', [ControllersApiV1Home::class, 'manage_session_off']);

// xóa tiết
Route::post('/manage/session/delete', [ControllersApiV1Home::class, 'manage_session_delete']);

// upload file ppt
Route::post('/manage/ppt/upload', [ControllersApiV1Home::class, 'manage_ppt_upload']);

// delete file ppt
Route::post('/manage/ppt/delete', [ControllersApiV1Home::class, 'manage_ppt_delete']);

// upload file pdf
Route::post('/manage/pdf/upload', [ControllersApiV1Home::class, 'manage_pdf_upload']);

// delete file pdf
Route::post('/manage/pdf/delete', [ControllersApiV1Home::class, 'manage_pdf_delete']);

// đây là thông tin của pdf view
Route::post('/loguseractivity/create-many-async',  [ControllersApiV1Home::class, 'loguseractivity']);

// lấy danh sách blog
Route::post('/manage/blog', [ControllersApiV1Home::class, 'manage_blog']);

// hiển thị blog
Route::post('/manage/blog/show', [ControllersApiV1Home::class, 'manage_blog_show']);

// hiển thị blog
Route::post('/manage/blog/off', [ControllersApiV1Home::class, 'manage_blog_off']);

// lấy data blog
Route::post('/manage/blog/get-data', [ControllersApiV1Home::class, 'manage_blog_get_data']);

// tạo blog
Route::post('/manage/blog/create', [ControllersApiV1Home::class, 'manage_blog_create']);

// sửa blog
Route::post('/manage/blog/edit', [ControllersApiV1Home::class, 'manage_blog_edit']);

// xóa blog
Route::post('/manage/blog/delete', [ControllersApiV1Home::class, 'manage_blog_delete']);

// search category
Route::post('/category/search', [ControllersApiV1Home::class, 'search_category']);

// xử lý upload ảnh chỉ có quản trị viên mới có quyền up
Route::post('ckfinder/upload', [ControllersApiV1Home::class, 'ckfinderUpload']);
