import { useState, FormEvent } from 'react';
import { useLogin, useNotify } from 'react-admin';


const MyLoginPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        login({ email, password }).catch(() =>
            notify('Invalid email or password', { type: 'warning' })
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default MyLoginPage;
