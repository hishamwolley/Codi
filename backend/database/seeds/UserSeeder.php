<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'firstname' => Str::random(5),
            'lastname' => Str::random(5),
            'email' => Str::random(5) . '@gmail.com',
            'password' => Str::random(8)
        ]);
    }
}
