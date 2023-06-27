import { useState } from 'react'
import React from 'react'
import MAC from './assets/mac-login.png'
import Image from './assets/image-login-2.png'
import Line from './assets/line1.png'
import Ilustration from './assets/ilustration-log.png'
import './styles/login.css';

function Login() {
    const [count, setCount] = useState(0)

    return (
        <div className='container-login'>
            <div className='left-part'>
                <img src={MAC} alt="Mi imagen" className='mac-image' />

                <div className="container-text-login">
                    <h1 className='h1-text-login'>BIENVENIDO</h1>
                    <h2 className='h2-text-login'>"Emprende tu viaje a través del clima con WeatherSense"</h2>
                </div>
            
                <div className="input-login">
                    <input type="email" placeholder='Email' className='inp input-email'/>
                    <input type="password" placeholder='Contraseña' className='inp input-pwd' />
                </div>

                <img src={Line} alt="" className='line'/>

                <div className="btn">
                    <a className='btn-login' href='/home'>Sign in</a>
                </div>
                
                <img src={Line} alt="" className='line2'/>

                <div className="text-register-login">
                    <h2 className='txt-register'>¿No tienes una cuenta?</h2>
                    <a className='log-register' href='/register'>REGISTRATE</a>
                </div>
            </div>
            <img src={Image} alt="" className='image-login-main'/>
        </div>
    )
}

export default Login
