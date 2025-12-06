<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('subscribers', function (Blueprint $table) {
            $table->id();
            $table->string('name');                  // nome do assinante
            $table->string('email')->unique();       // email único
            $table->string('phone')->nullable();     // telefone opcional
            $table->boolean('is_active')->default(true); // status
            $table->timestamp('subscribed_at')->nullable(); // data da assinatura
            $table->timestamps();
            $table->softDeletes(); // boa prática para histórico
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscribers');
    }
};
