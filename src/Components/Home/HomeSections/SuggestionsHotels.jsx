import React from 'react'
import SliderCard from '../../Card/SliderCard'
import useFetch from '../../hooks/useFetch'
const SuggestionsHotels = () => {
const {data,isLoading}= useFetch('properties/v2/list' , 'POST' , 1 , 0)
    return (
        <div className='suggestionsHotels mt-5'>
            <div className='container'>
                <h4 className='mb-4'>Some Distination Hotels</h4>
                <div className='suggestionsHotelsContent'>
                <div id="banners" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#banners" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#banners" data-bs-slide-to="1"></li>
                                <li data-bs-target="#banners" data-bs-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner rounded">
                                    <div className="carousel-item active d-flex justify-content-evenly">
                                    {!isLoading ? 
                                data?.data?.data?.propertySearch?.properties?.slice(0 , 4)?.map((ele) => {
                                    return <SliderCard key={ele?.id} ele={ele}  />                           
                                })
                                : <div><p>Loading</p></div>}
                                    </div>

                                
                                <div className="carousel-item d-flex justify-content-evenly">
                                {!isLoading ? 
                                data?.data?.data?.propertySearch?.properties?.slice(4 , 8)?.map((ele) => {
                                    return <SliderCard  key={ele?.id} ele={ele}  />                           
                                })
                                : <p>Loading</p>}
                                    
                                </div>
                                <div className="carousel-item d-flex justify-content-evenly">
                                {!isLoading ? 
                                data?.data?.data?.propertySearch?.properties?.slice(8 , 12)?.map((ele) => {
                                    return <SliderCard  key={ele?.id} ele={ele}  />                           
                                })
                                : <p>Loading</p>}
                                    
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestionsHotels