import React, { useEffect } from 'react'

const About = () => {

    useEffect(()=>{
        document.title = "About Us | Software"
    })

    return (
        <React.Fragment>
            <div className="pro-div">
                <h1 className='pro-head'>About Us</h1>
            </div>
        </React.Fragment>
    )
}

export default About;