import styled from "styled-components";
import {Colors} from "./Colors.style";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 93vh;
`;

export const RegisterBox = styled.div`
  width: 600px;
  min-height: 600px;
  background-color: ${Colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 1100px) {
   width: 100%;
 }
`;

export const RegisterBoxTitle = styled.h1`
font-size: 50px;
color: ${Colors.lime};
font-family: 'Karla', sans-serif;
`;

type RegisterBoxFormType = {
    onChange?: any
    onSubmit?: any
}

export const RegisterBoxForm = styled.form<RegisterBoxFormType>`
flex: 95%;
display: flex;
flex-direction: column;
align-items: center;

margin-left: -35%;
@media (max-width: 1100px) {
   margin-left: unset;
 }
`;

export const RegisterBoxInfo = styled.h3`
color: ${Colors.white};
font-family: Rubik, sans-serif;
font-weight: 200;
margin-top: -35px;
::after{
content: ' NASZEGO SERWISU';
white-space: pre; 
}
`;

export const RegisterBoxImage = styled.img`
right: 70px;
flex: 5%;
position: relative;
top: 150px;
@media (max-width: 1100px) {
   display: none;
 }
`;

export const RegisterBoxInput = styled.input`
height: 30px;
border: none;
`;

export const RegisterBoxButton = styled.button`
padding: 5px;
width: 38%;
margin-top: 5px;
border: none;
background-color: ${Colors.lime};
font-family: Rubik, sans-serif;
font-size: 17px;
cursor: pointer;
`

export const RegisterBoxInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`

type RegisterBoxInputImgType = {
    error?: boolean
}

export const RegisterBoxInputImg = styled.div<RegisterBoxInputImgType>`


height: 32px;
width: 36px;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
color: ${Colors.darkBlue};
background-color: ${props => props.error ? `${Colors.lightRed}` : `${Colors.lime}`};
transition: background-color 0.3s;
@media (max-width: 1100px) {
 //margin-left: 115px;
 }
`

type RegisterBoxErrorMessageType = {
    ref?: React.Ref<HTMLParagraphElement>
}


export const RegisterBoxErrorMessage = styled.p<RegisterBoxErrorMessageType>`
color: ${props=>props.error ? `${Colors.lime}` : `${Colors.lightRed}`};
font-family: 'Rubik', sans-serif;
font-size: 12px;
padding: 0;
margin: 0;
margin-top: 5px;
text-align: left;
margin-left: 175px;

`

