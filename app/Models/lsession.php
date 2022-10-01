<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lsession extends Model {
    use HasFactory;
    public function course() {
        return $this->belongsTo(lcourse::class, 'lcourse_id');
    }
}
