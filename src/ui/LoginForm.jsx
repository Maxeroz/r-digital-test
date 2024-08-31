/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useForm } from "react-hook-form"; // Импортируем useForm из react-hook-form
import arrow from "../icons/arrowLogin.svg";

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  gap: 50px;
`;

const FormInput = styled.input`
  font-size: 15px;
  color: var(--color-text-primary);
  height: 41px;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--color-accent-text);
  outline: none;

  &::placeholder {
    color: var(--color-text-primary);
  }

  &:focus {
    outline: none; /* Убирает обводку при фокусе */
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  min-height: 18px; /* Зарезервировать место под ошибку */
`;

const LogInButton = styled.button`
  margin-top: 25px;
  width: 120px;
  height: 80px;
  background-color: transparent;
  color: var(--color-text-primary);
  transform: rotate(-15deg);
  border: 2px solid var(--color-accent-text);
  border-radius: 50%;

  &:hover {
    background-color: var(--color-hover-action);
  }
`;

const ButtonTextSpan = styled.p`
  font-size: 20px;
  transform: rotate(15deg);
`;

const FormTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

const FormTypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
`;

const FormTypeSpan = styled.span`
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 10%;
`;

const SignUpButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-primary);
  background-color: transparent;
  border: none;
`;

const ArrowIcon = styled.img``;

function LoginForm({ handleSignUp }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Вход</FormTitle>
        <InputsContainer>
          <div>
            <FormInput
              id="email"
              type="email"
              placeholder="E-MAIL"
              {...register("email", {
                required: "Это поле обязательно",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Введите корректный e-mail",
                },
              })}
            />
            <ErrorText>{errors.email?.message || " "}</ErrorText>
          </div>

          <div>
            <FormInput
              id="password"
              type="password"
              placeholder="ПАРОЛЬ"
              {...register("password", {
                required: "Это поле обязательно",
                minLength: {
                  value: 6,
                  message: "Пароль должен содержать минимум 6 символов",
                },
              })}
            />
            <ErrorText>{errors.password?.message || " "}</ErrorText>
          </div>
        </InputsContainer>

        <LogInButton type="submit">
          <ButtonTextSpan>Войти</ButtonTextSpan>
        </LogInButton>
      </form>

      <FormTypeContainer>
        <FormTypeSpan>Нет аккаунта?</FormTypeSpan>
        <SignUpButton onClick={handleSignUp}>
          <FormTypeSpan>Регистрация</FormTypeSpan>
          <ArrowIcon src={arrow} />
        </SignUpButton>
      </FormTypeContainer>
    </>
  );
}

export default LoginForm;
