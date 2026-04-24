import { useState, useEffect } from 'react';

export function useFormValidation(duration: number = 10000) {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [error, duration]);

  const validateEmail = (email: string) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return regex.test(email);
  };

  return { error, setError, validateEmail };
}
