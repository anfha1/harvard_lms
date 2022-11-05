<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Carbon\Carbon;

class lbook extends Model
{
    use HasFactory;
    public function session() {
        return $this->hasMany(lbook_session::class, 'lbook_id');
    }
}
