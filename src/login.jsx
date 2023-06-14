import { useState } from 'react'
import React from 'react'
import MAC from './assets/mac-login.png'
import Ilustration from './assets/ilustration-login.png'
import './styles/login.css';

function Login() {
    const [count, setCount] = useState(0)

    return (
        <div className='container'>
            <div className='left-part'>
                <img src={MAC} alt="Mi imagen" className='mac-image' />

                <div className="text-login">
                    <h1>BIENVENIDO</h1>
                    <h2 className='h2-text-login'>"Emprende tu viaje a través del clima con WeatherSense"</h2>
                </div>

                <div className="input-login">
                    <input type="text" placeholder='Email' className='input-email' />
                    <input type="text" placeholder='Contraseña' className='input-pwd' />
                </div>

                <div className="btn">
                    <button className='btn-login'>Sign in</button>
                </div>

                <div className="text-register-login">
                    <h2 className='txt-register'>¿No tienes una cuenta?</h2>
                    <a className='log-register' href=''>REGISTRATE</a>
                </div>
            </div>
            <div className='right-part'>
                {/* <img src={Ilustration} alt="" className='ilustration-login' /> */}
            </div>

        </div>
    )
}

export default Login
