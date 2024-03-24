"use client"
import React, {useState} from 'react';
import InputField from '@/components/InputField';
import SubmitButton from '@/components/SubmitButton';
import {useRouter} from 'next/navigation';


const LoginPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log({username, password, rememberMe});


        const isAuthenticated = true;

        if (isAuthenticated) {
            const currentUser = {name: username};
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            router.push('/StartPage');
        } else {

            alert('Аутентификация не удалась');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 w-full sm:w-[400px] m-auto pt-8 flex flex-col">
            <InputField
                label="Login"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                />
                <label htmlFor="rememberMe">Запомнить</label>
            </div>
            <SubmitButton label="Войти"/>
            <span className="block text-center">Ещё нет аккаунта? <a href="/registration" className="underline">Зарегистрироваться</a></span>
        </form>
    );
};

export default LoginPage;