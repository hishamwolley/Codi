<?php

namespace App\GraphQL\Queries;

use Error;
use Laravel\Socialite\Facades\Socialite;

class SocialLogin
{

    public function redirectToProvider($_, $args)
    {
        return Socialite::driver('github')->stateless()->redirect()->getTargetUrl();
    }


    public function providerRedirect($_, $args)
    {
        try {

            $user = Socialite::driver('github')->stateless()->user();
            if (!$user) {
                return 'shit';
            }
            return 'asd';
        } catch (Error $e) {
            return $e;
        }
    }
}
