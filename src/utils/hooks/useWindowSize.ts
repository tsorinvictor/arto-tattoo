import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () =>
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        }),
      );

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      return () =>
        window.removeEventListener("resize", () =>
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
        );
    }
  }, []);

  return windowSize;
};
