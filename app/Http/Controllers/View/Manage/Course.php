<?php

namespace App\Http\Controllers\View\Manage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\lcourse;

class Course extends Controller {
    public function home() {
        $info_user = $GLOBALS['data_bind']['info_user'];
        if ($info_user->role == 1) {
            $ListCourse = lcourse::all();
        } else {
            $ListCourse = lcourse::where('status', 1)->get();
        }
        return view('pages.manage.course', array_merge($GLOBALS['data_bind'], [
            'list_course' => $ListCourse,
        ]));
    }

    public function detail($id) {
        $info_course = lcourse::find($id);
        if ($info_course) {
            if ($info_course->status || $GLOBALS['data_bind']['info_user']->role == 1) {
                return view('pages.manage.course.detail', array_merge($GLOBALS['data_bind'], [
                    'info_course' => $info_course,
                ]));
            }
        }
        return redirect()->route('manage.course.home');
    }

    public function create() {
        return view('pages.manage.course.create', $GLOBALS['data_bind']);
    }

    public function edit($id) {
        $info_course = lcourse::find($id);
        if ($info_course) {
            if ($info_course->status || $GLOBALS['data_bind']['info_user']->role == 1) {
                return view('pages.manage.course.edit', array_merge($GLOBALS['data_bind'], [
                    'info_course' => $info_course,
                ]));
            }
        }
        return redirect()->route('manage.course.home');
    }
}
