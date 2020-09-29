import Header from "../components/Header";
import {GlobalStyle} from "../styles/Global.style";
import {Banner, BannerMainImage, BannerSmallText, BannerTitle} from "../styles/Index.style";
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
            <Banner>
                <BannerTitle>Pisz artykuły o grach</BannerTitle>
                <BannerSmallText>zdobywaj rozmaite nagrody</BannerSmallText>
                <BannerMainImage></BannerMainImage>
            </Banner>
            </motion.div>
        </>
    );
}

export default IndexPage
