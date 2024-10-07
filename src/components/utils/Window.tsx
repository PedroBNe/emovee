import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
        });
      }, 100); // Espera 200ms antes de atualizar
    };

    handleResize(); // Pega o tamanho da tela na montagem

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
