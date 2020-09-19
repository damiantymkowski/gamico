import Header from "../components/Header";
import {GlobalStyle} from "../styles/Global.style";
import {Banner, BannerMainImage, BannerSmallText, BannerTitle} from "../styles/Index.style";

const IndexPage = () => (
<>
    <GlobalStyle/>
    <Header/>
    <Banner>
        <BannerTitle>Pisz artykuły o grach</BannerTitle>
        <BannerSmallText>zdobywaj rozmaite nagrody</BannerSmallText>
        <BannerMainImage></BannerMainImage>
    </Banner>
</>
)

export default IndexPage
