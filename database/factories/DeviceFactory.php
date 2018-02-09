<?php

use Faker\Generator as Faker;

$factory->define(App\Device::class, function (Faker $faker) {
    return [
        "name"=> $faker->word,
        "user_id" => function(){
            return App\User::first()->id;
        }
    ];
});
