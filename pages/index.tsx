import Header from "../components/Header";
import {GlobalStyle} from "../styles/Global.style";
import {
    Banner,
    BannerMainImage,
    BannerSmallText,
    BannerTitle,
    Container,
    IndexTitle,
    InfoBlock, InfoContainer
} from "../styles/Index.style";
import {motion} from "framer-motion";

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
<InfoBlock></InfoBlock><InfoBlock></InfoBlock><InfoBlock></InfoBlock>
    </InfoContainer>
</Container>
            </motion.div>
        </>
    );
}

export default IndexPage
