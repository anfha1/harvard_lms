<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class luser extends Model
{
    use HasFactory;

    public function role() {
        return $this->hasMany(lsessionrole::class);
    }
}
