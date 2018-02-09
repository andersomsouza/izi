<?php

use Faker\Generator as Faker;

$factory->define(App\DeviceData::class, function (Faker $faker) {
    return [
        "topic" => $faker->word,
        "type" => $faker->randomElement(['float', 'int', 'string', 'none']),
        "topic" => $faker->colorName,
        "label" => $faker->name
    ];
});
