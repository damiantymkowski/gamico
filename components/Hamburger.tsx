import {HamburgerButton, HamburgerIcon, HamburgerLine} from "../styles/Hamburger.style";
import {useState} from "react";

interface IProps {
    mobileMenuElement: React.RefObject<any>
}

const Hamburger = ({mobileMenuElement}:IProps) =>{
    const [showMenu, setShowMenu] = useState(false);
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
       <HamburgerButton onClick={toggleMobileMenu}>
           <HamburgerIcon>
               <HamburgerLine animate={showMenu}></HamburgerLine>
           </HamburgerIcon>
       </HamburgerButton>
    );
}

export default Hamburger