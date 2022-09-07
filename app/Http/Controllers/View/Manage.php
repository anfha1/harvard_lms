<?php

namespace App\Http\Controllers\View;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Manage extends Controller {
    public function home() {
        return view('pages.manage', $GLOBALS['data_bind']);
    }
}
