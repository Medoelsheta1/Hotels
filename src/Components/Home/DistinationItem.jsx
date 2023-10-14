import React from 'react'

const DistinationItem = ({img , alt , col, text}) => {
    return (
        <>
            <div className={`dis position-relative ${col}`}>
                <img src={img} alt={alt} />
                <div className='disText'>
                    {text}
                </div>
            </div>        
        </>

    )
}

export default DistinationItem