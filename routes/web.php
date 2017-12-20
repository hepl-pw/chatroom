<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/chat', function () {
    return view('chatroom');
})->middleware('auth');

Route::get('/messages', function () {
    return \Chatroom\Message::with('user')->get();
})->middleware('auth');

Route::post('/messages', function () {
    $text = request('text');
    $message = Auth::user()->messages()->create(['text' => $text]);

    broadcast(new \Chatroom\Events\MessageCreated($message));
})->middleware('auth');