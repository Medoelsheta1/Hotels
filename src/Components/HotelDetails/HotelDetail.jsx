import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HotelInfo from './HotelInfo'
import { useDispatch } from 'react-redux';
import { addItem } from '../RTX/slices/FvHotels';
import Loader from '../Loaders/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import HotelOffers from './HotelOffers';
import HeaderSearch from '../Header/HeaderSearch';
const HotelDetail = () => {
    const params = useParams()
    const dispatch = useDispatch()
    let [imageIndex , setImageIndex] = useState(0)
    const [isLoading , setIsLoading] = useState(false)
    const [data , setData] = useState([])
    const options = {
        method: 'POST',
            url: 'https://hotels4.p.rapidapi.com/properties/v2/get-summary',
            headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '322e2a53eemsha59cdb0b8968ebcp192fd8jsn14d70097abb0',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            },
            data: {
            currency: 'USD',
            eapid: 1,
            locale: 'en_US',
            siteId: 300000001,
            propertyId: params.id
            }
    };
    useEffect(() => {
        setIsLoading(true)
        async function getDetailsData () {
            try {
                
                const response = await axios.request(options);
                
                    setData(response.data)
                    setIsLoading(false)                    
                

            } catch (error) {
                console.error(error);
            }            
        }
        getDetailsData() 
    } , [])

return (
    <>
    <HeaderSearch details={true} />
    <HotelInfo review={data?.data?.propertyInfo?.reviewInfo?.summary?.propertyReviewCountDetails?.shortDescription} hotel={data?.data?.propertyInfo?.summary} onClick={() => {dispatch(addItem({item: {...data?.data?.propertyInfo?.summary , reviewsNum: data?.data?.propertyInfo?.reviewInfo?.summary?.propertyReviewCountDetails?.shortDescription , reviewValue: data?.data?.propertyInfo?.reviewInfo?.summary?.overallScoreWithDescriptionA11y?.value , img: data?.data?.propertyInfo?.propertyGallery?.images[0]?.image.url }}))
    toast.success('Successfully adding to your Fv')
}} />
<div className='hotelDetails'>
            <div className='container'>
                <div className='hotelDetailsContent'>
                    <div className='hotelMainImage'>
                        <button className='left' disabled={imageIndex=== 0 ? true : false} onClick={() => setImageIndex(imageIndex - 1)}><BsArrowLeftSquareFill  /></button>
                        <button className='right' disabled={ imageIndex === 38 ? true : false} onClick={() => setImageIndex(imageIndex + 1)}><BsArrowRightSquareFill  /></button>
                        
                        
                        {isLoading ? <img src='https://i.pinimg.com/564x/3a/d6/15/3ad615655e2d5ddc9530e3380bb2ccb5.jpg' alt='default-Img' /> : 
                            <img src={ data?.data?.propertyInfo?.propertyGallery?.images[imageIndex]?.image.url } alt='image1' />
                        }
                    </div>
                    <div className='hotelImages d-flex'>
                        {!isLoading ? data?.data?.propertyInfo?.propertyGallery?.images?.map((ele , index) => index < 39 &&
                        <img onClick={() =>{setImageIndex(index)}} src={ele?.image?.url} alt='' key={ele?.imageId} /> ) : <Loader />}
                    </div>
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
        <HotelOffers id={params.id} />
    </>
)
}

export default HotelDetail