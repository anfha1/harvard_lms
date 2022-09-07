<?php

namespace App\Http\Controllers\View;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\lblog;

class Blog extends Controller {
    public function view($id_blog) {
        $info_blog = lblog::find($id_blog);
        if ($info_blog && $info_blog->status) {
            return view('pages.blog', array_merge($GLOBALS['data_bind'], [
                'info_blog' => $info_blog,
            ]));
        }
        return redirect()->route('home');
    }
}
