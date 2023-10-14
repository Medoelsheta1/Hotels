import React from 'react'
import {LuBedDouble} from 'react-icons/lu'
import {BsFillBalloonHeartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const NavLinks = () => {
    const fvLength = useSelector(state => state.fvHotels.fvItems.length)

    return (
        <div className='navParLinks d-flex justify-content-start align-items-center mt-3'>
                <Link to='/hotels'>
                    <div className='btn Link d-flex justify-content-center align-items-center  '>
                        <LuBedDouble className='text-white me-2' />
                        <p className='text-white'>Hotels</p>
                    </div>
                </Link>
                <Link to='/favouriteHotels'>
                    <div className='fvButton btn Link d-flex justify-content-center align-items-center   '>
                        <BsFillBalloonHeartFill className='me-2 text-white' />
                        <p className='text-white'>Favourite Hotels</p>
                        <span className='fvLength'>{fvLength}</span>
                    </div>
                </Link>
        </div>
    )
}

export default NavLinks