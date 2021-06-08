<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EmployeeController;

use App\Http\Controllers\TaskController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



// Route::get('/data', 'EmployeeController@index')->name('path.index');
// Route::post('/data', 'EmployeeController@store')->name('path.store');
// Route::get('/data/{id}', 'EmployeeController@show')->name('path.show');
// Route::put('/data/{data}', 'EmployeeController@update')->name('path.update');
// Route::delete('/data/{data}', 'EmployeeController@destroy')->name('path.destroy');




Route::resource('employees', EmployeeController::class);




Route::resource('tasks', TaskController::class);



// Route::resource('to_dos', TaskController::class);
