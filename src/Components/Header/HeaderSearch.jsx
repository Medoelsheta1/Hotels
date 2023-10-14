import React, {  useState } from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {SlCalender} from 'react-icons/sl'
import {BiBed} from 'react-icons/bi'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import OptionsList from './OptionsList';
import NavHeader from './NavHeader';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import Message from '../Message/Message';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSearchData } from '../RTX/slices/FvHotels';
import { ToastContainer, toast } from 'react-toastify';

const HeaderSearch = (props) => {
    const navigate = useNavigate()
    const dispatch =  useDispatch()
    const distination = useSelector(state => state.fvHotels.distination)
    const [viewMessage , setViewMessage] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
            }
        ]);
    const [showDate , setShowDate] = useState(false)
    const [options , setOptions] = useState({
        adults: 1,
        rooms: 1,
        children: 0
    })
    const [showOptions , setShowOptions] = useState(false)
    const handleOptions = (name , opertation) =>  {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: opertation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    } 
    const formHandler = (e) => {
        const data = {
            options,
            date,
            distination
        }
        dispatch(addSearchData({
            adults: data.options.adults,
            endDate: data.date[0].endDate,
            startDate: data.date[0].startDate
        })) 
        if (!props.details) {
            
            navigate('/hotels')
        }else {
            toast.success('success Setting Details')
        }
     
    }

    return (
        <>

            { props.text && <NavHeader /> }
            <div  className='headerSearch'>
                <div className='container'>
                    <div className='headerSearchContent  d-flex justify-content-start align-items-center'>
                        <div className='headerInput' onClick={() => setViewMessage(!viewMessage)} >
                            <BiBed />
                            <input onChange={() => {}} value={distination ? distination : ''}  type='text' placeholder='Where are you going' className='destinationInput' />  
                        </div>
                        <div className='headerInput' onClick={() => setShowDate(!showDate)}>
                            <SlCalender />
                            <span>{format(date[0].startDate , "dd/MM/yyyy")} to {format(date[0].endDate , "dd/MM/yyyy")}</span>
                        </div>
                        <div className='headerInput' onClick={() => setShowOptions(!showOptions)}>
                            <BsFillPersonFill />
                            <span>{`${options.adults}`} adults . {options.children} children . {options.rooms} rooms</span>
                        </div>
                        <div className='headerButton'>
                            <button onClick={formHandler} className='btn btn-primary w-100 h-100'>{props.details ? 'Send' : 'Search'}</button>  
                        </div>
                    </div>
                    {showDate && <DateRange
                                    className='dateRange'
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                />     }
                    {showOptions &&<OptionsList handleOptions={handleOptions} options={options}  /> }
                    
                    
                </div>
            </div>     
            {viewMessage && <Message />}       
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

export default HeaderSearch