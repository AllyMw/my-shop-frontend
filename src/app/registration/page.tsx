"use client"

import {Alert} from '@/components/ui/alert'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {useEffect, useState} from 'react'
import axios from "axios";
import {AUTH_USER_URL, authUser, REGISTRATE_USER_URL, registrateUser} from "@/api/AuthAndRegistration";
import {router} from "next/client";
import {BASE_URL} from "@/utils/constants";

const RegisterForm = () => {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)

    const validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Неверный формат email');
            return;
        }


        const response = await registrateUser({
            login,
            email,
            password
        }).catch(error => {
                console.log("sdfewr")
                setError(error.response.data.error)
            }
        )


        useEffect(() => {
                if (error === null) {
                    router.push('/authentication');
                }
            }
        )
    }


    return (
        <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px] m-auto pt-8 flex flex-col">
            <div className="grid w-full items-center ">
                <Label htmlFor="login" className="mb-2">Login</Label>
                <Input className="w-full"
                       required
                       value={login}
                       onChange={(e) => setLogin(e.target.value)}
                       id="login"
                       type="text"
                />
            </div>
            <div className="grid w-full items-center ">
                <Label htmlFor="email" className="mb-2">Email</Label>
                <Input
                    className="w-full"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                />
            </div>
            <div className="grid w-full items-center ">
                <Label htmlFor="password" className="mb-2">Password</Label>
                <Input
                    className="w-full"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="password"
                />
            </div>
            {error && <Alert>{error}</Alert>}
            <div className="w-full">
                <Button className="w-full" size="lg">
                    Register
                </Button>
            </div>
            <div className="w-full text-center">Уже есть аккаунт? <a href="/authentication"
                                                                     className="text-indigo-500">Войти</a></div>
        </form>
    );
}
export default RegisterForm;