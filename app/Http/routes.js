'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.on('/').render('layout').middleware('auth');

Route.get('/register', 'RegisterController.create');
Route.post('/register', 'RegisterController.store');

Route.get('/login', 'LoginController.create');
Route.post('/login', 'LoginController.store');

Route.any('/logout', 'LoginController.destroy');

Route.get('/users', 'UserController.index').middleware('auth');


Route.any('*').render('vue').middleware('auth');
