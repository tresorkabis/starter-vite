import React from "react";
import { useLogin } from "@refinedev/core";

export const Login = () => {
    const { mutate, isLoading } = useLogin();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.target as HTMLFormElement).entries());

        mutate(data);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"

                    defaultValue="demo@demo.com"
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    name="password"

                    defaultValue="demodemo"
                />

                {isLoading && <span>loading...</span>}
                <button type="submit" disabled={isLoading}>
                    Submit
                </button>
            </form>
        </div>
    );
}