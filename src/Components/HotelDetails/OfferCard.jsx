import React from 'react'

const OfferCard = ({images , features , header , totalPrice}) => {
    return (
        <>
        <h4 className='text-center'>{header}</h4>
        <div className='offerCard d-flex justify-content-between align-items-center mt-3'>
            
            <div className='offerImages col-3'>
                
                {images.map((ele , index) =>  index < 4 && <img src={ele?.image?.url} alt='' />)}
            </div>
            <div className='offerText col-7 ps-3 pe-3 '>
                {/* <h4 className='text-center'>Features</h4> */}
                <div className='d-flex flex-wrap justify-content-between text-center'>
                    {features?.map((ele) => {
                        return (
                            <div className='textSection d-flex flex-column col-4'>
                                <h5>{ele?.heading}</h5>
                                <p>{ele?.items[0]?.text.slice(0 , 50).replace(/(<|<\/)\w+(>|)/g , '')}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='col-2 price'>
                    <p>{totalPrice}</p>
            </div>

            

        </div>
                    </>
    )
}

export default OfferCard