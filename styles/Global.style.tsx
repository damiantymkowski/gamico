import {createGlobalStyle} from "styled-components";
import {Colors} from "./Colors.style";
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    body{
      margin:0;
      color: black;
      background: ${Colors.darkBlue};
    }
    `