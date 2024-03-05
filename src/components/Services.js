import React, { useEffect } from 'react'

const Services = () => {

    useEffect(()=>{
        document.title = "Our Services | Software"
    })

    return (
        <React.Fragment>
            <h1 className='pro-head'>Services</h1>
        </React.Fragment>
    )
}

export default Services;