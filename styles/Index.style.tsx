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
margin-top: 30px;
display: flex;
flex-direction: row;
@media (max-width: 1100px) {
   flex-direction: column;
   margin-top: unset;
 }
`

export const InfoBlock = styled.div`
width: 325px;
color: ${Colors.lime};
height: 155px;
background-color: ${Colors.lightGray};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
-webkit-box-shadow: 0px 2px 12px 3px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 12px 3px rgba(0,0,0,0.75);
box-shadow: 0px 2px 12px 3px rgba(0,0,0,0.75);
padding: 40px;

&:nth-child(1){
background-color: ${Colors.lightGray};
position: relative;
left: 50px;
@media (max-width: 1100px) {
   left: unset;
 }
}
&:nth-child(2){
background-color: ${Colors.lightGray};
position: relative;
top: -20px;
box-shadow: 1px solid blue;
z-index: 999;
@media (max-width: 1100px) {
   top: unset;
 }
}
&:nth-child(3){
right: 50px;
@media (max-width: 1100px) {
   right: unset;
 }
}
 @media (max-width: 1100px) {
   margin-top: 55px;
   padding: 20px;
 }
`

export const InfoTitle = styled.h3`
margin: 0;
margin-bottom: -15px;
font-size: 25px;
margin-top: 40px;
`

export const InfoSmallText = styled.p`
font-size: 20px;
text-align: center;
color: ${Colors.white};
margin-right: 10px;
margin-left: 20px;
`

export const InfoIcon = styled.div`
font-size: 140px;
position: absolute;
top: -60px;
`

export const StatsBlock = styled.div`
height: 70px;
width: 345px;
background-color: ${Colors.lightGray};
margin-left: 20px;
margin-right: 20px;
-webkit-box-shadow: 0px 2px 12px 3px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 12px 3px rgba(0,0,0,0.75);
box-shadow: 0px 2px 12px 3px rgba(0,0,0,0.75);
display: flex;
justify-content: center;
align-items: center;
color: ${Colors.white};
@media (max-width: 1100px) {
   margin-top: 25px;
 }
`

export const StatsContainer = styled.div`
display: flex;
margin-top: 80px;
flex-direction: row;
@media (max-width: 1100px) {
   flex-direction: column;
   margin-top: 20px;
 }
`

export const AboutTextContainer = styled.div`
margin-top: 20px;
margin-left: 10px;
display: flex;
width: 61.5%;
@media (max-width: 1100px) {
   flex-direction: column;
   width: 90%;
   margin-left: unset;
 }
`

export const AboutSiteText = styled.div`
margin-left: 10px;
flex: 50%;
color: ${Colors.white};
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5;

`
export const AboutHeader = styled.h2`
font-weight: normal;
color: ${Colors.lime};
margin-bottom: 2px;
`
