import {GlobalStyle} from "../styles/Global.style";
import Header from "../components/Header";
import {
    Container,
    RegisterBox,
    RegisterBoxButton,
    RegisterBoxErrorMessage,
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
import React, {useRef, useState} from "react";
import {motion} from 'framer-motion';


type RegisterUser = {
    username: string;
    email: string;
    password: string;
    multipleErrorInput: string;
};


const Register = () => {
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorUsername, setErrorUsername] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);

    const errorEmailText = useRef<HTMLSpanElement>(),
        errorUsernameText = useRef<HTMLSpanElement>(),
        errorPasswordText = useRef<HTMLSpanElement>();

    const {register, handleSubmit, errors} = useForm<RegisterUser>({
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    const onSubmit = (data: RegisterUser) => {

    };

    const onError = (errors: any) => {
        console.log(errors);
           if(errors.email) {
               if (errorEmail == false) {
                   setErrorEmail(true);
                   if(errors.email.type==="required")
                   errorEmailText.current.innerText = "Pole nie może być puste";
               }
           }else if(errorEmail==true){
               setErrorEmail(false);
               errorEmailText.current.innerText = "";
           }

        if(errors.username) {
            if (errorUsername == false) {
                setErrorUsername(true);
                errorUsernameText.current.innerText = "Pole nie może być puste";
            }
        }else if(errorUsername==true){
            setErrorUsername(false);
            errorUsernameText.current.innerText = "";
        }

        if(errors.password) {
            if (errorPassword == false) {
                setErrorPassword(true);
                if(errors.password.type==="required")
                errorPasswordText.current.innerText = "Pole nie może być puste";
                if(errors.password
                    .type==="pattern")
                    errorPasswordText.current.innerText = "Niepoprawne hasło";
            }
        }else if(errorPassword==true){
            setErrorPassword(false);
            errorPasswordText.current.innerText = "";
        }
    };

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Container>
                <motion.div
                    initial={{opacity: 0, rotate: 50}}
                    animate={{opacity: 1, rotate: 0}}
                    exit={{opacity: 0}}
                >
                    <RegisterBox>
                        <RegisterBoxImage
                            alt="Register box image. Minecraft character with potion. He have long robe, big smile and tshirt."
                            src="/images/doktor.png"/>
                        <RegisterBoxForm onChange={onError(errors)} onSubmit={handleSubmit(onSubmit, onError)}>
                            <RegisterBoxTitle>REJESTRACJA</RegisterBoxTitle>
                            <RegisterBoxInfo>OTRZYMAJ DOSTĘP DO WSZYSTKICH FUNKCJI</RegisterBoxInfo>
                            <RegisterBoxInputContainer>
                                <RegisterBoxInputImg error={errorEmail}>{mailIcon()}</RegisterBoxInputImg>

                                <RegisterBoxInput ref={register({
                                    required: "Required"
                                })} type="email" id="email" name="email"
                                                  placeholder="Adres e-mail"></RegisterBoxInput>
                            </RegisterBoxInputContainer>

                            <RegisterBoxErrorMessage ref={errorEmailText}></RegisterBoxErrorMessage>

                            <RegisterBoxInputContainer>
                                <RegisterBoxInputImg error={errorUsername}>{accountIcon()}</RegisterBoxInputImg>
                                <RegisterBoxInput ref={register({
                                    required: "Required"
                                })} type="text" id="username" name="username"
                                                  placeholder="Nazwa Użytkownika"></RegisterBoxInput>
                            </RegisterBoxInputContainer>

                            <RegisterBoxErrorMessage ref={errorUsernameText}></RegisterBoxErrorMessage>

                            <RegisterBoxInputContainer>
                                <RegisterBoxInputImg error={errorPassword}>{lockIcon()}</RegisterBoxInputImg>
                                <RegisterBoxInput ref={register({
                                    required: "Required",
                                    pattern: /[A-Za-z]{3}/
                                })} name="password" id="password" placeholder="Hasło"
                                                  type="password"></RegisterBoxInput>
                            </RegisterBoxInputContainer>

                            <RegisterBoxErrorMessage ref={errorPasswordText}></RegisterBoxErrorMessage>

                            <RegisterBoxButton type="submit">ZAREJESTRUJ SIĘ</RegisterBoxButton>


                        </RegisterBoxForm>

        </RegisterBox>
                </motion.div>
          </Container>
      </>
    );
}

export default Register