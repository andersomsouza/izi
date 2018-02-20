<?php

namespace App\Http\Controllers;

use App\Device;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DeviceController extends Controller
{
    function getDevices()
    {
        return response()->json(\Auth::user()->devices()->with('devicedata')->get());
    }

    function addDevice(Request $request)
    {
        $device = new Device($request->all());
        \Auth::user()->devices()->save($device);
        return $this->getDevices();
    }
    function remove($id){
        \Auth::user()->devices()->where('id',$id)->delete();
        return $this->getDevices();
    }
}
