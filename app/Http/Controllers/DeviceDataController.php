<?php

namespace App\Http\Controllers;

use App\DeviceData;
use Illuminate\Http\Request;

class DeviceDataController extends Controller
{
    function addDeviceData(Request $request,$id)
    {
        $data = new DeviceData($request->all());
        //\Auth::user()->devices()[$id]->save(new DeviceData($req));
       // return $this->getDevices();
       \Auth::user()
           ->devices()->where('id',$id)->first()
           ->devicedata()->save($data);
        return response()->json(["id"=>$id,$request->all() ]);
    }
}
