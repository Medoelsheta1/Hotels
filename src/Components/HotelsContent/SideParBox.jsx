import React from 'react'

const SideParBox = ({title , filtersItems}) => {
    return (
        <div className='sideParBox mt-4 p-2'>
            <h4>{title}</h4>
            {filtersItems && filtersItems.map((ele) => 
            <div key={ele.number} className='sideParItem d-flex justify-content-between align-items-center'>
                <div className='sideParItemText d-flex align-items-center justify-content-center'>
                    <input  type='checkbox' />
                    <p>{ele.name}&nbsp;</p>
                </div>  
                    <span>{ele.number}</span> 
                </div>)}
            </div>
    )
}

export default SideParBox