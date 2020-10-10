import Header from "../components/Header";
import { GlobalStyle } from "../styles/Global.style";
import * as S from "../styles/Index.style";
import { motion } from "framer-motion";
import Icon from "@iconify/react";
import cash100 from "@iconify/icons-mdi/cash-100";
import React from "react";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <S.Container>
          <S.Banner>
            <S.BannerTitle>Pisz artykuły o grach</S.BannerTitle>
            <S.BannerSmallText>zdobywaj rozmaite nagrody</S.BannerSmallText>
            <S.BannerMainImage></S.BannerMainImage>
          </S.Banner>
          <S.IndexTitle>JAK TO DZIAŁA?</S.IndexTitle>
          <S.InfoContainer>
            <S.InfoBlock>
              <S.InfoIcon>
                <Icon icon={cash100} />
              </S.InfoIcon>
              <S.InfoTitle>ZARABIAJ</S.InfoTitle>
              <S.InfoSmallText>
                Wygrywaj różnorodne nagrody za artykuły
              </S.InfoSmallText>
            </S.InfoBlock>
            <S.InfoBlock>
              <S.InfoIcon>
                <Icon icon={cash100} />
              </S.InfoIcon>
              <S.InfoTitle>ZARABIAJ</S.InfoTitle>
              <S.InfoSmallText>
                Wygrywaj różnorodne nagrody za artykuły
              </S.InfoSmallText>
            </S.InfoBlock>
            <S.InfoBlock>
              <S.InfoIcon>
                <Icon icon={cash100} />
              </S.InfoIcon>
              <S.InfoTitle>ZARABIAJ</S.InfoTitle>
              <S.InfoSmallText>
                Wygrywaj różnorodne nagrody za artykuły
              </S.InfoSmallText>
            </S.InfoBlock>
          </S.InfoContainer>

          <S.StatsContainer>
            <S.StatsBlock>ZEBRANYCH MONET</S.StatsBlock>
            <S.StatsBlock>UŻYTKOWNIKÓW</S.StatsBlock>
            <S.StatsBlock>NAPISANYCH ARTYKUŁÓW</S.StatsBlock>
          </S.StatsContainer>

          <S.AboutTextContainer>
            <S.AboutSiteText>
              <S.AboutHeader>Tekst SEO</S.AboutHeader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              aliquam faucibus leo habitasse volutpat, sit. Pretium mi nunc dui
              porta tellus tellus mauris, pharetra consectetur. Sit neque nunc
              ullamcorper amet, eget ornare pellentesque convallis. Faucibus
              enim enim tellus eleifend condimentum erat praesent. Nulla tellus
              ut tortor justo, neque lorem cum odio. Tincidunt et turpis aliquam
              dignissim tincidunt nec quam faucibus. Senectus eget maecenas duis
              purus duis non morbi sed. Commodo hac sapien id tristique.
            </S.AboutSiteText>
            <S.AboutSiteText>
              <S.AboutHeader>Tekst SEO</S.AboutHeader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              aliquam faucibus leo habitasse volutpat, sit. Pretium mi nunc dui
              porta tellus tellus mauris, pharetra consectetur. Sit neque nunc
              ullamcorper amet, eget ornare pellentesque convallis. Faucibus
              enim enim tellus eleifend condimentum erat praesent. Nulla tellus
              ut tortor justo, neque lorem cum odio. Tincidunt et turpis aliquam
              dignissim tincidunt nec quam faucibus. Senectus eget maecenas duis
              purus duis non morbi sed. Commodo hac sapien id tristique.
            </S.AboutSiteText>
          </S.AboutTextContainer>
        </S.Container>
        <Footer />
      </motion.div>
    </>
  );
};

export default IndexPage;
