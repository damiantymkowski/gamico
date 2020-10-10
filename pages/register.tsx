import { GlobalStyle } from "../styles/Global.style";
import Header from "../components/Header";
import * as S from "../styles/Register.style";
import { accountIcon, lockIcon, mailIcon } from "../utils/Icons";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type RegisterUser = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorUsername, setErrorUsername] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const errorEmailText = useRef<HTMLParagraphElement>(null),
    errorUsernameText = useRef<HTMLParagraphElement>(null),
    errorPasswordText = useRef<HTMLParagraphElement>(null),
    errorRegisterText = useRef<HTMLParagraphElement>(null);

  const { register, handleSubmit, errors } = useForm<RegisterUser>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: RegisterUser) => {
    setLoading(true);
    axios
      .post(`/api/signup`, {
        name: data.username,
        password: data.password,
        email: data.email,
      })
      .then((res) => {
        setLoading(false);
        (errorRegisterText as any).current.innerText = "";
        if (res.status === 201)
          (errorRegisterText as any).current.innerText =
            "Witamy! Na podanym mailu znajdziesz link aktywacyjny";
        setSubmitSuccess(true);
      })
      .catch((error) => {
        if (error.response.status === 404)
          (errorRegisterText as any).current.innerText =
            "Nie można nawiązać połączenia. Kod błędu: 404";
        if (error.response.status === 409)
          (errorRegisterText as any).current.innerText =
            "Taki Użytkownik już istnieje";
        setLoading(false);
      });
  };

  const onError = (errors: any) => {
    if (errors.email) {
      if (errorEmail == false) {
        setErrorEmail(true);
        if (errors.email.type === "required")
          (errorEmailText as any).current.innerText = "Pole nie może być puste";
        if (errors.email.type === "pattern")
          (errorEmailText as any).current.innerText =
            "Niepoprawny adres e-mail";
      }
    } else if (errorEmail == true) {
      setErrorEmail(false);
      (errorEmailText as any).current.innerText = "";
    }

    if (errors.username) {
      if (errorUsername == false) {
        setErrorUsername(true);
        if (errors.username.type === "required")
          (errorUsernameText as any).current.innerText =
            "Pole nie może być puste";
        if (errors.username.type === "pattern")
          (errorUsernameText as any).current.innerText =
            "Błąd: 3-20 znaków, brak znaków specjalnych";
      }
    } else if (errorUsername == true) {
      setErrorUsername(false);
      (errorUsernameText as any).current.innerText = "";
    }

    if (errors.password) {
      if (errorPassword == false) {
        setErrorPassword(true);
        if (errors.password.type === "required")
          (errorPasswordText as any).current.innerText =
            "Pole nie może być puste";
        if (errors.password.type === "pattern")
          (errorPasswordText as any).current.innerText = "Niepoprawne hasło";
      }
    } else if (errorPassword == true) {
      setErrorPassword(false);
      (errorPasswordText as any).current.innerText = "";
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <S.Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <S.Box>
            <S.Image
              alt="Register box image. Minecraft character with potion. He have long robe, big smile and tshirt."
              src="/images/doktor.png"
            />
            <S.Form
              onChange={onError(errors)}
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <S.Title>REJESTRACJA</S.Title>
              <S.Subheading>OTRZYMAJ DOSTĘP DO WSZYSTKICH FUNKCJI</S.Subheading>

              <S.InputContainer>
                <S.InputImage error={errorEmail}>{mailIcon()}</S.InputImage>

                <S.Input
                  ref={register({
                    required: "Required",
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  })}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Adres e-mail"
                ></S.Input>
              </S.InputContainer>

              <S.ErrorMessage ref={errorEmailText}></S.ErrorMessage>

              <S.InputContainer>
                <S.InputImage error={errorUsername}>
                  {accountIcon()}
                </S.InputImage>
                <S.Input
                  ref={register({
                    required: "Required",
                    pattern: /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
                  })}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Nazwa Użytkownika"
                ></S.Input>
              </S.InputContainer>

              <S.ErrorMessage ref={errorUsernameText}></S.ErrorMessage>

              <S.InputContainer>
                <S.InputImage error={errorPassword}>{lockIcon()}</S.InputImage>
                <S.Input
                  ref={register({
                    required: "Required",
                    pattern: /[A-Za-z]{3}/,
                  })}
                  name="password"
                  id="password"
                  placeholder="Hasło"
                  type="password"
                ></S.Input>
              </S.InputContainer>

              <S.ErrorMessage ref={errorPasswordText}></S.ErrorMessage>

              <S.Button type="submit">
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  `ZAREJESTRUJ SIĘ`
                )}
              </S.Button>
              <S.ErrorMessage
                error={submitSuccess}
                ref={errorRegisterText}
              ></S.ErrorMessage>
            </S.Form>
          </S.Box>
        </motion.div>
      </S.Container>
    </>
  );
};

export default Register;
