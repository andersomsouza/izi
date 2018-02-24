<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// rotas de login e logout
Route::get('/login','Auth\LoginController@getLogin');
Route::get('/logout','Auth\LoginController@logout')->middleware('auth');
Route::post('/login','Auth\LoginController@login');

// api rest devices
Route::prefix('/api/v1')->group(function () {
    Route::get('devices', 'DeviceController@getDevices');
    Route::post('devices', 'DeviceController@addDevice');
    Route::post('devices/{id}/data', 'DeviceDataController@addDeviceData')->where('id', '[0-9]+');
    Route::delete('devices/{id}', 'DeviceController@remove')->where('id', '[0-9]+');
    Route::delete('devices/{device_id}/data/{devicedata_id}', 'DeviceDataController@removeDeviceData')->where(['device_id'=> '[0-9]+', 'device'=>'[0-9]+']);


});//->middleware('auth');


Route::get('/home', 'HomeController@index')->name('home');
