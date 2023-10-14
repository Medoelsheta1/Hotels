import React from 'react'
import {FaRegHeart} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from '../RTX/slices/FvHotels'
import { ToastContainer, toast } from 'react-toastify'
const SliderCard = ({ele}) => {
    const dispatch = useDispatch()
    const addItemToFv = () => {
        dispatch(addItem({item: ele}))
        toast.success('Successfully adding to your Fv')
    }
    return (
        <>
        <div className='sliderCard'>
            <FaRegHeart onClick={addItemToFv }/>
            <div className='details'><p><Link className='text-white' to={`/hotels/${ele?.id}`}>Details</Link></p></div>
            <img src={ele?.propertyImage?.image?.url} alt='' />
            <div className='sliderCardText p-2'>
                <h6 className='sliderCardTitle'>{ele?.name}</h6>
                <p className='sliderCardLocation'>{ele?.neighborhood?.name ? ele?.neighborhood?.name : 'Non Reconize'}</p>
                <div className='sliderCardDetails d-flex align-items-center'>
                    <span className='sliderCardrate'>{ele?.reviews?.score}</span>
                    <span className='sliderCardCity'>{ele?.neighborhood?.name}</span>
                    <span className='sliderCardReviews'> {ele?.reviews?.total} reviewes</span>
                </div>
            </div>
            <div className='sliderCardPrice p-2'>
                <p>Starting from <span>$<span className='sliderCardPrice'></span>{ele?.price?.lead?.amount} </span></p>
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

export default SliderCard