<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// đây là thông tin của pdf view
Route::post('/loguseractivity/create-many-async', function(Request $request) {
    return response()->json([
        '$id' => '1',
        'succeeded' => true
    ], 200, ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'], JSON_UNESCAPED_UNICODE);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
