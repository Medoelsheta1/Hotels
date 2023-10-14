import React from 'react'
import disImage from '../../../Images/GlobeGeniusBadge.png'
const DiscountSection = () => {
    return (
        <div className='discount mt-4'>
            <div className='container'>
                <div className='discountContent row'>
                    <div className='discountImage col-3'>
                        <img src={disImage} alt='globe Genius Badge Img' />
                    </div>
                    <div className='discountText col-8 col-sm-6 col-md-8 col-lg-9 pt-5 '>
                        <h4>Get instant discounts</h4>
                        <p>Simply sign into your Booking.com account and look for the<br /> blue Genius logo to save</p>
                        <div className='discountButtons mt-5'>
                            <button className='btn btn-outline-primary me-2'>Sign in</button>
                            <button className='btn btn-outline-primary'>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscountSection