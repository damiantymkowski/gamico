import styled, {css} from "styled-components";
import {Colors} from "./Colors.style";

export const HamburgerButton = styled.button`
background: none;
border: none;
display: flex;
width: 40px;
height: 40px;
text-align: left;
cursor: pointer;
margin-left: auto;
padding: 0;
margin-right: 15px;
align-items: center;
@media screen and (min-width: 1000px) {display: none;}
`

export const HamburgerIcon = styled.span`
width: 20px;
display: inline-block;
position: relative;
`

type HamburgerLineType = {
  animate?: boolean
}

export const HamburgerLine = styled.span<HamburgerLineType>`
content: '';
position: absolute;
background-color: ${Colors.lime};
width: 30px;
height: 1px;
left:0;
  ${({ animate }) => animate && css`
  background-color: transparent;
  `}
  transition: background-color .2s ease-in-out;
&::before, &::after{
content: '';
position: absolute;
background-color: ${Colors.lime};
width: 30px;
height: 1px;
transition: transform .2s .1s ease-in-out;
}
&::before{
top:-10px;
  ${({ animate }) => animate && css`
transform: translateY(10px) rotate(45deg);
  `}
}
&::after{
top: 10px;
  ${({ animate }) => animate && css`
 transform: translateX(-3px) translateY(-10px) rotate(-45deg);
  `}
}
`
