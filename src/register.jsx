import { useState } from 'react'
import React from 'react'
import Macwhite from './assets/mac-login-white.png'
import './styles/register.css';
import { useForm } from 'react-hook-form'
import Line from './assets/line-white.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function regHandler() {
        axios.post("http://127.0.0.1:5050/createUser", { password: password, email: email })
            .then((a) => {
                console.log(a)
                if (a.data === 'register Success') {
                    alert('Registro exitoso')
                    navigate('/');
                } else {
                    alert('Ingresa una contraseña y usuario valido')
                }
            }).catch((e) => {
                console.log(e)
            })
    }

    return (
        <div className='container-register'>
            <div className='left-part-register'>
                <img src={Macwhite} alt="Mi imagen" className='mac-image-register' />

                <div className="text-register">
                    <h1 className='h1-text-register'>REGISTRATE</h1>
                    <h2 className='h2-text-register'>"Emprende tu viaje a través del clima con WeatherSense"</h2>
                </div>

                <div className="input-register">
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

                    <img src={Line} alt="" className='line' />

                    <div className="btn">
                        <button className="btn-register" onClick={regHandler}>Ingresar</button>
                    </div>
                </div>

                <img src={Line} alt="" className='line2' />

                <div className="text-login-register">
                    <h2 className='txt-login'>¿Ya tienes una cuenta?</h2>
                    <a className='register-login' href='/'>INICIA SESION</a>
                </div>
            </div>
            <div className="image-register-main"></div>
        </div>
    )
}

export default Register
