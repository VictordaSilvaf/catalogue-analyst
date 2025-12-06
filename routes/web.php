<?php

use App\Http\Controllers\SubscriberController;
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

Route::prefix('admin/subscribers')->group(function () {
    Route::get('/', [SubscriberController::class, 'front_index'])->name('subscribers.front_index');
    Route::get('/create', [SubscriberController::class, 'front_create'])->name('subscribers.front_create');
    Route::post('/', [SubscriberController::class, 'front_store'])->name('subscribers.front_store');
    Route::get('/{subscriber}/edit', [SubscriberController::class, 'front_edit'])->name('subscribers.front_edit');
    Route::put('/{subscriber}', [SubscriberController::class, 'front_update'])->name('subscribers.front_update');
    Route::delete('/{subscriber}', [SubscriberController::class, 'front_destroy'])->name('subscribers.front_destroy');
});

require __DIR__ . '/settings.php';
