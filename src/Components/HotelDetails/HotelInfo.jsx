import React from 'react'
import { BsHeart , BsArrowUpRight} from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import {GiWorld} from 'react-icons/gi'
const HotelInfo = (props) => {
    return (
        <div className='hotelInfo mt-4 p-4'>
            <div className='container'>
                <div className='hotelInfoContent'>
                    <div className='hotelTitle d-flex justify-content-between align-items-center'>
                        <h1>{props?.hotel?.name}</h1>
                        <BsHeart onClick={props.onClick} />
                    </div>
                    <div className='d-flex mt-2 '>
                        <div className='bullets d-flex justify-content-start align-items-center me-2'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p className='mb-0'>{props.review}</p>

                    </div>
                    <div className='HotelLocation mt-3 d-flex justify-content-start align-items-center'><IoLocationSharp /> <span>
                        {props.hotel?.location?.address?.firstAddressLine}</span></div>
                    <div className='HotelSite mt-3 d-flex justify-content-start align-items-center'><GiWorld className='me-2' /> <p className='me-2 mb-0'>Visit Hotel Web Site</p><BsArrowUpRight /></div>
                </div>
            </div>
        </div>
    )
}

export default HotelInfo