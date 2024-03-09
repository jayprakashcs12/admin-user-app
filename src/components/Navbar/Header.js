import React, { useLayoutEffect, useState } from 'react';
import logoImg from "../../img/web-logo/logo.png";
import MegaNavBar from './MegaNavBar';
import MicroNavBar from './MicroNavBar';
import "../../css/header.css";

const Header = () => {
    let [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

    let handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize); // Add event listener for window resize
        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup the event listener when the component unmounts
        };
    }, []);

    return (
        <>
            { deviceWidth > 991 ? <MegaNavBar logoImg={logoImg} /> : <MicroNavBar logoImg={logoImg} /> }
        </>
    );
}

export default Header;