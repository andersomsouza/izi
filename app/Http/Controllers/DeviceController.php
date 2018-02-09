<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DeviceController extends Controller
{
    function getDevices() {
        return response()->json(\Auth::user()->devices()->with('devicedata')->get());
    }
}
