"use client";
import {useRouter} from "next/navigation";

export default function StartPage() {
    const router = useRouter();
    console.log(localStorage)
    let item = window.localStorage.getItem("currentUser");
    if (item === null) {
       router.push("/authentication")
    }
    const currentUser = JSON.parse(item || "{}");


    // @ts-ignore
    const onClickFunction = (event) => {
        event.preventDefault();
        router.push("/authentication")
    }

    return (
        <div className="flex flex-col">
            <h1>Привет, {currentUser?.name}</h1>
            <button onClick={onClickFunction}>Войти</button>
        </div>
    );
}