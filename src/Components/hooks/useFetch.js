import axios from 'axios'
import { useEffect,  useState } from 'react'
import { useSelector } from 'react-redux'
const useFetch = (url , method , adults , time , page) => {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState('')
    const disId = useSelector(state => state.fvHotels.geoId)
    let options = {
        method: method,
        url: `https://hotels4.p.rapidapi.com/${url}`,
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
            destination: {
            regionId: disId
            },
            checkInDate: {
                day: time?.startDay ? time.startDay  : 12,
                month: time?.startMonth ? time.startMonth  : 12,
                year: time?.startYear ? time.startYear  : 2023
            },
            checkOutDate: {
                day: time?.endDay? time.endDay  : 15,
                month: time?.endMonth? time.endMonth  : 12,
                year: time?.endYear? time.endYear  : 2023,
            },
            rooms: [
                {
                    adults: adults ? adults : 1,
                    children: [{age: 5}, {age: 7}]
                }
            ],
            resultsStartingIndex: page,
            resultsSize: 10,
            sort: 'PRICE_LOW_TO_HIGH',
            filters: {
                price: {max: 150, min: 100}
            }
        }
    };
    useEffect(() => {       
        
        setIsLoading(true)
        const requestFun = async () => {
            try {
                const data = await axios.request(options)
                setData(data)
                setIsLoading(false)
            }catch(err) {
                setError(err)
            }        
        }
        requestFun()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [ url , adults , page])
    return {
        data,
        isLoading,
        error
    }
}

export default useFetch

//const {data,isLoading,error}= useFetch('locations/v2/search?query=china&locale=en_US&currency=USD')
