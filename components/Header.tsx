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
} from "../utils/Header.utils";
import { useRef } from "react";
import Hamburger from "./Hamburger";


const Header = () => {
  const mobileMenu = useRef();
  return (
    <>
      <Container>
        <Logo>GAMICO</Logo>

        <MediaQuery query="(min-width: 1024px)">
          {/*Desktop Menu*/}
          <Menu>
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
        </MediaQuery>

        <MediaQuery query="(max-width: 1024px)">
          {/*Mobile Hamburger*/}
          <Menu>
            <Hamburger mobileMenuElement={mobileMenu}/>
          </Menu>
        </MediaQuery>
      </Container>

      <MediaQuery query="(max-width: 1024px)">
        <MenuMobile ref={mobileMenu}>
          {/*Mobile Menu*/}
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
      </MediaQuery>
      <Banner>
        <BannerTitle>Pisz artykuły o grach</BannerTitle>
        <BannerSmallText>zdobywaj rozmaite nagrody</BannerSmallText>
        <BannerMainImage></BannerMainImage>
      </Banner>
    </>
  );
};

export default Header;
