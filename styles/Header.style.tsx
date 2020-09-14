import styled from 'styled-components'
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
margin-top: 12px;
margin-left: 5%;
color: ${Colors.lime};
width: 100%;
`

export const IconContainer = styled.div`
font-size: 41px;
`
export const MenuItem = styled.div`
margin-left: ${props => props.last ? "auto" : "3%"};
display: flex;
align-items: center;
margin-right: ${props=>props.last ? "5%" : ""};
justify-content: center;
`
export const SmallText = styled.p`
font-family: Karla, sans-serif;
font-size: 18px;
line-height: 21px;
margin-left: 10px;
`

export const Logo = styled.h2`
margin: 0;
font-family: Rubik, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 43px;
margin-left: 17px;
color: ${Colors.white};
`
