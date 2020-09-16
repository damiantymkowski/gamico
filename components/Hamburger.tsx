import {HamburgerButton, HamburgerIcon, HamburgerLine} from "../styles/Hamburger.style";

const Hamburger = () =>{
    return(
       <HamburgerButton>
           <HamburgerIcon>
               <HamburgerLine></HamburgerLine>
           </HamburgerIcon>
       </HamburgerButton>
    );
}

export default Hamburger