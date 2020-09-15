import {
    Container,
    IconContainer,
    Logo,
    Menu,
    MenuHamburger,
    MenuItem,
    MenuMobile,
    SmallText
} from '../styles/Header.style';
import MediaQuery from "react-responsive";
import {menuAccountIcon, menuGoldIcon, menuHamburgerIcon, menuTrophyIcon} from "../utils/Header.utils";
import {useState} from "react";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const mobileMenu = React.useRef();

    const toggleMenu = () =>{
        if(showMenu==false){
            mobileMenu.current.style.display = "flex";
            setShowMenu(true);
        }else{
            mobileMenu.current.style.display = "none";
            setShowMenu(false);
        }
    }


    return (
        <>
        <Container>
            <Logo>GAMICO</Logo>

            <MediaQuery query="(min-width: 1024px)"> {/*Desktop Menu*/}
            <Menu>
                <MenuItem><IconContainer>{menuGoldIcon()}</IconContainer><SmallText>ZDOBYWAJ</SmallText></MenuItem>
                <MenuItem><IconContainer>{menuTrophyIcon()}</IconContainer><SmallText>LIDERZY</SmallText></MenuItem>
                <MenuItem last><IconContainer>{menuAccountIcon()}</IconContainer><SmallText>REJESTRACJA</SmallText></MenuItem>
            </Menu>
            </MediaQuery>

            <MediaQuery query="(max-width: 1024px)">  {/*Mobile Hamburger*/}
            <Menu>
                <MenuHamburger onClick={toggleMenu}><IconContainer>{menuHamburgerIcon()}</IconContainer></MenuHamburger>
            </Menu>
            </MediaQuery>
        </Container>

            <MediaQuery query="(max-width: 1024px)">
            <MenuMobile ref={mobileMenu}> {/*Mobile Menu*/}
                <MenuItem><IconContainer>{menuGoldIcon()}</IconContainer><SmallText>ZDOBYWAJ</SmallText></MenuItem>
                <MenuItem><IconContainer>{menuTrophyIcon()}</IconContainer><SmallText>LIDERZY</SmallText></MenuItem>
                <MenuItem><IconContainer>{menuAccountIcon()}</IconContainer><SmallText>REJESTRACJA</SmallText></MenuItem>
            </MenuMobile>
            </MediaQuery>

</>
    );
}

export default Header;