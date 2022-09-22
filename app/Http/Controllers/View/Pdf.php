<?php

namespace App\Http\Controllers\View;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Pdf extends Controller {
    public function view() {
        return view('pages.pdf');
    }
}
