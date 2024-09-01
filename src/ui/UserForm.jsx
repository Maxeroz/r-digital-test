import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ReactDOM from "react-dom"; // Импортируем ReactDOM для создания портала
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { useAuthContext } from "../context/AuthContext";
import useClickOutside from "../hooks/useOutsideClick";
import useEscapeKey from "../hooks/useEscapeKey";

// Анимация появления формы
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Анимация исчезновения формы
const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const StyledFormContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 125px;
  right: 61px;
  width: 605px;
  height: ${(props) => (props.isSignUp ? "604px" : "516px")};
  background: rgba(51, 32, 101, 0.18);
  backdrop-filter: blur(18px);
  border-radius: 30px;
  padding: 48px;
  z-index: 999;
  animation: ${(props) => (props.isClosing ? slideOut : slideIn)} 0.3s ease-out
    forwards;
  overflow: hidden;
`;

function UserForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // Для отслеживания анимации переключения
  const [isClosing, setIsClosing] = useState(false); // Для отслеживания закрытия формы

  const { isOpenForm, handleCloseForm } = useAuthContext();

  const handleSignUp = () => {
    setIsTransitioning(true); // Начало анимации ухода
    setTimeout(() => {
      setIsSignUp(true); // Переключение на SignUpForm
      setIsTransitioning(false); // Завершение анимации
    }, 300); // Длительность анимации соответствует `slideOut`
  };

  const handleLogin = () => {
    setIsTransitioning(true); // Начало анимации ухода
    setTimeout(() => {
      setIsSignUp(false); // Переключение на LoginForm
      setIsTransitioning(false); // Завершение анимации
    }, 300); // Длительность анимации соответствует `slideOut`
  };

  const ref = useClickOutside(() => {
    setIsClosing(true);
    setIsSignUp(false);
  });

  useEscapeKey(() => {
    setIsClosing(true);
  });

  const handleCloseFormAnimated = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        handleCloseForm();
        setIsClosing(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isClosing, handleCloseForm]);

  if (isOpenForm || isClosing) {
    return ReactDOM.createPortal(
      <StyledFormContainer
        ref={ref}
        isClosing={isClosing || isTransitioning}
        isSignUp={isSignUp}
      >
        {!isTransitioning &&
          (isSignUp ? (
            <SignUpForm
              handleLogin={handleLogin}
              onCloseForm={handleCloseFormAnimated}
            />
          ) : (
            <LoginForm
              handleSignUp={handleSignUp}
              onCloseForm={handleCloseFormAnimated}
            />
          ))}
      </StyledFormContainer>,
      document.body // Рендерим контейнер в body
    );
  }

  return null;
}

export default UserForm;
