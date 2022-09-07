<?php

namespace App\Http\Controllers\Api\Manage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

use App\Http\Requests\SessionCreateRequest;
use App\Http\Requests\SessionRenameRequest;
use App\Http\Requests\DocumentCreateRequest;
use App\Http\Requests\DocumentEditRequest;
use App\Models\lcourse;
use App\Models\lsession;
use App\Models\lppt;

class Session extends Controller {
    public function create(SessionCreateRequest $request) {
        $info_course = lcourse::find($request->id_course);
        if ($info_course) {
            $session = new lsession;
            $session->lcourse_id = $request->id_course;
            $session->name = $request->name;
            $session->save();
            return redirect()->back()->with('success-msg', 'Đã thêm thành công');
        }
        throw ValidationException::withMessages([
            'msg' => 'Khối không hợp lệ vui lòng kiểm tra lại!.'
        ]);
    }

    public function show(Request $request) {
        $info_session = lsession::find($request->id_session);
        if ($info_session) {
            if ($info_session->status) {
                throw ValidationException::withMessages([
                    'msg' => 'Tiết đã trong trạng thái xuất bản!'
                ]);
            }
            $info_session->status = 1;
            $info_session->save();
            return redirect()->back()->with('success-msg', 'Đã xuất bản thành công');
            
        }
        throw ValidationException::withMessages([
            'msg' => 'Tiết không tồn tại hoặc đã bị xóa!'
        ]);
    }

    public function hide(Request $request) {
        $info_session = lsession::find($request->id_session);
        if ($info_session) {
            if ($info_session->status) {
                $info_session->status = 0;
                $info_session->save();
                return redirect()->back()->with('success-msg', 'Đã hủy xuất bản thành công');
            }
            throw ValidationException::withMessages([
                'msg' => 'Tiết đã trong trạng thái không xuất bản!'
            ]);
        }
        throw ValidationException::withMessages([
            'msg' => 'Tiết không tồn tại hoặc đã bị xóa!'
        ]);
    }

    public function rename(SessionRenameRequest $request) {
        $info_session = lsession::find($request->id_session);
        if ($info_session) {
            if ($info_session->name != $request->name) {
                $info_session->name = $request->name;
                $info_session->save();
                return redirect()->back()->with('success-msg', 'Đã đổi tên thành công');
            }
            return redirect()->back()->with('error-msg', 'Tên tiết không thay đổi!');
            // throw ValidationException::withMessages([
            //     'msg' => 'Tên tiết không thay đổi!',
            // ]);
        }
        throw ValidationException::withMessages([
            'msg' => 'Tiết không tồn tại hoặc đã bị xóa!'
        ]);
    }

    public function delete(Request $request) {
        $info_session = lsession::find($request->id_session);
        if ($info_session) {
            $info_session->delete();
            return redirect()->back()->with('success-msg', 'Đã xóa thành công');
        }
        throw ValidationException::withMessages([
            'msg' => 'Tiết không tồn tại hoặc đã bị xóa!'
        ]);
    }

    public function createdoc(DocumentCreateRequest $request, $id_session) {
        $info_session = lsession::find($id_session);
        if ($info_session) {
            if ($info_session->doctype) {
                dd('vô');
                throw ValidationException::withMessages([
                    'msg' => 'Đã tồn tại tài liệu! không thể tạo thêm.'
                ]);
            }
            $pathContent = "document_{$id_session}.txt";
            Storage::disk('ftp')->put($pathContent, $request->content);
            $info_session->doctype = 1;
            $info_session->save();
            return redirect()->route('manage.course.detail', ['id' => $info_session->lcourse_id])->with('success-msg', 'Đã thêm thành công');
        }
        throw ValidationException::withMessages([
            'msg' => 'Tiết không tồn tại hoặc đã bị xóa!'
        ]);
    }

    public function editdoc(DocumentEditRequest $request, $id_session) {
        // sửa document
        $info_session = lsession::find($id_session);
        if ($info_session) {
            if ($info_session->doctype) {
                // Thay thế nội dung
                $pathContent = "document_{$id_session}.txt";
                $content = Storage::disk('ftp')->get($pathContent);
                if ($request->content && $content != $request->content) {
                    Storage::disk('ftp')->put($pathContent, $request->content);
                    return redirect()->route('manage.course.detail', ['id' => $info_session->lcourse_id])->with('success-msg', 'Đã sửa thành công');
                }
                throw ValidationException::withMessages([
                    'msg' => 'Không có gì thay đổi'
                ]);
            }
            throw ValidationException::withMessages([
                'msg' => 'Chưa có tài liệu không thể sửa!'
            ]);
        }
        throw ValidationException::withMessages([
            'msg' => 'Tiết không tồn tại hoặc đã bị xóa!'
        ]);
    }

    public function deldoc(Request $request) {
        $info_session = lsession::find($request->id_session);
        if ($info_session) {
            if ($info_session->doctype) {
                Storage::disk('ftp')->delete("document_{$request->id_session}.txt");
                $info_session->doctype = 0;
                $info_session->save();
                return redirect()->back()->with('success-msg', 'Đã xóa thành công');
            }
            throw ValidationException::withMessages([
                'msg' => 'Chưa có tài liệu không thể xóa!'
            ]);
        }
        throw ValidationException::withMessages([
            'msg' => 'Tiết không tồn tại hoặc đã bị xóa!'
        ]);
    }

    public function uploadppt(Request $request) {
        $res = [
            'status' => 0,
            'msg' => 'Tiết không tồn tại hoặc đã bị xóa!',
        ];
        $info_session = lsession::find($request->id_session);
        if ($info_session) {
            $res['msg'] = 'File upload không hợp lệ vui lòng gửi lại!';
            if ($request->file('ppt')) {
                $file = $request->file('ppt');
                $idc = (int)(microtime(1)*1000);
                $filename = $idc.'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                $file->move(public_path('upload/ppt'), $filename);

                $ppt = new lppt;
                $ppt->name = $filename;
                $ppt->nameor = $file->getClientOriginalName();
                $ppt->idc = $idc;
                $ppt->save();

                if ($info_session->lppt_id) {
                    $pptd = lppt::find($info_session->lppt_id);
                    $file_ppt = public_path('upload/ppt').'/'.$pptd->name;
                    if (is_file($file_ppt)) {
                        unlink($file_ppt);
                    }
                    $pptd->delete();
                }
                $info_session->lppt_id = $ppt->id;
                $info_session->save();

                $res['status'] = 1;
                $res['msg'] = 'Tải lên thành công';
            }
        }
        return response()->json($res);
    }

    public function delppt(Request $request) {
        $info_session = lsession::find($request->id_session);
        if ($info_session) {
            if ($info_session->lppt_id) {
                $ppt = lppt::find($info_session->lppt_id);
                $file_ppt = public_path('upload/ppt').'/'.$ppt->name;
                if (is_file($file_ppt)) {
                    unlink($file_ppt);
                }
                $ppt->delete();

                $info_session->lppt_id = NULL;
                $info_session->save();

                $res['status'] = 1;
                $res['msg'] = 'Tải lên thành công';
                return redirect()->back()->with('success-msg', 'Đã xóa thành công');
            }
            throw ValidationException::withMessages([
                'msg' => 'Chưa có powerpoint không thể xóa!'
            ]);
        }
        throw ValidationException::withMessages([
            'msg' => 'Tiết không tồn tại hoặc đã bị xóa!'
        ]);
    }
}
