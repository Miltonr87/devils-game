import React from 'react';
import { HeaderContainer } from './Header';
import { animateScroll as scroll } from "react-scroll";


const Header = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };

    return <HeaderContainer onClick={toggleHome}> 🎮 Devils Games </HeaderContainer>
};

export default Header;