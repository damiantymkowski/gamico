import styled from "styled-components";
import {Colors} from "./Colors.style";

export const Banner = styled.div`
min-height: 300px;
background: ${Colors.lightGray};
margin-top: 20px;
position: absolute;
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-family: 'Rubik', sans-serif;
`

export const BannerTitle = styled.h2`
color: ${Colors.lime};
font-weight: bold;
font-size: 36px;
margin: 0;
`

export const BannerSmallText = styled.h3`
color: ${Colors.white};
margin-right: 100px;
margin-top: -2px;
font-weight: 200;
`

export const BannerMainImage = styled.div`

`