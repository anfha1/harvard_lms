<?php

namespace App\Http\Controllers\View\Manage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\lblog;

class Blog extends Controller {
    public function home() {
        $List_blog = lblog::all();
        return view('pages.manage.blog', array_merge($GLOBALS['data_bind'], [
            'list_blog' => $List_blog,
        ]));
    }

    public function create() {
        return view('pages.manage.blog.create', $GLOBALS['data_bind']);
    }

    public function edit($id) {
        $info_blog = lblog::find($id);
        if ($info_blog) {
            return view('pages.manage.blog.Edit', array_merge($GLOBALS['data_bind'], [
                'info_blog' => $info_blog,
            ]));
        }
        return redirect()->route('manage.blog.home');
    }
}
