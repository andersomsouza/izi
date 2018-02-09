<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    protected $fillable =['id','name'];

    public function deviceData()
    {
        return $this->hasMany('App\DeviceData');
    }
}
