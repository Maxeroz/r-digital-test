/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import styled, { keyframes } from "styled-components";
import LoginForm from "./LoginForm";
import { useAuthContext } from "../context/AuthContext";
import useClickOutside from "../hooks/useOutsideClick";

// Анимация для выезда формы с правого края экрана
const slideIn = keyframes`
  from {
    transform: translateX(100%);  /* Начальное положение за экраном */
  }
  to {
    transform: translateX(0);  /* Конечное положение на месте */
  }
`;

// Анимация для скрытия формы
const slideOut = keyframes`
  from {
    transform: translateX(0);  /* На месте */
  }
  to {
    transform: translateX(100%);  /* За экраном */
  }
`;

const StyledFormContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 125px;
  right: 61px;
  width: 605px;
  height: 516px;
  background: rgba(51, 32, 101, 0.18);
  backdrop-filter: blur(18px);
  border-radius: 30px;
  padding: 48px;
  z-index: 999;
  animation: ${(props) => (props.isClosing ? slideOut : slideIn)} 0.3s ease-out
    forwards;
`;

function UserForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Состояние для отслеживания закрытия

  const { isOpenForm, handleCloseForm } = useAuthContext();

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const ref = useClickOutside(() => {
    setIsClosing(true); // Запускаем анимацию закрытия
  });

  useEffect(() => {
    if (isClosing) {
      // Ждем завершения анимации перед закрытием формы
      const timer = setTimeout(() => {
        handleCloseForm();
        setIsClosing(false); // Сбрасываем состояние закрытия
      }, 300); // Длительность анимации в миллисекундах

      return () => clearTimeout(timer);
    }
  }, [isClosing, handleCloseForm]);

  // Если форма закрывается, то продолжаем рендерить контейнер, пока анимация не завершится
  if (isOpenForm || isClosing) {
    return (
      <StyledFormContainer ref={ref} isClosing={isClosing}>
        {isSignUp ? <SignUpForm /> : <LoginForm handleSignUp={handleSignUp} />}
      </StyledFormContainer>
    );
  }

  return null; // Не рендерим ничего, если форма закрыта
}

export default UserForm;
