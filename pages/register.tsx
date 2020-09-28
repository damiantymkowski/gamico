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
import {useForm} from "react-hook-form";
import {useRef} from "react";
import { motion } from 'framer-motion';

type RegisterUser = {
    username: string;
    email: string;
    password: string;
};


const Register = () => {
    const emailIcon = useRef(null);
    const usernameIcon = useRef(null);
    const passwordIcon = useRef(null);

    const {register, handleSubmit, errors} = useForm<RegisterUser>();
    const onSubmit = (data: RegisterUser) => {
        console.log("data", data);

    };

    const onError = (errors, e) => {
        emailIcon.current.style.backgroundColor = "#4ECCA3";
        usernameIcon.current.style.backgroundColor = "#4ECCA3";
        passwordIcon.current.style.backgroundColor = "#4ECCA3";
        if(errors.email)
         emailIcon.current.style.backgroundColor = "#e25d5d";
        if(errors.username)
            usernameIcon.current.style.backgroundColor = "#e25d5d";
        if(errors.password)
            passwordIcon.current.style.backgroundColor = "#e25d5d";
    };

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Container>
                <motion.div
                    initial={{opacity:0, rotate: 50}}
                    animate={{ opacity:1, rotate: 0 }}
                    exit={{ opacity: 0 }}
                >
                <RegisterBox>
                    <RegisterBoxImage
                        alt="Register box image. Minecraft character with potion. He have long robe, big smile and tshirt."
                        src="/images/doktor.png"/>
                    <RegisterBoxForm onSubmit={handleSubmit(onSubmit, onError)}>
                        <RegisterBoxTitle>REJESTRACJA</RegisterBoxTitle>
                        <RegisterBoxInfo>OTRZYMAJ DOSTĘP DO WSZYSTKICH FUNKCJI</RegisterBoxInfo>
                        <RegisterBoxInputContainer>
                            <RegisterBoxInputImg ref={emailIcon}>{mailIcon()}</RegisterBoxInputImg>

                            <RegisterBoxInput ref={register({
                                required: "Required"
                            })} type="email" id="email" name="email"
                                              placeholder="Adres e-mail"></RegisterBoxInput>

                        </RegisterBoxInputContainer>

                        <RegisterBoxInputContainer>
                            <RegisterBoxInputImg ref={usernameIcon}>{accountIcon()}</RegisterBoxInputImg>
                            <RegisterBoxInput ref={register({
                                required: "Required"
                            })} type="text" id="username" name="username"
                                              placeholder="Nazwa Użytkownika"></RegisterBoxInput>
                        </RegisterBoxInputContainer>

                        <RegisterBoxInputContainer>
                            <RegisterBoxInputImg ref={passwordIcon}>{lockIcon()}</RegisterBoxInputImg>
                            <RegisterBoxInput ref={register({
                                required: "Required"
                            })} name="password" id="password" placeholder="Hasło"
                                              type="password"></RegisterBoxInput>
                        </RegisterBoxInputContainer>

                        <RegisterBoxButton type="submit">ZAREJESTRUJ SIĘ</RegisterBoxButton>
                    </RegisterBoxForm>

        </RegisterBox>
                </motion.div>
          </Container>
      </>
    );
}

export default Register