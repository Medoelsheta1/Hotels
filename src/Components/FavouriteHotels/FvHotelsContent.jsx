import React from 'react'
import HotelBox from '../HotelsContent/HotelBox'
    import { useSelector } from 'react-redux'
const FvHotelsContent = () => {
    const FvProperties = useSelector( state => state.fvHotels.fvItems)
    return (
        <div className='container'>
            <h1 className='mt-3 text-center'>Favourite Hotels</h1>
            <div className='fvContent p-4 mt-4'>
                {   
                    FvProperties && FvProperties.map((ele) => <HotelBox key={ele?.id} delete={true}
                                hotel={ele}    />                        
                    ) }
                    {FvProperties.length === 0 && <h3>There is no Favourite Items...</h3>}
            </div>
        </div>
    )
}

export default FvHotelsContent