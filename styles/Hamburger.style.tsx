import styled from "styled-components";
import {Colors} from "./Colors.style";

export const HamburgerButton = styled.button`
background: none;
border: none;
display: flex;
width: 40px;
height: 40px;
text-align: left;
cursor: pointer;
`

export const HamburgerIcon = styled.span`
width: 20px;
height: 5px;
display: inline-block;
position: relative;
`
export const HamburgerLine = styled.span`
content: '';
position: absolute;
border-bottom: 1px solid ${Colors.white};
width: 30px;
height: 5px;
left:0;
&::before, &::after{
content: '';
position: absolute;
border-bottom: 1px solid ${Colors.white};
width: 30px;
height: 5px;
}
&::before{
top:-10px;
}
&::after{
top: 10px;
}

`

