<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeviceData extends Model
{
    protected $fillable = ['label','name','topic','type'];
}
