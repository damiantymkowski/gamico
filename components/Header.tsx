import {
  Banner, BannerMainImage, BannerSmallText, BannerTitle,
  Container,
  IconContainer,
  Logo,
  Menu,
  MenuHamburger,
  MenuItem,
  MenuMobile,
  SmallText,
} from "../styles/Header.style";
import MediaQuery from "react-responsive";
import {
  menuAccountIcon,
  menuGoldIcon,
  menuHamburgerIcon,
  menuTrophyIcon,
} from "../utils/Icons";
import { useRef } from "react";
import Hamburger from "./Hamburger";


const Header = () => {
  const mobileMenu = useRef();
  return (
    <>
      <Container>
        <Logo>GAMICO</Logo>

          <Menu desktop>
            <MenuItem>
              <IconContainer>{menuGoldIcon()}</IconContainer>
              <SmallText>ZDOBYWAJ</SmallText>
            </MenuItem>

            <MenuItem>
              <IconContainer>{menuTrophyIcon()}</IconContainer>
              <SmallText>LIDERZY</SmallText>
            </MenuItem>

            <MenuItem last>
              <IconContainer>{menuAccountIcon()}</IconContainer>
              <SmallText>REJESTRACJA</SmallText>
            </MenuItem>
          </Menu>

          <Menu mobile>
            <Hamburger mobileMenuElement={mobileMenu}/>
          </Menu>
      </Container>

        <MenuMobile ref={mobileMenu}>
          <MenuItem>
            <IconContainer>{menuGoldIcon()}</IconContainer>
            <SmallText>ZDOBYWAJ</SmallText>
          </MenuItem>
          <MenuItem>
            <IconContainer>{menuTrophyIcon()}</IconContainer>
            <SmallText>LIDERZY</SmallText>
          </MenuItem>
          <MenuItem>
            <IconContainer>{menuAccountIcon()}</IconContainer>
            <SmallText>REJESTRACJA</SmallText>
          </MenuItem>
        </MenuMobile>

    </>
  );
};

export default Header;
