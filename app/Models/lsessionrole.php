<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lsessionrole extends Model
{
    use HasFactory;

    protected $fillable = ['luser_id', 'lsession_id'];

    public function user() {
        return $this->belongsTo(luser::class, 'luser_id');
    }
}
