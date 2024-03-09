import React, { useEffect } from 'react'

const Home = () => {

    useEffect(()=>{
        document.title = "Home"
    })

    return (
        <React.Fragment>
            <div className="pro-div">
                <h1 className='pro-head'>Home</h1>
            </div>
        </React.Fragment>
    )
}

export default Home;