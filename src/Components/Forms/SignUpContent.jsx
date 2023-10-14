import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../RTX/slices/FvHotels'
import Loader from '../Loaders/Loader'
import { ToastContainer, toast } from 'react-toastify'
const SignUpContent = () => {
    const [isLoading , setIsLoading] = useState(false)
    const [err , setError] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {value: emailValue, isValid: isEmailValid ,isClicked: isEmailClicked,
        inputHandler: emailHandler , inputBlur: emailBlur   } = useInput( e => e.includes('@'))
    const {value: nameValue, isValid: isNameValid ,isClicked: isNameClicked,
        inputHandler: nameHandler , inputBlur: nameBlur   } = useInput( e => e.trim() !== '')
        const {value: passValue, isValid: isPassValid ,isClicked: isPassClicked,
        inputHandler: passHandler , inputBlur: passBlur   } = useInput((e) => e.trim() !== '') 
        const loginFormHandler = async(e) => {
            e.preventDefault()
            if (isEmailValid && isPassValid && isNameValid) {
                setIsLoading(true)
                try {
                    const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-1d12rA6rNwYiqjTXNB0RR7GB2V1RDW0' , {
                    username: nameValue,
                    password: passValue,
                    email: emailValue,
                    returnSecureToken: true
                })
                    console.log(res)
                    dispatch(login({
                        userData: {
                            name: nameValue,
                            email: emailValue,
                            password: passValue        
                        }, 
                        token: res?.data?.idToken
                    }))
                    toast.success('Successfully Sign up')
                    setIsLoading(false)
                    navigate('/')
                }catch(err) {
                    setError('There is somthing wrong in data')
                    setIsLoading(false)
                }
            }
        }
        return (
        <>
        <div className='LoginContent'>
            <div className='container'>
                
                <form className='login d-flex flex-column justify-content-start align-items-center' onSubmit={loginFormHandler}>
                    <h1 className='text-center mb-5'>Sign up</h1>
                    <input  value={nameValue} onChange={nameHandler} onBlur={nameBlur} type='text' placeholder='Your Name'  />
                    <input  value={emailValue} onChange={emailHandler} onBlur={emailBlur} type='mail' placeholder='Your Email'  />
                    <input value={passValue} onChange={passHandler} onBlur={passBlur} type='password' placeholder='Your Password'  />
                    <p><Link>I don't have account</Link></p>
                    {isEmailClicked && !isEmailValid && <p className='text-danger'>You should type Right Email.</p>}
                    {(isPassClicked || isNameClicked ) && (!isPassValid || !isNameValid )&& <p className='text-danger'>You cant leave it empty</p>}
                    {err && <p className='text-danger'>{err}</p>}
                    <button  type='submit' className='btn btn-primary'>SignUp</button>

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

export default SignUpContent