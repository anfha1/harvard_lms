<?php

namespace App\Http\Controllers\Api\Manage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;

use App\Http\Requests\CourseCreateRequest;
use App\Http\Requests\CourseEditRequest;
use App\Models\lcourse;

class Course extends Controller {
    public function create(CourseCreateRequest $request) {
        $course = new lcourse;

        $course->name = $request->name;
        $course->slug = Str::slug($request->name, '-');

        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
            $file->move(public_path('upload/photo'), $filename);
            $course->photo = '/upload/photo/' . $filename;
        } else {
            $imgs = config('app.photo');
            $course->photo = $imgs[rand(0, count($imgs)-1)];
        }
        $course->save();

        return redirect()->route('manage.course.detail', [
            'id' => $course->id,
        ])->with('success-msg', 'Đã tạo khối thành công');
    }

    public function edit(CourseEditRequest $request, $id) {
        $info_course = lcourse::find($id);
        if ($info_course) {
            $change = 0;
            // thay đổi tên
            if ($info_course->name != $request->name) {
                $info_course->name = $request->name;
                $info_course->slug = Str::slug($request->name, '-');
                $change++;
            }
            // thay đổi ảnh
            if ($request->file('image')) {
                $file_img = public_path().'/'.$info_course->photo;
                if (is_file($file_img)) {
                    unlink($file_img);
                }
                $file = $request->file('image');
                $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                $file->move(public_path('upload/photo'), $filename);
                $info_course->photo = '/upload/photo/' . $filename;
                $change++;
            }
            // thay đổi trạng thái
            if ($info_course->status != $request->status) {
                $info_course->status = $request->status;
                $change++;
            }
            if ($change > 0) {
                $info_course->save();
                return redirect()->back()->with('success-msg', 'Đã cập nhật thành công');
            } else {
                throw ValidationException::withMessages([
                    'msg' => 'Không có gì thay đổi.'
                ]);
            }
        }
        throw ValidationException::withMessages([
            'msg' => 'Khối không tồn tại.'
        ]);
    }

    public function delete(Request $request) {
        $info_course = lcourse::find($request->id_course);
        if ($info_course) {
            $file_img = public_path().'/'.$info_course->photo;
            if (is_file($file_img)) {
                unlink($file_img);
            }
            $info_course->delete();
        }
        return redirect()->route('manage.course.home')->with('success-msg', 'Đã xóa thành công');
    }
}
