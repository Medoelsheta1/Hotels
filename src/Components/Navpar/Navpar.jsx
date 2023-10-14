import React from 'react'
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navpar = () => {
    const userData = useSelector(state => state.fvHotels.userData)
    const isLogin = useSelector(state => state.fvHotels.isLogin)
    return (
        <div className='navPar pt-3'>
            <div className='container '>
                <div className='navParContent ps-2 pe-2 d-flex justify-content-between align-items-center'>
                    <div className='navTitle text-white'>
                        <h4 ><Link className='text-white' to='/'>Hotels</Link></h4>
                    </div>
                    {isLogin ? 
                    <div>
                        <p className='text-white h3 mt-2 bold'>Hello {userData.email.split('@')[0]}</p>
                    </div>
                    :  
                    <div className='navButtons'>
                        <Link to='/signup'><button className='btn bg-white  me-3'>Register</button></Link>
                        <Link to='/login'><button className=' btn bg-white'>Sign in</button></Link>
                    </div>}
                </div>
            <NavLinks />

            </div>
        </div>

    )
}

export default Navpar