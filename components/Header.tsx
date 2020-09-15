import {Container, IconContainer, Logo, Menu, MenuItem, SmallText} from '../styles/Header.style'
import MediaQuery from "react-responsive";
import {menuAccountIcon, menuGoldIcon, menuHamburgerIcon, menuTrophyIcon} from "../utils/Header.utils";

const Header = () => {
    return (
        <Container>
            <Logo>GAMICO</Logo>

            <MediaQuery query="(min-width: 1024px)"> {/*Desktop Menu*/}
            <Menu>
                <MenuItem><IconContainer>{menuGoldIcon()}</IconContainer><SmallText>ZDOBYWAJ</SmallText></MenuItem>
                <MenuItem><IconContainer>{menuTrophyIcon()}</IconContainer><SmallText>LIDERZY</SmallText></MenuItem>
                <MenuItem last><IconContainer>{menuAccountIcon()}</IconContainer><SmallText>REJESTRACJA</SmallText></MenuItem>
            </Menu>
            </MediaQuery>

            <MediaQuery query="(max-width: 1024px)">  {/*Mobile Menu*/}
            <Menu>
                <MenuItem last><IconContainer>{menuHamburgerIcon()}</IconContainer></MenuItem>
            </Menu>
            </MediaQuery>

        </Container>
    );
}

export default Header;