import { useState } from 'react'
import React from 'react'
import Macwhite from './assets/mac-login-white.png'
import Ilustration from './assets/ilustration-register.png'
import './styles/register.css';

function Register() {
    const [count, setCount] = useState(0)

    return (
        <div className='container-register'>
            <div className='left-part-register'>
                <img src={Macwhite} alt="Mi imagen" className='mac-image-register' />

                <div className="text-register">
                    <h1 className='h1-text-register'>REGISTRATE</h1>
                    <h2 className='h2-text-register'>"Emprende tu viaje a través del clima con WeatherSense"</h2>
                </div>

                <div className="input-register">
                    <input type="email" placeholder='Email' className='input-email-register' />
                    <input type="password" placeholder='Contraseña' className='input-pwd-register' />
                </div>

                <div className="btn">
                    <a className='btn-register' href='/'>Registrate</a>
                </div>

                <div className="text-login-register">
                    <h2 className='txt-login'>¿Ya tienes una cuenta?</h2>
                    <a className='register-login' href='/'>INICIA SESION</a>
                </div>
            </div>

            <div  className='right-part-register'>
                <img src={Ilustration} className='ilustration-register' alt="" />
            </div>
        </div>
    )
}

export default Register
