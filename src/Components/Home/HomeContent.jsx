import React from 'react'
import OfferSection from './HomeSections/OfferSection'
import TrendingDestination from './HomeSections/TrendingDestination'
import SuggestionsHotels from './HomeSections/SuggestionsHotels'
import DiscountSection from './HomeSections/DiscountSection'
import { useSelector } from 'react-redux'

const HomeContent = () => {
    const searchId = useSelector(state => state.fvHotels.geoId)
    return (
        <div className='homeContent'>
            <OfferSection />
            <TrendingDestination />
            {searchId && <SuggestionsHotels /> }
            <DiscountSection />
        </div>
    )
}

export default HomeContent