import { useState } from 'react';
import { createUser } from '../api/users';

const Signup = () => {
    // Defining states for user input and system messages
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle user submissions
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newUser = await createUser({ username, email, password });
            setMessage(`User ${newUser.username} created successfully!`);
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Sign Up</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default Signup;
