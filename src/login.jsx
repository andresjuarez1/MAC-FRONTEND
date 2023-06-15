import { useState } from 'react'
import React from 'react'
import MAC from './assets/mac-login.png'
import Ilustration from './assets/ilustration-log.png'
import './styles/login.css';
import { Link } from 'react-router-dom'

function Login() {
    const [count, setCount] = useState(0)

    return (
        <div className='container'>
            <div className='left-part'>
                <img src={MAC} alt="Mi imagen" className='mac-image' />

                <div className="text-login">
                    <h1 className='h1-text-login'>BIENVENIDO</h1>
                    <h2 className='h2-text-login'>"Emprende tu viaje a través del clima con WeatherSense"</h2>
                </div>

                <div className="input-login">
                    <input type="email" placeholder='Email' className='input-email' />
                    <input type="password" placeholder='Contraseña' className='input-pwd' />
                </div>

                <div className="btn">
                    <a className='btn-login' href='/home'>Sign in</a>
                </div>

                <div className="text-register-login">
                    <h2 className='txt-register'>¿No tienes una cuenta?</h2>
                    <a className='log-register' href='/register'>REGISTRATE</a>                    
                </div>
            </div>

            <div  className='right-part'>
                <img src={Ilustration} className='ilustration' alt="" />
            </div>
        </div>
    )
}

export default Login
