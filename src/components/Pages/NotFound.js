import React, { useEffect } from 'react'

const NotFound = () => {

    useEffect(()=>{
        document.title = "Page Not Found | Software"
    })

    return (
        <React.Fragment>
            <div className="pro-div">
                <h1 className='pro-head'>Page Not Found</h1>
            </div>
        </React.Fragment>
    )
}

export default NotFound;