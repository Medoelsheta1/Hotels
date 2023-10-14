import React from 'react'

const OfferSection = () => {
    return (
        <>            
        <div className='container position-relative'>
                    <div className='offersText'>
                        <h4>Offres</h4>
                        <p>Promotions, deals and special offers for you</p>                    
                    </div>   

                <div className='offers row gap-40 justify-content-center '>
                    <div className='leftOffer col-5 row'>
                        <div className='leftOfferText col-7'>
                            <h6>Take your longest holiday yet</h6>
                            <p>Browse properties offering long-term<br /> stays, many at reduced monthly rates.</p>
                            <button className='btn btn-primary'>Find a stay</button>
                        </div>
                        <div className='leftOfferImage col-6'>
                            <img className='h-100' alt='left-offer' src='https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o=' />
                        </div>
                    </div>
                    <div className='rightOffer col-5'>
                        <div className='rightOfferImage'>
                        <img className='h-100 w-100 ' alt='right-offer' src='https://r-xx.bstatic.com/xdata/images/xphoto/714x300/204490944.jpeg?k=f1dbbec42645c0ed1dc25f1e0878ab449b461baf936dcd971ad8c63bf13d0dc6&o=' />
                        </div>
                        <div className='rightOfferText'>
                            <h6>The great getaway, your way</h6>
                            <p>Save at least 15% on stays worldwide,<br /> from relaxing retreats to off-grid<br /> adventures</p>
                            <button className='btn btn-primary'>Find Gateaway Deals</button>
                        </div>
                    </div>
                </div>  
        <span></span>
    </div>
      
        </>
    )
}

export default OfferSection