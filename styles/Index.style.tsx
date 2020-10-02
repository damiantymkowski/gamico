import styled from "styled-components";
import {Colors} from "./Colors.style";

export const Banner = styled.div`
min-height: 300px;
background: ${Colors.lightGray};
margin-top: 20px;
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

export const IndexTitle = styled.h2`
font-family: 'Rubik', sans-serif;
font-size: 36px;
color: ${Colors.white};
position: relative;
`

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: row;
`

export const InfoBlock = styled.div`
width: 225px;
height: 175px;
background-color: red;
display: block;
position: relative;
padding: 40px;
&:nth-child(1){
background-color: red;
position: relative;
left: 50px;
}
&:nth-child(2){
background-color: white;
position: relative;
z-index: 999;
}
&:nth-child(3){
right: 50px;
}
`
