import { useRef, useEffect, useCallback } from "react";

function useClickOutside(callback, isVisible) {
  const ref = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      // Проверяем, что клик произошел вне элемента и корзина открыта
      if (ref.current && !ref.current.contains(event.target) && isVisible) {
        callback();
      }
    },
    [callback, isVisible]
  );

  useEffect(() => {
    // Добавляем обработчик кликов на фазе захвата
    document.addEventListener("mousedown", handleClickOutside, true);

    // Удаляем обработчик кликов при размонтировании
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return ref;
}

export default useClickOutside;
