import * as S from "../styles/Header.style";
import { menuAccountIcon, menuGoldIcon, menuTrophyIcon } from "../utils/Icons";
import { useRef } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";

const Header = () => {
  const mobileMenu = useRef<HTMLDivElement>(null);
  return (
    <>
      <S.Container>
        <Link href="/" as="/">
          <S.Logo>GAMICO</S.Logo>
        </Link>

        <S.Menu desktop>
          <S.MenuItem>
            <S.IconContainer>{menuGoldIcon()}</S.IconContainer>
            <S.SmallText>ZDOBYWAJ</S.SmallText>
          </S.MenuItem>

          <S.MenuItem>
            <S.IconContainer>{menuTrophyIcon()}</S.IconContainer>
            <S.SmallText>LIDERZY</S.SmallText>
          </S.MenuItem>

          <Link href="/register" as="/register">
            <S.MenuItem right>
              <S.IconContainer>{menuAccountIcon()}</S.IconContainer>
              <S.SmallText>REJESTRACJA</S.SmallText>
            </S.MenuItem>
          </Link>

          <Link href="/login" as="/login">
            <S.MenuItem last>
              <S.IconContainer>{menuAccountIcon()}</S.IconContainer>
              <S.SmallText>LOGOWANIE</S.SmallText>
            </S.MenuItem>
          </Link>


        </S.Menu>

        <S.Menu mobile>
          <Hamburger mobileMenuElement={mobileMenu} />
        </S.Menu>
      </S.Container>

      <S.MenuMobile ref={mobileMenu}>
        <S.MenuItem>
          <S.IconContainer>{menuGoldIcon()}</S.IconContainer>
          <S.SmallText>ZDOBYWAJ</S.SmallText>
        </S.MenuItem>
        <S.MenuItem>
          <S.IconContainer>{menuTrophyIcon()}</S.IconContainer>
          <S.SmallText>LIDERZY</S.SmallText>
        </S.MenuItem>
        <Link href="/register" as="/register">
          <S.MenuItem>
            <S.IconContainer>{menuAccountIcon()}</S.IconContainer>
            <S.SmallText>REJESTRACJA</S.SmallText>
          </S.MenuItem>
        </Link>
      </S.MenuMobile>
    </>
  );
};

export default Header;
