import React from 'react';
import './Header.css'

const Header = () => {

    const smoothScroll = () => window.scroll(0,0);

    return <span 
    onClick={smoothScroll}
    className="header"> 🎮 Devils Games </span>
};

export default Header;