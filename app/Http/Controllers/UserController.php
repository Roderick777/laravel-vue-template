<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\User;

class UserController extends Controller
{
    function lista(){ 
        $Usuarios = User::all();
        return response()->json($Usuarios);
    }

    function crear(Request $r) {
        return User::create([
            'name'      => $r->name,
            'email'     => $r->email,
            'password'  => Hash::make($r->password),
        ]);
    }
}
