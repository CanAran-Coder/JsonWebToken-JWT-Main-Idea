import axios from "axios";

import { useState } from "react";

import { useUser } from "../userStore";

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const userState = useUser(state => state)


    async function handleLogin(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const response = await axios.post("/login",{username,password})
        userState.setAccessToken(response.data.accessToken)
    }

    return (

        <>
            <div className="loginContainer">
                <form className="loginForm" onSubmit={handleLogin}>
                    <div className="formHeaderContainer">
                        <h1 className="loginHeader">Login Page</h1>
                    </div>
                    <div className="formElements">
                        <label className="loginLabel">Username</label>
                        <input value={username} onChange={(e)=> setUsername(e.target.value)} className="loginInput" name="username"></input>
                        <label className="loginLabel">Password</label>
                        <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="loginInput" type="password" name="password"></input>
                        <button className="loginButton" type="submit">Login</button>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Login;