import React, { useEffect } from 'react'

const Services = () => {

    useEffect(()=>{
        document.title = "Our Services | Software"
    })

    return (
        <React.Fragment>
            <div className="pro-div">
                <h1 className='pro-head'>Our Services</h1>
            </div>
        </React.Fragment>
    )
}

export default Services;