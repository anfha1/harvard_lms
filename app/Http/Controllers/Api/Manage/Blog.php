<?php

namespace App\Http\Controllers\Api\Manage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;

use App\Models\lblog;
use App\Http\Requests\BlogCreateRequest;
use App\Http\Requests\BlogEditRequest;

class Blog extends Controller {
    public function create(BlogCreateRequest $request) {
        $blog = new lblog;

        $blog->title = $request->title;
        $blog->slug = Str::slug($request->title, '-');
        $blog->luser_id = $GLOBALS['data_bind']['id_user'];

        if (!empty($request->description)) {
            $blog->description = $request->description;
        }

        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
            $file->move(public_path('upload/photo'), $filename);
            $blog->photo = '/upload/photo/' . $filename;
        } else {
            $imgs = config('app.photo');
            $blog->photo = $imgs[rand(0, count($imgs)-1)];
        }
        $blog->save();
        if (!empty($request->content)) {
            Storage::disk('ftp')->put("blog_{$blog->id}.txt", $request->content);
        }
        return redirect()->route('manage.blog.home')->with('success-msg', 'Đã tạo khối thành công');
    }

    public function edit(BlogEditRequest $request, $id) {
        $info_blog = lblog::find($id);
        if ($info_blog) {
            $change = 0;
            // thay đổi tên
            if ($info_blog->title != $request->title) {
                $info_blog->title = $request->title;
                $info_blog->slug = Str::slug($request->title, '-');
                $change++;
            }

            if ($info_blog->description != $request->description) {
                $info_blog->description = $request->description;
                $change++;
            }

            $pathContent = "blog_{$id}.txt";
            $content = Storage::disk('ftp')->get($pathContent);
            if ($request->content && $content != $request->content) {
                Storage::disk('ftp')->put($pathContent, $request->content);
                $change++;
            }

            // thay đổi ảnh
            if ($request->file('image')) {
                $file_img = public_path().'/'.$info_blog->photo;
                if (is_file($file_img)) {
                    unlink($file_img);
                }
                $file = $request->file('image');
                $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                $file->move(public_path('upload/photo'), $filename);
                $info_blog->photo = '/upload/photo/' . $filename;
                $change++;
            }
            // thay đổi trạng thái
            if ($info_blog->status != $request->status) {
                $info_blog->status = $request->status;
                $change++;
            }
            if ($change > 0) {
                $info_blog->save();
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
        $info_blog = lblog::find($request->id_blog);
        if ($info_blog) {
            // xóa ảnh
            $file_img = public_path().'/'.$info_blog->photo;
            if (is_file($file_img)) {
                unlink($file_img);
            }

            // xóa content
            Storage::disk('ftp')->delete("blog_{$request->id_blog}.txt");

            // xóa hẳn bài viết
            $info_blog->delete();
        }
        return redirect()->route('manage.blog.home')->with('success-msg', 'Đã xóa thành công');
    }
}
