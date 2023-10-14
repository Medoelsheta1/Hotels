import React from 'react'
import HeaderSearch from '../Header/HeaderSearch'
import Navpar from '../Navpar/Navpar'
import Footer from '../Footer/Footer'
import HomeContent from './HomeContent'
import Message from '../Message/Message'
import { useSelector } from 'react-redux'

const Home = () => {
    const distination = useSelector(state => state.fvHotels.distination)

    return (
        <div>
            <Navpar />
            <HeaderSearch text={true} />
            <HomeContent />
            { distination === '' &&<Message text='Type your Distination' />}
            <Footer />
        </div>
    )
    }

export default Home