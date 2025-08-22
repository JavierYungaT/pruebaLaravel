<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ClientController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/clientes', [ClientController::class, 'index']);
Route::post('/clientes', [ClientController::class, 'store']);
Route::delete('/clientes/{id}', [ClientController::class, 'destroy']);