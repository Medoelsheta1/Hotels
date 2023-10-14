import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem, removeItem } from '../RTX/slices/FvHotels'
import { ToastContainer, toast } from 'react-toastify'
const HotelBox = (props) => {
    const dispatch = useDispatch()
    let hotel = props.hotel
    return (
        <>
        <div className='hotelBox row mt-4'>
            <div className='hotelImage col-4'>
            <div className='details'><Link to={`/hotels/${hotel?.id}`}>Details</Link></div>

                <img src={hotel?.propertyImage?.image?.url ?hotel?.propertyImage?.image?.url : hotel?.img} alt={hotel?.name} />
            </div>
            <div className='hotelText col-5'>
                
                <h2 className='text-primary hotelTitle'>{hotel?.name}</h2>
                <div className='hotelLocation d-flex  align-items-center'>
                    <span className='text-primary link'>{hotel?.neighborhood?.name ? hotel?.neighborhood?.name : hotel?.location?.address?.city}</span>
                    <span className='text-primary link'>show on map</span>
                    <span>{hotel?.destinationInfo?.distanceFromDestination?.value} Mile from center</span>
                    
                </div>
                    <div className='hotelButtons mt-4'>
                            {props.delete ? <button className='btn btn-danger me-2' onClick={() => {dispatch(removeItem({id: hotel?.id})) 
                            toast.success('Successfully remove Item ')}}>Delete Item</button > : 
                            <button className='btn btn-danger me-2' onClick={() =>{ dispatch(addItem({item: hotel}))
                            toast.success('Successfully adding to your Fv')
                        }}>Add to Favourite</button> }

                        <Link to={`/hotels/${hotel?.id}`}><button className='btn btn-primary'>Show Details</button></Link>
                    </div>

            </div>
            <div className='hotelPrice col-3'>
                <div className='hotelScore d-flex justify-conten-center align-items-center'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='bold mb-0 me-2'>Review Score</p>
                        <span>{hotel?.reviews?.total ?hotel?.reviews?.total  : hotel?.reviewsNum?.slice(8 , 13)}</span>
                    </div>
                    <span className='hotelRate'>{hotel?.reviews?.score ?hotel?.reviews?.score  : hotel?.reviewValue?.slice(0,3)}</span>
                </div>
                <div className='hotelpriceContent'>
                    <div className=' hotelProperties d-flex justify-content-end mt-3 align-items-center'>
                        <span>{props.days} nights, </span>
                        <span>&nbsp;{props.adults} adults</span>
                    </div>
                    <span className=' hotelNumberPrice'>$ {hotel?.price?.lead?.amount ?hotel?.price?.lead?.amount  : 100}</span>
                    <div className='hotelTaxes'>+ $ 24 taxes and charges</div>
                    <button className='btn btn-primary bold'>See availability</button>
                </div>
            </div>
        </div>
                <ToastContainer
                position="top-left"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />   
                </>
    )
}

export default HotelBox