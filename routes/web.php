<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('jsx', function () {
    return Inertia::render('jsxExample');
})->name('jsx.example');

Route::get('jsx-test', function () {
    return Inertia::render('Test/Test');
})->name('jsx.test');

Route::get('jsx-hello', function () {
    return Inertia::render('Hello');
})->name('jsx.hello');
require __DIR__.'/settings.php';
