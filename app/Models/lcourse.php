<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lcourse extends Model
{
    use HasFactory;
    public function session() {
        return $this->hasMany(lsession::class);
    }
}
