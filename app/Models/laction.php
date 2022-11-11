<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Carbon\Carbon;

class laction extends Model
{
    protected $table = 'lactions';
    use HasFactory;

    public function session() {
        return $this->hasMany(laction_session::class, 'laction_id');
    }
}
