import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OfferCard from "./OfferCard";

const HotelOffers = (props) => {
    const searchData = useSelector(state => state.fvHotels.searchData)
    const [data , setData ] = useState([])
    const [isLoading , setIsLoading ] = useState(false)
    const options = {
        method: 'POST',
        url: 'https://hotels4.p.rapidapi.com/properties/v2/get-offers',
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
            propertyId: props.id,
            checkInDate: {
                day: searchData?.startDate?.day,
                month: searchData?.startDate?.month,
                year: searchData?.startDate?.year,
            },
            checkOutDate: {
                day: searchData?.endDate?.day,
                month: searchData?.endDate?.month,
                year: searchData?.endDate?.year,
            },
            destination: {
                coordinates: {
                latitude: 12.24959,
                longitude: 109.190704
                },
                regionId: '6054439'
            },
            rooms: [
                {
                adults: searchData?.adults,
                },
                
            ]
            }
        };
        
useEffect(()=> {
    const getData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options);
            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            
        }        
    }
    getData()

} , [searchData])
        return (
            <>
            <div className='hotelOffers pb-5 '>
                <div className="container">
                    <div className="hotelOffersContent p-2">
                    <h1 className="text-center">Offers</h1>
                        {data?.data?.propertyOffers?.errorMessage && <p className="p-3 text-danger">Error: {data?.data?.propertyOffers?.errorMessage?.title?.text}</p> }
                        {!isLoading ? 
                            data?.data?.propertyOffers?.units.map((ele , index) => index < 10 && <OfferCard totalPrice={ele?.ratePlans[0]?.priceDetails[0]?.totalPriceMessage} header={ele?.header?.text} images={ele?.unitGallery?.gallery} features={ele?.detailsDialog?.content?.details?.contents} />
                            )
                        : <p>Loading...</p>}
                        {data.errors && <p className="text-danger">You should set time to get offers in these days</p>}
                    </div>
                </div>
            </div>
            </>
        )
}

export default HotelOffers