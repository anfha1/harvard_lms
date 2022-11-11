<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Carbon\Carbon;

class ladvise extends Model
{
    protected $table = 'ladvises';
    use HasFactory;

    public function session() {
        return $this->hasMany(ladvise_session::class, 'ladvise_id');
    }
}
