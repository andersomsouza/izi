<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        $ander = new App\User();
        $ander->email = "anderson@garten.com.br";
        $ander->name = "Anderson Souza";
        $ander->password = Hash::make('123456');
        $ander->save();

        factory(App\User::class, 1)->create();

        factory(App\Device::class, 5)->create()->each(function (App\Device $dev) {
            for ($i = 0; $i < 3; $i++) {
                $dev->deviceData()->save(factory(App\DeviceData::class)->make());
            }
        });


    }
}
