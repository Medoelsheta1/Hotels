import React from 'react'
import HotelBox from './HotelBox'

const Properties = ({properties , adults , days}) => {
    return (
        <>
        <div className='listHotels p-4 col-9'>
                            <h4 >Hotels</h4>
                            {  properties?.map((ele) => {
                                return <HotelBox key={ele?.id} delete={false}
                                hotel={ele} adults= {adults}  days= {days}   />
                            }) }

        </div>
        </>
    )
}

export default Properties