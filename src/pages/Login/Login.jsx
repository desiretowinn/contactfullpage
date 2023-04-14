import React from 'react';
import "./index.scss";
import img1 from ".././../assets/images/Logo.svg"
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className='body'>
            <div className="container">
                <div className="wrapper">

                    <NavLink className="wrapper__link" to="/Dishboard"><img className="wrapper__link--img" src={img1} alt="Logo of website" /></NavLink>
                    <h1 className="wrapper__title">Sign In</h1>
                    <p className="wrapper__text">Enter your credentials to access your account</p>

                    <form className='wrapper__form' action="submit">

                        <label className='wrapper__form--label' htmlFor="email">

                            <h2 className='wrapper__form--label-text'>Email</h2>
                            <input
                                className='wrapper__form--label-input'
                                type="email"
                                placeholder='Enter your email'
                                id='email'
                            />

                        </label>

                        <label className='wrapper__form--label' htmlFor="password">

                            <h2 className='wrapper__form--label-text'>Password</h2>
                            <input
                                className='wrapper__form--label-input'
                                type="password"
                                placeholder='Enter your password'
                                id='password'
                            />

                        </label>

                        <button className='wrapper__form--button' type='submit'>SIGN IN</button>

                        <p className="wrapper__form--text">Forgot your password? <button className='wrapper__form--text-btn' type="reset">Reser Password</button></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;