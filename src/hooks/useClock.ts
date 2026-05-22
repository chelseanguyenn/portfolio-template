import { useState, useEffect } from 'react';

export const useClock = (language: 'en' | 'vi' = 'en') => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Set initial time
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString(
        language === 'vi' ? 'vi-VN' : 'en-US',
        { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }
      );
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [language]);

  return time;
};
