import {GlobalStyle} from "../styles/Global.style";
import Header from "../components/Header";
import {
    Container,
    RegisterBox,
    RegisterBoxForm,
    RegisterBoxImage,
    RegisterBoxInfo,
    RegisterBoxTitle
} from "../styles/Register.style";


const Register = () =>{
    return(
      <>
          <GlobalStyle/>
          <Header/>
          <Container>
    <RegisterBox>
        <RegisterBoxImage alt="Register box image. Minecraft character with potion. He have long robe, big smile and tshirt." src="/images/doktor.png" />
        <RegisterBoxForm>
        <RegisterBoxTitle>REJESTRACJA</RegisterBoxTitle>
        <RegisterBoxInfo>OTRZYMAJ DOSTĘP DO WSZYSTKICH FUNKCJI</RegisterBoxInfo>

        </RegisterBoxForm>

        </RegisterBox>
          </Container>
      </>
    );
}

export default Register