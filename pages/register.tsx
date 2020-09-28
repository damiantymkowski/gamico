import {GlobalStyle} from "../styles/Global.style";
import Header from "../components/Header";
import {
    Container,
    RegisterBox,
    RegisterBoxButton,
    RegisterBoxForm,
    RegisterBoxImage,
    RegisterBoxInfo,
    RegisterBoxInput,
    RegisterBoxInputContainer,
    RegisterBoxInputImg,
    RegisterBoxTitle
} from "../styles/Register.style";
import {accountIcon, lockIcon, mailIcon,} from "../utils/Icons";

const Register = () =>{
    return(
      <>
          <GlobalStyle/>
          <Header/>
          <Container>
    <RegisterBox>
        <RegisterBoxImage
            alt="Register box image. Minecraft character with potion. He have long robe, big smile and tshirt."
            src="/images/doktor.png"/>
        <RegisterBoxForm>
            <RegisterBoxTitle>REJESTRACJA</RegisterBoxTitle>
            <RegisterBoxInfo>OTRZYMAJ DOSTĘP DO WSZYSTKICH FUNKCJI</RegisterBoxInfo>
            <RegisterBoxInputContainer>
                <RegisterBoxInputImg>{mailIcon()}</RegisterBoxInputImg>
                <RegisterBoxInput placeholder="Adres e-mail"></RegisterBoxInput>
            </RegisterBoxInputContainer>
            <RegisterBoxInputContainer>
                <RegisterBoxInputImg>{accountIcon()}</RegisterBoxInputImg>
                <RegisterBoxInput placeholder="Nazwa Użytkownika"></RegisterBoxInput>
            </RegisterBoxInputContainer>
            <RegisterBoxInputContainer>
                <RegisterBoxInputImg>{lockIcon()}</RegisterBoxInputImg>
                <RegisterBoxInput placeholder="Hasło" type="password"></RegisterBoxInput>
            </RegisterBoxInputContainer>
            <RegisterBoxButton>ZAREJESTRUJ SIĘ</RegisterBoxButton>
        </RegisterBoxForm>

        </RegisterBox>
          </Container>
      </>
    );
}

export default Register