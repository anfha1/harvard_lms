<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

use App\Http\Middleware\UserNoLogin as UserNoLoginMiddelware;
use App\Http\Middleware\UserLogin as UserLoginMiddelware;
use App\Http\Middleware\UserManager as UserManagerMiddelware;
use App\Http\Middleware\UserAdmin as UserAdminMiddelware;

# api
use App\Http\Controllers\Api\Home as ControllersApiHome;
use App\Http\Controllers\Api\Manage\User as ControllersApiManageUser;
use App\Http\Controllers\Api\Manage\Course as ControllersApiManageCourse;
use App\Http\Controllers\Api\Manage\Blog as ControllersApiManageBlog;
use App\Http\Controllers\Api\Manage\Session as ControllersApiManageSession;
use App\Http\Controllers\Api\Manage\Role as ControllersApiManageRole;

# Views
use App\Http\Controllers\View\Home as ControllersViewHome;
use App\Http\Controllers\View\Manage as ControllersViewManage;
use App\Http\Controllers\View\Ppt as ControllersViewPpt;
use App\Http\Controllers\View\Pdf as ControllersViewPdf;
use App\Http\Controllers\View\Doc as ControllersViewDoc;
use App\Http\Controllers\View\Blog as ControllersViewBlog;
use App\Http\Controllers\View\Manage\User as ControllersViewManageUser;
use App\Http\Controllers\View\Manage\Course as ControllersViewManageCourse;
use App\Http\Controllers\View\Manage\Blog as ControllersViewManageBlog;
use App\Http\Controllers\View\Manage\Session as ControllersViewManageSession;

Route::get('/pdf', [ControllersViewPdf::class, 'view']);
Route::post('/Base/CheckLangCookie', function() {
    return 'true';
});
Route::post('/Banner/GetBannerAdvertisement', function() {
    return view('other.baner');
});

// demo hiển thị powerpoint
Route::get('/ppt/{id_ppt}/{id_session}', [ControllersViewPpt::class, 'view'])->name('ppt.view')->where('id_ppt', '[0-9]+')->where('id_session', '[0-9]+');

// hiển thị document
Route::get('/document/{id_session}', [ControllersViewDoc::class, 'view'])->name('doc.view')->where('id_session', '[0-9]+');

// hiển thị blog
Route::get('/blog/{id_blog}', [ControllersViewBlog::class, 'view'])->name('blog.view')->where('id_blog', '[0-9]+');

# Trang cơ bản
// Trang chủ
Route::get('/', [ControllersViewHome::class, 'home'])->name('home');

// Khóa học
Route::get('course/{id}', [ControllersViewHome::class, 'course'])->name('course');

// Đăng nhập
Route::get('login', [ControllersViewHome::class, 'login'])->name('login')->middleware(UserNoLoginMiddelware::class);

// đăng xuất
Route::get('logout', [ControllersViewHome::class, 'logout'])->name('logout')->middleware(UserLoginMiddelware::class);

// xử lý đăng nhập
Route::post('login', [ControllersApiHome::class, 'login'])->middleware(UserNoLoginMiddelware::class);

// xử lý upload file
Route::post('ckfinder/upload', [ControllersApiHome::class, 'ckfinderUpload'])->name('ckfinder.upload');

