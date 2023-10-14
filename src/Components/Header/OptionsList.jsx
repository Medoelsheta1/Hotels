
const OptionsList = (props) => {
    return (
                    <div className='optionsList'>
                        <div className='optionItem d-flex justify-content-between align-items-center p-3 '>
                            <p>Adults</p>
                            <div>
                                <button onClick={() => props.handleOptions('adults' , 'i')}>+</button>
                                <span>{props.options.adults}</span>
                                <button disabled={props.options.adults <= 1} onClick={() => props.handleOptions('adults' , 'd')}>-</button>
                            </div>
                        </div>
                        <div className='optionItem d-flex justify-content-between align-items-center p-3 '>
                            <p>Children</p>
                            <div>
                                <button  onClick={() => props.handleOptions('children' , 'i') }>+</button>
                                <span>{props.options.children}</span>
                                <button disabled={props.options.children <= 0} onClick={() => props.handleOptions('children' , 'd')}>-</button>
                            </div>
                            
                        </div>
                        <div className='optionItem d-flex justify-content-between align-items-center p-3 '>
                            <p>Rooms</p>
                            <div>
                                <button onClick={() => props.handleOptions('rooms' , 'i')}>+</button>
                                <span>{props.options.rooms}</span>
                                <button disabled={props.options.rooms <= 1} onClick={() => props.handleOptions('rooms' , 'd')}>-</button>
                            </div>
                        </div>
                        <button className="btn btn-outline-primary w-100 ">Done</button>
                    </div>
    )
}

export default OptionsList