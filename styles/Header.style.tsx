import styled from "styled-components";
import { Colors } from "./Colors.style";

export const Container = styled.div`
  background: #393e46;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
`;

type MenuType = {
  desktop?: boolean;
  mobile?: boolean;
};

export const Menu = styled.div<MenuType>`
  display: flex;
  font-family: "Karla", sans-serif;
  align-items: center;
  margin-left: 5%;
  color: ${Colors.lime};
  width: 100%;
  height: 100%;
  ${({ desktop }) =>
    desktop &&
    `
    @media screen and (max-width: 1000px) {display: none;}
  `}
  ${({ mobile }) =>
    mobile &&
    `
    @media screen and (min-width: 1000px) {display: none;}
  `}
`;

export const IconContainer = styled.div`
  font-size: 25px;
`;

type MenuItemType = {
  right?: boolean;
  last?: boolean;
};

export const MenuItem = styled.div<MenuItemType>`
  margin-left: ${(props) => (props.right ? "auto" : "3%")};
  display: flex;
  align-items: center;
  margin-right: ${(props) => (props.right ? "5%" : "")};
  margin-right: ${(props) => (props.last ? "5%" : "")};
  height: 100%;
  cursor: pointer;
  &:hover {
    border-top: 1px solid ${Colors.lime};
  }
`;

export const MenuMobile = styled.div`
  display: none;
  z-index: 10;
  position: relative;
  justify-content: center;
  flex-direction: column;
  color: ${Colors.lime};
  background: ${Colors.lightGray};
  width: 100%;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const SmallText = styled.p`
  font-family: Karla, sans-serif;
  font-size: 14px;
  line-height: 21px;
  margin-left: 10px;
`;

export const Logo = styled.h2`
  margin: 0;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 43px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 17px;
  color: ${Colors.white};
  &:hover {
    border-top: 1px solid ${Colors.lime};
  }
`;
