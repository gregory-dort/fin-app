// src/api/users.js

export async function createUser(userData) {
    const response = await fetch('http://127.0.0.1:8000/users/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    // Sends error message to user if thje request fails
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Error creating user' );
    }

    // Returns JSON response if response ok
    return await response.json();
}