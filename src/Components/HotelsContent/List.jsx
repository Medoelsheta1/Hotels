// import React, { useState } from 'react'
import Navpar from '../Navpar/Navpar'
import HeaderSearch from '../Header/HeaderSearch'
import SideParBox from './SideParBox'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
import Properties from './Properties'
import { useState } from 'react'
import Loader from '../Loaders/Loader'
const List = () => {
    const AllData = useSelector(state => state.fvHotels.searchData)
    const [page , setPage] = useState(1)

    console.log(AllData)   
    const {data , isLoading} = useFetch('properties/v2/list' , 'POST' , AllData?.adults , {
        startDay: AllData?.startDate?.day,
        endDAy: AllData?.endDate?.day,
        startMonth: AllData?.startDate?.month,
        endMonth: AllData?.endDate?.month,
        startYear: AllData?.startDate?.year,
        endYear: AllData?.endDate?.year
    } , page)
    const filtersItems1 = [
        {
            name: 'Free cancellation',
            number: 1117
        },
        {
            name: 'Hotels',
            number: 350
        },
        {
            name: 'Madrid City Center',
            number: 736 
        },
        {
            name: 'Breakfast Included',
            number: 35
        },
        {
            name: '4 stars',
            number: 175
        },
        {
            name: 'Private bathroom',
            number: 325
        },
    ]
    const filtersItems2 = [
        {
            name: 'Kitchen facilities',
            number: 27
        },
        {
            name: 'Breakfast Included',
            number: 299
        },
        {
            name: 'All meals included',
            number: 6 
        },
        {
            name: 'Breakfast & lunch included',
            number: 3
        },
        {
            name: 'Breakfast & dinner included',
            number: 20
        },
        
    ]
    const filtersItems3 = [
        {
            name: 'Private bathroom',
            number: 293
        },
        {
            name: 'Air conditioning',
            number: 209
        },
        {
            name: 'Private pool',
            number: 90 
        },
        {
            name: 'Balcony',
            number: 60
        },
        {
            name: 'Kitchen/Kitchenette',
            number: 94
        },
        {
            name: 'Hot tub',
            number: 59
        },
        {
            name: 'Spa tub',
            number: 30
        },
        
        {
            name: 'View',
            number: 248
        },
        
    ]
    
    return (
        <>
            <Navpar />
            <HeaderSearch />
            <div className='list pb-4'>
                <div className='container'>
                    <div className='listContent row'>
                        <div className='listSidePar col-3'>
                            <SideParBox title='Popular Filters' filtersItems={filtersItems1} />
                            <SideParBox title='Meals' filtersItems={filtersItems2} />
                            <SideParBox title='Room Facilities' filtersItems={filtersItems3} />
                        </div>
                        {
                            !isLoading ? <Properties adults={AllData?.adults} days={AllData?.days} properties={data?.data?.data?.propertySearch?.properties} /> : 
                            <Loader />
                        }
                    </div>
                </div>
                <div className='pages'>
                    <div className='pagesContent'>

                        {'1 2 3 4 5 6 7 8 9'.split(' ').map((ele) => {
                            return <button onClick={() => {
                                setPage(ele)
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }} className={`btn btn-primary mb-2 me-2 ${page === ele ? 'active' : '' }`}>{ele}</button>
                        })}

                    </div>    
                </div>

            </div>  
            <Footer  />     
        </>

    )
}

export default List