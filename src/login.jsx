import React from 'react'
import MAC from './assets/mac-login.png'
import Line from './assets/line1.png'
import './styles/login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function loginHandler() {
        axios.post("http://127.0.0.1:5050/login", { password: password, email: email })
            .then((a) => {
                console.log(a)
                if (a.data === 'login Success') {
                    navigate('/home');
                } else {
                    alert('Ingresa una contraseña y usuario valido')
                }
            }).catch((e) => {
                console.log(e)
            })
    }

    return (
        <div className='container-login'>
            <div className='left-part'>
                <img src={MAC} alt="Mi imagen" className='mac-image' />

                <div className="container-text-login">
                    <h1 className='h1-text-login'>BIENVENIDO</h1>
                    <h2 className='h2-text-login'>"Emprende tu viaje a través del clima con WeatherSense"</h2>
                </div>

                <div className="input-login">
                    <div className="input-login">
                        <input
                            type="email"
                            placeholder="Email"
                            className="inp input-email"
                            value={email}
                            maxLength={20}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="inp input-pwd"
                            value={password}
                            maxLength={20}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <img src={Line} alt="" className='line' />

                <div className="btn">
                    <button className="btn-login" onClick={loginHandler}>Ingresar</button>
                </div>


                <img src={Line} alt="" className='line2' />

                <div className="text-register-login">
                    <h2 className='txt-register'>¿No tienes una cuenta?</h2>
                    <Link className='log-register' to='/register'>REGISTRATE</Link>
                </div>
            </div>
            <div className="image-login-main"></div>
        </div>
    )
}

export default Login
