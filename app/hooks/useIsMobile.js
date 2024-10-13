// hooks/useIsMobile.js
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Викликати функцію при завантаженні компонента
    handleResize();

    // Додавання слухача подій зміни розміру вікна
    window.addEventListener("resize", handleResize);

    // Видалення слухача подій при демонтажі компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
