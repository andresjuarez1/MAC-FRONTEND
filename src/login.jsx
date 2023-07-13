import React from 'react'
import MAC from './assets/mac-login.png'
import Image from './assets/image-login-2.png'
import Line from './assets/line1.png'
import './styles/login.css';
import { axiosInstance } from './helpers/AxiosInstance';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     axiosInstance 
    //     .get('http://192.168.100.195:9000/users')
    //       .then(({ data }) => {
    //         console.log(data.message);
    //         setUsers(data.message);
    //       })
    //       .catch(err => {
    //         console.log(err.message);
    //       });
    //   }, []);

    return (
        <div className='container-login'>
            <div className='left-part'>
                <img src={MAC} alt="Mi imagen" className='mac-image' />

                <div className="container-text-login">
                    <h1 className='h1-text-login'>BIENVENIDO</h1>
                    <h2 className='h2-text-login'>"Emprende tu viaje a través del clima con WeatherSense"</h2>
                </div>

                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
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
                {/* </form> */}

                <img src={Line} alt="" className='line' />

                <div className="btn">
                    {email === '' || password === '' || !email.includes('@') ? (
                        <button className="btn-login" disabled>Ingresar</button>
                    ) : (
                        <Link className="btn-login" to="/home">
                            Ingresar
                        </Link>
                    )}
                </div>


                <img src={Line} alt="" className='line2' />

                <div className="text-register-login">
                    <h2 className='txt-register'>¿No tienes una cuenta?</h2>
                    <Link className='log-register' to='/register'>REGISTRATE</Link>
                </div>
            </div>
            <img src={Image} alt="" className='image-login-main' />
        </div>
    )
}

export default Login
