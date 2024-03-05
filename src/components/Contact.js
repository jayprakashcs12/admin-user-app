import React, { useEffect } from 'react'

const Contact = () => {

    useEffect(()=>{
        document.title = "Contact Us | Software"
    })

    return (
        <React.Fragment>
            <div className="pro-div">
                <h1 className='pro-head'>Contact Us</h1>
            </div>
        </React.Fragment>
    )
}

export default Contact;