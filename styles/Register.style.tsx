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

export const RegisterBoxForm = styled.div`
flex: 50%;
margin-left: -20%;
margin-top: -100px;
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
flex: 10%;
position: relative;
top: 150px;

`;
