import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDis , addId} from '../RTX/slices/FvHotels'
import useInput from '../hooks/useInput'
const data = require('./countries.json')

const   Message = ( props) => {
    const dispatch = useDispatch()
    const [viewMessage , setViewMessage] = useState(true)
    const [itemIsNotExist , setItemIsNotExist] = useState(false)
    const [id , setId] = useState('')
    const {value: dis , setValue , isClicked , isValid , inputHandler , inputBlur } = useInput((e) => e.trim() !== '')
    const sendDataHandler = () => {
        const ItemExist = data.find((ele) => ele.name === dis)
        
        if(isValid && ItemExist) {
            setItemIsNotExist(false)
            dispatch(addDis({distination: dis}))
            dispatch(addId({id: id}))
            setViewMessage(false)            
        }else {
            setItemIsNotExist(true)
        }
    }
    
    return (
        <>
        {viewMessage &&
        <div className='messageLayout'>
            <div className='LayoutContent'>
                <div className='messageContent d-flex flex-column'>
                    <p>{props.text}</p>
                    <input className={ !isValid && isClicked  ? 'danger' : ''} value={dis} onChange={inputHandler} onBlur={inputBlur} placeholder='Type Your Distination' type='text' />
                    {!isValid && isClicked && <p className='text-danger m-0'>You can't leave it empty</p>}
                    <div className='suggestions'>
                        {data.filter((ele) => {
                            const filterItem = ele.name.toLocaleLowerCase();
                            const typeValue = dis.toLocaleLowerCase()
                            return filterItem.startsWith(typeValue) &&  typeValue !== '' && filterItem !== typeValue
                        }).map((ele) => {
                            return <p onClick={ () => {setValue(ele.name)
                                setId(ele.id)} } key={ele.id}>{ele.name}</p>
                        })}
                    </div>
                    {itemIsNotExist && isClicked && <p className='text-danger m-0'>You must write a correct country</p>}
                    <button onClick={sendDataHandler}  className='btn btn-primary mt-2'>Send</button>
                </div>
            </div>

        </div> 
        }
        </>
    )
}

export default Message