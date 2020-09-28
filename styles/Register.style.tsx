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
`;

export const RegisterBoxTitle = styled.h1`
font-size: 50px;
color: ${Colors.lime};
font-family: 'Karla', sans-serif;
`;

export const RegisterBoxForm = styled.form`
flex: 95%;
margin-left: -35%;
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
`;

export const RegisterBoxInput = styled.input`
width: 50%;
margin-left: 75px;
height: 30px;
margin-top: 5px;
border: none;
`;

export const RegisterBoxButton = styled.button`
width: 50.5%;
margin-left: 75px;
padding: 5px;
margin-top: 5px;
border: none;
background-color: ${Colors.lime};
font-family: Rubik, sans-serif;
font-size: 17px;
cursor: pointer;
`

export const RegisterBoxInputContainer = styled.div`
  top: 12px;
  left: 15px;
`

export const RegisterBoxInputImg = styled.div`
position: absolute;
margin-left: 138.2px;
margin-top: 5px;
height: 32.1px;
width: 36px;
background-color: ${Colors.lime};
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
color: ${Colors.darkBlue};
transition: background-color 0.3s;
`

