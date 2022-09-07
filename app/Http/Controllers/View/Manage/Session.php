<?php

namespace App\Http\Controllers\View\Manage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\lsession;

class Session extends Controller {
    public function createdoc(Request $request, $id_session) {
        $info_session = lsession::find($id_session);
        if ($info_session) {
            if ($info_session->doctype) {
                return redirect()->route('manage.course.detail', [
                    'id' => $info_session->lcourse_id,
                ])->with('error-msg', 'Đã tồn tại tài liệu! không thể tạo thêm.');
            }
            return view('pages.manage.session.doc.create', array_merge($GLOBALS['data_bind'], [
                'info_session' => $info_session,
            ]));
        }
        return redirect()->route('manage.course.home');
    }

    public function editdoc(Request $request, $id_session) {
        $info_session = lsession::find($id_session);
        if ($info_session) {
            if ($info_session->doctype) {
                return view('pages.manage.session.doc.edit', array_merge($GLOBALS['data_bind'], [
                    'info_session' => $info_session,
                ]));
            }
            return redirect()->route('manage.course.detail', [
                'id' => $info_session->lcourse_id,
            ])->with('error-msg', 'Chưa có tài liệu không thể sửa!');
        }
        return redirect()->route('manage.course.home');
    }
}
