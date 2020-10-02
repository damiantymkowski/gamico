import Header from "../components/Header";
import {GlobalStyle} from "../styles/Global.style";
import {
    AboutHeader,
    AboutSiteText,
    AboutTextContainer,
    Banner,
    BannerMainImage,
    BannerSmallText,
    BannerTitle,
    Container,
    IndexTitle,
    InfoBlock, InfoContainer, InfoIcon, InfoSmallText, InfoTitle, StatsBlock, StatsContainer
} from "../styles/Index.style";
import {motion} from "framer-motion";
import Icon from "@iconify/react";
import cash100 from '@iconify/icons-mdi/cash-100';
import React from "react";

const IndexPage = () => {

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
<Container>
            <Banner>
                <BannerTitle>Pisz artykuły o grach</BannerTitle>
                <BannerSmallText>zdobywaj rozmaite nagrody</BannerSmallText>
                <BannerMainImage></BannerMainImage>
            </Banner>
                <IndexTitle>JAK TO DZIAŁA?</IndexTitle>
    <InfoContainer>
        <InfoBlock>
            <InfoIcon><Icon icon={cash100} /></InfoIcon>
            <InfoTitle>ZARABIAJ</InfoTitle>
            <InfoSmallText>Wygrywaj różnorodne nagrody za artykuły</InfoSmallText>
        </InfoBlock>
        <InfoBlock>
            <InfoIcon><Icon icon={cash100} /></InfoIcon>
            <InfoTitle>ZARABIAJ</InfoTitle>
            <InfoSmallText>Wygrywaj różnorodne nagrody za artykuły</InfoSmallText>
        </InfoBlock>
        <InfoBlock>
            <InfoIcon><Icon icon={cash100} /></InfoIcon>
            <InfoTitle>ZARABIAJ</InfoTitle>
            <InfoSmallText>Wygrywaj różnorodne nagrody za artykuły</InfoSmallText>
        </InfoBlock>
    </InfoContainer>

    <StatsContainer>
        <StatsBlock>ZEBRANYCH MONET</StatsBlock>
        <StatsBlock>UŻYTKOWNIKÓW</StatsBlock>
        <StatsBlock>NAPISANYCH ARTYKUŁÓW</StatsBlock>
    </StatsContainer>

    <AboutTextContainer>
        <AboutSiteText>
            <AboutHeader>Tekst SEO</AboutHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit aliquam faucibus leo habitasse volutpat, sit. Pretium mi nunc dui porta tellus tellus mauris, pharetra consectetur. Sit neque nunc ullamcorper amet, eget ornare pellentesque convallis. Faucibus enim enim tellus eleifend condimentum erat praesent. Nulla tellus ut tortor justo, neque lorem cum odio. Tincidunt et turpis aliquam dignissim tincidunt nec quam faucibus. Senectus eget maecenas duis purus duis non morbi sed. Commodo hac sapien id tristique.
        </AboutSiteText>
        <AboutSiteText>
            <AboutHeader>Tekst SEO</AboutHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit aliquam faucibus leo habitasse volutpat, sit. Pretium mi nunc dui porta tellus tellus mauris, pharetra consectetur. Sit neque nunc ullamcorper amet, eget ornare pellentesque convallis. Faucibus enim enim tellus eleifend condimentum erat praesent. Nulla tellus ut tortor justo, neque lorem cum odio. Tincidunt et turpis aliquam dignissim tincidunt nec quam faucibus. Senectus eget maecenas duis purus duis non morbi sed. Commodo hac sapien id tristique.
        </AboutSiteText>
    </AboutTextContainer>


</Container>
            </motion.div>
        </>
    );
}

export default IndexPage
