<?php

namespace App\Http\Controllers;

use App\DeviceData;
use Illuminate\Http\Request;

class DeviceDataController extends Controller
{
    function getDevices()
    {
        return response()->json(\Auth::user()->devices()->with('devicedata')->get());
    }

    function addDeviceData(Request $request, $id)
    {
        $data = new DeviceData($request->all());
        \Auth::user()
            ->devices()->where('id', $id)->first()
            ->devicedata()->save($data);
        return $this->getDevices();
    }

    function removeDeviceData(Request $request, $device_id, $devicedata_id){
        \Auth::user()
            ->devices()->where('id', $device_id)->first()
            ->devicedata()->where('id', $devicedata_id)
            ->delete();
        return $this->getDevices();

    }
}
