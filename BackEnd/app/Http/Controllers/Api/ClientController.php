<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    public function index()
    {
        return Client::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'email' => 'required|email|unique:clients,email',
            'telefono' => 'nullable|string|max:20',
        ]);

        $client = Client::create($validated);

        return response()->json([
            'message' => 'Cliente creado correctamente',
            'cliente' => $client
        ], 201); // 201 = Created
    }


    public function destroy($id)
    {
        $client = Client::findOrFail($id);
        $client->delete();

        return response()->json(['message' => 'Cliente eliminado']);
    }
}