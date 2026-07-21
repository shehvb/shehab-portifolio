import { useState, useEffect, useCallback } from "react";

const CYBERPUNK_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/X01∆§µø¥";

export const useGlitch = (minInterval = 1000, maxInterval = 3000, duration = 400) => {
  const [isGlitched, setIsGlitched] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let durationId: NodeJS.Timeout;

    const scheduleNextGlitch = () => {
      const randomDelay = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
      
      timeoutId = setTimeout(() => {
        setIsGlitched(true);

        durationId = setTimeout(() => {
          setIsGlitched(false);
          scheduleNextGlitch();
        }, duration);
      }, randomDelay);
    };

    scheduleNextGlitch();

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(durationId);
    };
  }, [minInterval, maxInterval, duration]);

  const getScrambledText = useCallback((text: string, ratio = 0.35): string => {
    if (!isGlitched) return text;
    
    return text
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        if (Math.random() < ratio) {
          const randomIndex = Math.floor(Math.random() * CYBERPUNK_CHARS.length);
          return CYBERPUNK_CHARS[randomIndex];
        }
        return char;
      })
      .join("");
  }, [isGlitched]);

  return { isGlitched, getScrambledText };
};