# Quản trị
Route::prefix('manage')->name('manage.')->middleware(UserLoginMiddelware::class)->group(function () {
    // Trang chủ
    Route::get('/', [ControllersViewManage::class, 'home'])->name('home')->middleware(UserManagerMiddelware::class);

    // trang quản trị user
    Route::prefix('user')->name('user.')->controller(ControllersViewManageUser::class)->group(function () {
        // trang quản trị người dùng
        Route::get('/', 'home')->name('home')->middleware(UserManagerMiddelware::class);

        // Thêm tài khoản
        Route::get('create', 'create')->name('create')->middleware(UserAdminMiddelware::class);

        // sửa tài khoản
        Route::get('edit/{id}', 'edit')->name('edit')->middleware(UserAdminMiddelware::class)->where('id', '[0-9]+');

        // set quyền môn học
        Route::get('{id}/course', 'course')->name('course')->middleware(UserManagerMiddelware::class)->where('id', '[0-9]+');
    });

    // trang quản trị course
    Route::prefix('course')->name('course.')->controller(ControllersViewManageCourse::class)->group(function () {
        // trang quản trị lộ trình
        Route::get('/', 'home')->name('home')->middleware(UserManagerMiddelware::class);

        // trang xem khối
        Route::get('{id}', 'detail')->name('detail')->middleware(UserManagerMiddelware::class)->where('id', '[0-9]+');

        // trang thêm khối mới
        Route::get('create', 'create')->name('create')->middleware(UserAdminMiddelware::class);

        // trang sửa khối
        Route::get('edit/{id}', 'edit')->name('edit')->middleware(UserAdminMiddelware::class)->where('id', '[0-9]+');
    });

    // trang quản trị new
    Route::prefix('blog')->name('blog.')->controller(ControllersViewManageBlog::class)->group(function () {
        // trang tin tức
        Route::get('/', 'home')->name('home')->middleware(UserAdminMiddelware::class);

        // trang thêm tin tức mới
        Route::get('create', 'create')->name('create')->middleware(UserAdminMiddelware::class);

        // trang sửa tin tức
        Route::get('edit/{id}', 'edit')->name('edit')->middleware(UserAdminMiddelware::class)->where('id', '[0-9]+');
    });

    // trang quản lý tài liệu
    Route::prefix('document')->name('doc.')->controller(ControllersViewManageSession::class)->group(function () {
        // trang thêm tài liệu
        Route::get('create/{id}', 'createdoc')->name('create')->middleware(UserAdminMiddelware::class)->where('id', '[0-9]+');

        // trang sửa tài liệu
        Route::get('edit/{id}', 'editdoc')->name('edit')->middleware(UserAdminMiddelware::class)->where('id', '[0-9]+');
    });

    # Api
    Route::prefix('user')
    ->controller(ControllersApiManageUser::class)
    ->middleware([UserAdminMiddelware::class])
    ->group(function() {
        // xử lý thêm tài khoản
        Route::post('create', 'create');

        // xử lý sửa tài khoản
        Route::post('edit/{id}', 'edit')->where('id', '[0-9]+');

        // xử lý xóa tài khoản
        Route::post('delete', 'delete');
    });

    Route::prefix('course')
    ->controller(ControllersApiManageCourse::class)
    ->middleware([UserAdminMiddelware::class])
    ->group(function() {
        // xử lý thêm tài khoản
        Route::post('create', 'create');

        // xử lý sửa tài khoản
        Route::post('edit/{id}', 'edit')->where('id', '[0-9]+');

        // xử lý xóa tài khoản
        Route::post('delete', 'delete');
    });

    Route::prefix('blog')
    ->controller(ControllersApiManageBlog::class)
    ->middleware([UserAdminMiddelware::class])
    ->group(function() {
        // xử lý thêm tài khoản
        Route::post('create', 'create');

        // xử lý sửa tài khoản
        Route::post('edit/{id}', 'edit')->where('id', '[0-9]+');

        // xử lý xóa tài khoản
        Route::post('delete', 'delete');
    });

    Route::prefix('session')
    ->controller(ControllersApiManageSession::class)
    ->group(function() {
        // xử lý thêm tiết
        Route::post('create', 'create')->middleware([UserAdminMiddelware::class]);

        // hiện tiết
        Route::post('show', 'show')->middleware([UserManagerMiddelware::class]);

        // ẩn tiết
        Route::post('hide', 'hide')->middleware([UserManagerMiddelware::class]);

        // đổi tên
        Route::post('rename', 'rename')->middleware([UserAdminMiddelware::class]);

        // xử lý xóa tiết
        Route::post('delete', 'delete')->middleware([UserAdminMiddelware::class]);
    });

    // xử lý document
    Route::prefix('document')->controller(ControllersApiManageSession::class)->group(function () {
        // trang thêm tài liệu
        Route::post('create/{id}', 'createdoc')->middleware(UserAdminMiddelware::class)->where('id', '[0-9]+');

        // trang sửa tài liệu
        Route::post('edit/{id}', 'editdoc')->middleware(UserAdminMiddelware::class)->where('id', '[0-9]+');

        // xóa tài liệu
        Route::post('delete', 'deldoc')->middleware(UserAdminMiddelware::class);
    });

    // xử lý ppt
    Route::prefix('ppt')->controller(ControllersApiManageSession::class)->group(function () {
        // trang thêm ppt
        Route::post('upload', 'uploadppt')->middleware(UserAdminMiddelware::class);

        // xóa ppt
        Route::post('delete', 'delppt')->middleware(UserAdminMiddelware::class);
    });

    // xử lý ppt
    Route::prefix('role')->controller(ControllersApiManageRole::class)->group(function () {
        // phân quyền user
        Route::post('user', 'user')->middleware(UserManagerMiddelware::class);
    });
});
