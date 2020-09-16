import {ActiveHamburgerButton, HamburgerButton, HamburgerIcon, HamburgerLine} from "../styles/Hamburger.style";
import {useEffect, useState} from "react";

const Hamburger = ({mobileMenuElement}) =>{
    const [showMenu, setShowMenu] = useState(false);
    const Hamburger = showMenu ? ActiveHamburgerButton : HamburgerButton;
    const toggleMobileMenu = () => {
        if (showMenu == false) {
            mobileMenuElement.current.style.display = "flex";
            setShowMenu(true);
        } else {
            mobileMenuElement.current.style.display = "none";
            setShowMenu(false);
        }
    };
    return(
       <Hamburger onClick={toggleMobileMenu}>
           <HamburgerIcon>
               <HamburgerLine></HamburgerLine>
           </HamburgerIcon>
       </Hamburger>
    );
}

export default Hamburger