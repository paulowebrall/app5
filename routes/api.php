<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\DogController;

//Route::resource('api', apiDogController::class);
Route::get('dogs', [DogController::class, 'index']);

// List single artigo
Route::get('dog/{id}', [DogController::class, 'show']);

// Create new artigo
Route::post('dog', [DogController::class, 'store']);

// Update artigo
Route::put('dog/{id}', [DogController::class, 'update']);

// Delete artigo
Route::delete('dog/{id}', [DogController::class,'destroy']);

