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
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas, faSpinner} from "@fortawesome/free-solid-svg-icons";

type RegisterUser = {
    username: string;
    email: string;
    password: string;
};


const Register = () => {
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorUsername, setErrorUsername] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const errorEmailText = useRef<HTMLParagraphElement>(null),
        errorUsernameText = useRef<HTMLParagraphElement>(null),
        errorPasswordText = useRef<HTMLParagraphElement>(null),
        errorRegisterText = useRef<HTMLParagraphElement>(null);

    const {register, handleSubmit, errors} = useForm<RegisterUser>({
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    const onSubmit = (data: RegisterUser) => {
        setLoading(true);
          axios.post(`localhost`)
              .then(res=>{

              }).catch(error=>{
                  if(error.response.status===404)
                errorRegisterText.current.innerText = "Nie można nawiązać połączenia. Kod błędu: 404";
                setLoading(false);
              })
    };

    const onError = (errors: any) => {
           if(errors.email) {
               if (errorEmail == false) {
                   setErrorEmail(true);
                   if(errors.email.type==="required")
                   errorEmailText.current.innerText = "Pole nie może być puste";
                   if(errors.email.type==="pattern")
                       errorEmailText.current.innerText = "Niepoprawny adres e-mail";
               }
           }else if(errorEmail==true){
               setErrorEmail(false);
               errorEmailText.current.innerText = "";
           }

        if(errors.username) {
            if (errorUsername == false) {
                setErrorUsername(true);
                if(errors.username.type==="required")
                errorUsernameText.current.innerText = "Pole nie może być puste";
                if(errors.username.type==="pattern")
                    errorUsernameText.current.innerText = "Błąd: 3-20 znaków, brak znaków specjalnych";
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
                                    required: "Required",
                                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                                })} type="email" id="email" name="email"
                                                  placeholder="Adres e-mail"></RegisterBoxInput>
                            </RegisterBoxInputContainer>

                            <RegisterBoxErrorMessage ref={errorEmailText}></RegisterBoxErrorMessage>

                            <RegisterBoxInputContainer>
                                <RegisterBoxInputImg error={errorUsername}>{accountIcon()}</RegisterBoxInputImg>
                                <RegisterBoxInput ref={register({
                                    required: "Required",
                                    pattern: /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
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

                            <RegisterBoxButton type="submit">{loading ? <FontAwesomeIcon icon={faSpinner} spin/> : `ZAREJESTRUJ SIĘ`}</RegisterBoxButton>
                            <RegisterBoxErrorMessage ref={errorRegisterText}></RegisterBoxErrorMessage>

                        </RegisterBoxForm>

        </RegisterBox>
                </motion.div>
          </Container>
      </>
    );
}

export default Register