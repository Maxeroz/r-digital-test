/* eslint-disable react/prop-types */

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import GlobalStyle from "../GlobalStyles";

const ModalContext = createContext();

function Modal({ children }) {
  const [id, setId] = useState("");

  const open = (newId) => setId(newId);
  const close = () => setId("");

  return (
    <ModalContext.Provider value={{ open, close, id }}>
      {children}
    </ModalContext.Provider>
  );
}

function OpenButton({ children, modalId }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(modalId),
  });
}

function CloseButton({ children }) {
  const { close } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: close,
  });
}

function Window({ children, name }) {
  const { id } = useContext(ModalContext);

  // Управляем классом `no-scroll` на `body` в зависимости от состояния модального окна
  useEffect(() => {
    if (name === id) {
      document.body.classList.add("no-scroll");
    }

    // Очистка эффекта при размонтировании
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [name, id]);

  // Проверяем, совпадает ли текущий id с name
  if (name !== id) {
    return null; // Не рендерим ничего, если id не совпадает
  }

  // Рендерим children, если id совпадает
  return (
    <>
      <GlobalStyle />
      {createPortal(children, document.body)}
    </>
  );
}

Modal.OpenButton = OpenButton;
Modal.CloseButton = CloseButton;
Modal.Window = Window;

export default Modal;
