import React from 'react'
import { motion } from 'framer-motion'
import logo100crypto from '../assets/100kCrypto.png'
import { useEffect, useState } from 'react'
import classnames from 'classnames'
import { useNavigate } from 'react-router-dom'
import Spinner from '../common/Spinner'
import { useSelector } from 'react-redux'

const Login = () => {

    const { windowDimension } = useSelector(state => state.app.value)

    const [isDeactivated, setDeactivated] = useState(false)
    const [email, setEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [isLoginClicked, setIsLoginClicked] = useState(false)

    const navigate = useNavigate()

    const signupHandler = () => {
        navigate('/sign-up')
    }

    const loginHandler = () => {
        setIsLoginClicked(true)
        setDeactivated(true)

        setTimeout(() => {
            setIsLoginClicked(false)
            setDeactivated(false)

            navigate('/dashboard')
        }, 3000);
    }

    const LoginButton = () => {
        return (
            <div>
                {isLoginClicked
                    ?
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        exit={{ opacity: 0 }}
                        className="btn btn-light btn-block form-control text-light"
                        disabled={isDeactivated}
                        style={{ height: '3rem' }}
                    >
                        {/* <Spinner text='Logging in...' textStyle='ml-3 text-dark text-center'/> */}
                        <Spinner />
                    </motion.button>
                    :
                    <button className="btn btn-color btn-block form-control text-light" onClick={loginHandler} style={{ height: '3rem', borderRadius: '8px' }}>
                        Login
                    </button>
                }
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-md-6 bg-login" id={windowDimension.winWidth <= 820 && 'mobile_only'} style={{ position: 'sticky', top: '0px' }}>
                    <div className='blue-overlay' />
                </div>
                <div className="col-md-6 blue-background">
                    <div className='text-center mt-4'>
                        <img src={logo100crypto} alt='100k Crypto' />
                    </div>
                    <div
                        className='shadow-sm bg-white rounded ms-auto me-auto mt-3'
                        style={{ height: windowDimension.winWidth <= 820 ? '73%' : '68%', width: '65%' }}
                    >
                        <div className='m-4'>
                            <div style={{ opacity: 0 }}>Invisible Text</div>
                            <h5>Welcome</h5>
                            <small>Please enter the details below to sign into your account</small>
                            <h6 className='mt-3'><small>Email Address</small></h6>
                            <div className='input-group rounded'>
                                <input
                                    type="email"
                                    className={classnames('form-control text-truncate', { "is-invalid": errorEmail })}
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setErrorEmail('')
                                    }}
                                    style={{ height: '3rem', borderRadius: '5px' }}
                                    disabled={isDeactivated}
                                />
                                <div className='invalid-feedback'>{errorEmail}</div>
                            </div>

                            <h6 className='mt-3'><small>Password</small></h6>
                            <div className='input-group rounded'>
                                <input
                                    type="password"
                                    className={classnames('form-control text-truncate', { "is-invalid": errorPassword })}
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        setErrorPassword('')
                                    }}
                                    style={{ height: '3rem', borderRadius: '5px' }}
                                    disabled={isDeactivated}
                                />
                                <div className='invalid-feedback'>{errorPassword}</div>
                            </div>

                            <div className='text-left mt-2 mb-4'>
                                <span>
                                    <input type="checkbox" value={isChecked} onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
                                </span>
                                <span> Remember me</span>
                            </div>

                            <LoginButton />

                            <div className='text-center mb-5 text-dark'>
                                <span className='btn bg-white'>
                                    Don't have an account?
                                    <span className='bg-white txt-color' style={{ pointer: 'cursor' }} onClick={signupHandler}> Signup</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Login