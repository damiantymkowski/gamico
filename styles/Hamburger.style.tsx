import styled, {keyframes} from "styled-components";
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
export const HamburgerLine = styled.span`
content: '';
position: absolute;
background-color: ${Colors.lime};
width: 30px;
height: 1px;
left:0;
&::before, &::after{
content: '';
position: absolute;
background-color: ${Colors.lime};
width: 30px;
height: 1px;
}
&::before{
top:-10px;
}
&::after{
top: 10px;
}
`

const openMenuAnimationAfter = keyframes`
    0% { transform: translateX(-3px) translateY(0px) rotate(0deg)}
    30% { transform: translateX(-3px) translateY(-10px) rotate(-20deg) }
    40% { transform: translateX(-3px) translateY(-10px) rotate(-30deg) }
    100% { transform: translateX(-3px) translateY(-10px) rotate(-45deg) }
`

const openMenuAnimationBefore = keyframes`
    0% { transform: translateY(0px) rotate(0deg) }
    30% { transform: translateY(10px) rotate(20deg)}
    40% { transform: translateY(10px) rotate(30deg)}
    100% { transform: translateY(10px) rotate(45deg)}
`

export const ActiveHamburgerButton = styled(HamburgerButton)`
${HamburgerLine}{
background-color: transparent;
    &::after{
    transform: translateY(-10px) rotate(-40deg);
    animation-name: ${openMenuAnimationAfter};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    
    }
    &::before{
    transform: translateY(10px) rotate(40deg);
    animation-name: ${openMenuAnimationBefore};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    }
}
`


