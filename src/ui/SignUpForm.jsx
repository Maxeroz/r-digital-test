/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useForm } from "react-hook-form";
import arrow from "../icons/arrowLogin.svg";
import { HiMiniXMark } from "react-icons/hi2";

const CartHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 53px;
`;

const CartCloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-text-primary);
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  gap: 20px;
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
    outline: none;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  min-height: 18px;
`;

const LogInButton = styled.button`
  margin-top: 25px;
  width: 189px;
  height: 93px;
  background-color: transparent;
  color: var(--color-text-primary);
  transform: rotate(-6deg);
  border: 2px solid var(--color-accent-text);
  border-radius: 50%;

  &:hover {
    background-color: var(--color-hover-action);
  }
`;

const ButtonTextSpan = styled.p`
  font-size: 20px;
  transform: rotate(6deg);
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

  letter-spacing: 2px;
`;

const SignUpButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-primary);
  background-color: transparent;
  border: none;

  &:hover {
    opacity: 0.5;
  }
`;

const ArrowIcon = styled.img`
  transform: scaleX(-1); /* Отражение изображения по горизонтали */
`;

function LoginForm({ handleLogin, onCloseForm }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CartHeader>
          <FormTitle>Регистрация</FormTitle>

          <CartCloseButton
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onCloseForm();
            }}
          >
            <HiMiniXMark size={36} />
          </CartCloseButton>
        </CartHeader>

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

          <div>
            <FormInput
              id="confirmPassword"
              type="password"
              placeholder="ПОВТОРИТЕ ПАРОЛЬ"
              {...register("confirmPassword", {
                required: "Это поле обязательно",
                validate: (value) =>
                  value === password || "Пароли не совпадают",
              })}
            />
            <ErrorText>{errors.confirmPassword?.message || " "}</ErrorText>
          </div>
        </InputsContainer>

        <LogInButton type="submit">
          <ButtonTextSpan>Регистрация</ButtonTextSpan>
        </LogInButton>
      </form>

      <FormTypeContainer>
        <SignUpButton onClick={handleLogin} type="button">
          <ArrowIcon src={arrow} />
          <FormTypeSpan>Вход</FormTypeSpan>
        </SignUpButton>
      </FormTypeContainer>
    </>
  );
}

export default LoginForm;
