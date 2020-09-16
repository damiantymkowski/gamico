import styled, {keyframes} from 'styled-components'
import {Colors} from "./Colors.style";

export const Container = styled.div`
background: #393E46;
height: 76px;
width: 100%;
display: flex;
align-items: center;
`

export const Menu = styled.div`
display: flex;
font-family: 'Karla', sans-serif;
align-items: center;
margin-left: 5%;
color: ${Colors.lime};
width: 100%;
`

export const IconContainer = styled.div`
font-size: 25px;
`

export const MenuItem = styled.div`
margin-left: ${props => props.last ? "auto" : "3%"};
display: flex;
align-items: center;
margin-right: ${props=>props.last ? "5%" : ""};
`

export const MenuHamburger = styled.button`
display: flex;
align-items: center;
margin-right: 5%;
margin-left: auto;
background: none;
border: none;
color: ${Colors.lime};
`

const openMenuAnimation = keyframes`
    0% { opacity: 0.1;}
    30% { opacity: 0.4;}
    40% { opacity: 0.7;}
    100% { opacity: 1;}
`

export const MenuMobile = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
color: ${Colors.lime};
background: ${Colors.lightGray};
animation-name: ${openMenuAnimation};
animation-duration: 0.6s;
width: 100%;
display: none;
@media screen and (min-width: 1000px) {
  display: none;
}
`

export const SmallText = styled.p`
font-family: Karla, sans-serif;
font-size: 14px;
line-height: 21px;
margin-left: 10px;
`

export const Logo = styled.h2`
margin: 0;
font-family: Rubik, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 43px;
margin-left: 17px;
color: ${Colors.white};
`
