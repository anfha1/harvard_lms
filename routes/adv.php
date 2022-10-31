<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

use App\Http\Controllers\View\Pdf as ControllersViewPdf;
use App\Http\Controllers\View\Ppt as ControllersViewPpt;

// hiển thị document
// Route::get('/pdf/{id_session}', [ControllersViewPdf::class, 'view'])->where('id_session', '[0-9]+');

// hiển thị powerpoint
Route::get('/ppt/{ppt_id}/{session_id}.html', [ControllersViewPpt::class, 'view'])
->name('ppt.view')
->where('ppt_id', '[0-9]+')
->where('session_id', '[0-9]+');

// hiển thị tài liệu
Route::get('/view/doc/{course_slug}-{course_id}/{session_slug}-{session_id}.html', [ControllersViewPdf::class, 'view'])
->name('doc.view')
->where('course_slug', '[a-z0-9-]+')
->where('course_id', '[0-9]+')
->where('session_slug', '[a-z0-9-]+')
->where('session_id', '[0-9]+');

// các request giả
Route::post('/Base/CheckLangCookie', function() {
    return 'true';
});
Route::post('/Banner/GetBannerAdvertisement', function() {
    return view('other.baner');
});

Route::any('{any?}', function() {
    return view('pages.vue');
})->where('any', '.*');
