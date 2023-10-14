import React from 'react'
import Navpar from '../Navpar/Navpar'
import FvHotelsContent from '../FavouriteHotels/FvHotelsContent'

const FvHotels = () => {
    return (
        <>
        <Navpar />
        <div className='fvHotels'>
            <FvHotelsContent />
        </div>
        </>
    )
}

export default FvHotels