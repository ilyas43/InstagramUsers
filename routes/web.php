<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//pour toures les categories
Route::get('/','instaConroller@index');
Route::post('/create','instaConroller@create');
Route::get('/liste','instaConroller@Liste');
Route::get('/singer_liste','instaConroller@singers');
Route::get('/sportifs_liste','instaConroller@sportifs');
Route::delete('/destroy/{name}','instaConroller@destroy');
Route::get('/profile/user/{name}','instaConroller@Profile');




Route::get('/profile', function () {
    return view('Profile');
});
Route::get('/sport','instaConroller@Sport');
//pour singers
Route::get('/singer','instaConroller@Singer');