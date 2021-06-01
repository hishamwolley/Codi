<?php

namespace App\GraphQL\Mutations;

use App\User;
use GraphQL\Error\Error;
use Illuminate\Support\Facades\Hash;

class AuthMutator
{
    public function login($_, array $args)
    {

        $user = User::where('email', $args['email'])->first();
        if (!$user || !Hash::check($args['password'], $user->password)) {
            throw new Error('Invalid credentials.');
        }
        $token = $user->createToken('auth_token')->plainTextToken;

        return $token;
    }
    public function register($_, $args)
    {

        $user = User::create([
            'firstname' => $args['firstname'],
            'lastname' => $args['firstname'],
            'email' => $args['email'],
            'password' => Hash::make($args['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return ["user" => $user, "token" => $token];
    }
}
