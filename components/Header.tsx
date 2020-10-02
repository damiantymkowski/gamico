import {
  Container,
  IconContainer,
  Logo,
  Menu,
  MenuItem,
  MenuMobile,
  SmallText,
} from "../styles/Header.style";
import {
  menuAccountIcon,
  menuGoldIcon,
  menuTrophyIcon,
} from "../utils/Icons";
import { useRef } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";


const Header = () => {
  const mobileMenu = useRef<HTMLDivElement>(null);
  return (
    <>
      <Container>
        <Link href="/" as="/"><Logo>GAMICO</Logo></Link>

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
              <Link href="/register" as="/register"><SmallText>REJESTRACJA</SmallText></Link>
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
