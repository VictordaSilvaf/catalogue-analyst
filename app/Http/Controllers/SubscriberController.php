<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSubscriberRequest;
use App\Models\Subscriber;
use App\Http\Requests\UpdateSubscriberRequest;
use Inertia\Inertia;
use Inertia\Response;

class SubscriberController extends Controller
{
    // FRONT
    public function front_index(): Response
    {
        return Inertia::render('subscribers/index', [
            'subscribers' => Subscriber::latest()->paginate(20)
        ]);
    }

    public function front_create(): Response
    {
        return Inertia::render('subscribers/create');
    }

    public function front_store(StoreSubscriberRequest $request)
    {
        Subscriber::create($request->validated());
        return redirect()->route('subscribers.front_index');
    }

    public function front_edit(Subscriber $subscriber): Response
    {
        return Inertia::render('subscribers/edit', [
            'subscriber' => $subscriber
        ]);
    }

    public function front_update(UpdateSubscriberRequest $request, Subscriber $subscriber)
    {
        $subscriber->update($request->validated());
        return redirect()->route('subscribers.front_index');
    }

    public function front_destroy(Subscriber $subscriber)
    {
        $subscriber->delete();
        return redirect()->route('subscribers.front_index');
    }

    // API
    public function index()
    {
        return Subscriber::latest()->paginate(20);
    }

    public function store(StoreSubscriberRequest $request)
    {
        return Subscriber::create($request->validated());
    }

    public function show(Subscriber $subscriber)
    {
        return $subscriber;
    }

    public function update(UpdateSubscriberRequest $request, Subscriber $subscriber)
    {
        $subscriber->update($request->validated());
        return $subscriber;
    }

    public function destroy(Subscriber $subscriber)
    {
        $subscriber->delete();
        return response()->noContent();
    }
}
