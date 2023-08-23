import React, { useState } from "react";
import Style from "./Login.module.scss"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', {email, password})
    }

    return (
        <div id="login" className={Style.login}>
            <h1 className="tittle">Login do Sistema</h1>

            <form className={Style.form} onSubmit={handleSubmit}>
                <div id="field" className={Style.field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div id="field" className={Style.field}>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div id="actions" className={Style.actions}>
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default Login;