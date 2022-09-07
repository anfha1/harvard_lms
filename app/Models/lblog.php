<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Carbon\Carbon;

class lblog extends Model
{
    use HasFactory;

    // public function getCreatedAtAttribute($date) {
    //     // dd(Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('H:i:s d/m/Y'));
    //     return Carbon::createFromFormat('Y-m-d H:i:s', $date);
    // }

    // public function getUpdatedAtAttribute($date) {
    //     return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('H:i:s d/m/Y');
    // }
}
