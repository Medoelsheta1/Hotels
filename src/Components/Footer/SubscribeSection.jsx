import React from 'react'
import { Link } from 'react-router-dom'

const SubscribeSection = () => {
    return (
        <>
        
        <div className='subscribeSection text-center text-white '>
            <div className='container'>
                <div className='subscribeContent pt-5 pb-5'>
                    <h4>Save time, save money!</h4>
                    <p>Sign up and we'll send the best deals to you</p>
                    <div className='subscribeInput d-flex align-items-center justify-content-center'>
                        <input className='p-2' type='mail' placeholder='Your Email Address' />
                        <button className='btn btn-primary'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='footerSectionTwo position-relative'>
            
            <button className='btn btn-primary'>List your property</button>
        </div>
        <div className='footerSectionThree'>
            <div className='container'>
                <div className='footerThreeContent d-flex align-items-center justify-content-evenly'>
                    <Link>Mobile version</Link>
                    <Link>Your account</Link>
                    <Link>Make changes to your booking online</Link>
                    <Link>Customer Service help</Link>
                    <Link>Become an affiliate</Link>
                    <Link>Booking.com for Business</Link>
                </div>
            </div>
        </div>
        <div className='footerSectionFour'>
            <div className='container'>
                <div className='footerFourContent row'>
                    
                </div>
            </div>
        </div>

        </>
    )
}

export default SubscribeSection