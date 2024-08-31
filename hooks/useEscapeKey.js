import { useEffect, useCallback } from "react";

function useEscapeKey(callback) {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        callback(); // Запускаем функцию при нажатии на Escape
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return null;
}

export default useEscapeKey;
