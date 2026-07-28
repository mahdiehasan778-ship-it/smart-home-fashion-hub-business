// src/hooks/useCountdown.js
import { useEffect, useState } from "react";

/**
 * Ticks down to a target ISO date/time string.
 * Returns { hours, minutes, seconds, isExpired } as zero-padded numbers.
 */
export function useCountdown(targetIso) {
  const calculate = () => {
    const diff = new Date(targetIso).getTime() - Date.now();
    if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, isExpired: true };

    const totalSeconds = Math.floor(diff / 1000);
    return {
      hours: Math.floor(totalSeconds / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculate);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIso]);

  return timeLeft;
}

export const pad = (n) => String(n).padStart(2, "0");