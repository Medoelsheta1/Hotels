import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import {login} from '../RTX/slices/FvHotels'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Loader from '../Loaders/Loader'

const LoginContent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [err , setErr] = useState()
    const [isLoading , setIsLoading] = useState(false)
    const {value: emailValue, isValid: isEmailValid ,isClicked: isEmailClicked,
    inputHandler: emailHandler , inputBlur: emailBlur   } = useInput( e => e.includes('@'))
    const {value: passValue, isValid: isPassValid ,isClicked: isPassClicked,
    inputHandler: passHandler , inputBlur: passBlur   } = useInput((e) => e.trim() !== '') 
    const loginFormHandler = async (e) => {
        e.preventDefault()
        if (isEmailValid && isPassValid) {
            setIsLoading(true)
            try {
                const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-1d12rA6rNwYiqjTXNB0RR7GB2V1RDW0' , {
                    email: emailValue,
                    password: passValue,
                    returnSecureToken: true
                })
                toast.success('Login successfully')   
                dispatch(login({
                    userData: {
                        email: emailValue,
                        password: passValue                        
                    },
                    token: res?.data?.idToken
                }))    
                setIsLoading(false)         
                navigate('/')
            }catch(err) {
                setErr('Your email or password is invalid')
                toast.error('Login Faild')
                setIsLoading(false)
            }

        }
    }
    return (
        <>
        <div className='LoginContent'>
            <div className='container'>
                
                <form className='login d-flex flex-column justify-content-start align-items-center' onSubmit={loginFormHandler}>
                    <h1 className='text-center mb-5'>Login</h1>
                    <input  value={emailValue} onChange={emailHandler} onBlur={emailBlur} type='mail' placeholder='Your Email'  />
                    <input value={passValue} onChange={passHandler} onBlur={passBlur} type='password' placeholder='Your Password'  />
                    <p><Link>I don't have account</Link></p>
                    {isEmailClicked && !isEmailValid && <p className='text-danger'>You should type Right Email.</p>}
                    {isPassClicked && !isPassValid && <p className='text-danger'>You cant leave it empty</p>}
                    {err && <p className='text-danger'>{err}</p>}
                    <button  type='submit' className='btn btn-primary'>Login</button>

                </form>
            </div>
        </div>
        <ToastContainer
            position="top-left"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />   
        {isLoading && <Loader />}
        </>
    )
}

export default LoginContent