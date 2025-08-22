<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ClientController;


Route::get('/', function () {
    return view('welcome');
});

//vista crear conciliaciones


// Route::get('/clientes', [ClientController::class, 'index']);
// Route::post('/clientes', [ClientController::class, 'store']);
// Route::delete('/clientes/{id}', [ClientController::class, 'destroy']);