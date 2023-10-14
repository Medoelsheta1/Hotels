import React from 'react'
import img1 from '../../../Images/America.jpg'
import img2 from '../../../Images/Australia.jpg'
import img3 from '../../../Images/Brazil.jpg'
import img4 from '../../../Images/China.jpg'
import img5 from '../../../Images/canada.jpg'
import DistinationItem from '../DistinationItem'
const TrendingDestination = () => {
    return (
        <>

        <div className='container mt-4'>
            <div className='destinationText'>
                <h4>Trending destinations</h4>
                <p>Most popular choices for travellers from Egypt</p>
            </div>
            <div className='distinationContent'>
                <div className='row'>
                    <DistinationItem img={img1} alt={'America Fredom state'} col={'col-6'} text='Americe' />
                    <DistinationItem img={img2} alt={'Australia Florida'} col={'col-6'} text='Australia' />
                </div>
                <div className='row mt-3'>
                    <DistinationItem img={img3} alt={'Brazil Beach'} col={'col-4'} text='Brazil' />
                    <DistinationItem img={img4} alt={'China state'} col={'col-4'} text='China' />
                    <DistinationItem img={img5} alt={'Canda mounts'} col={'col-4'} text='Canada' />
                </div>
            </div>
        </div>

        </>
    )
}

export default TrendingDestination