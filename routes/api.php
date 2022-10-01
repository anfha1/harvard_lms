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

// giải lập giả lập tin tức
Route::post('/blog', [ControllersApiV1Home::class, 'blog']);

// giải lập khối và lớp học
Route::post('/course', [ControllersApiV1Home::class, 'course']);

// lấy danh sách khóa học với trang thái quản trị viên
Route::post('/manage/course', [ControllersApiV1Home::class, 'manage_course']);

// mở hiển thị
Route::post('/manage/course/show', [ControllersApiV1Home::class, 'manage_course_show']);

// tắt hiển thị
Route::post('/manage/course/off', [ControllersApiV1Home::class, 'manage_course_off']);

// tạo lớp | khối mới
Route::post('/manage/course/create', [ControllersApiV1Home::class, 'manage_course_create']);

// xóa lớp
Route::post('/manage/course/delete', [ControllersApiV1Home::class, 'manage_course_delete']);

// upload file ppt
Route::post('/manage/ppt/upload', [ControllersApiV1Home::class, 'manage_ppt_upload']);

// upload file pdf
Route::post('/manage/pdf/upload', [ControllersApiV1Home::class, 'manage_pdf_upload']);

// đây là thông tin của pdf view
Route::post('/loguseractivity/create-many-async',  [ControllersApiV1Home::class, 'loguseractivity']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
