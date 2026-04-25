import { useState, useEffect } from 'react';

export function useFormValidation(duration: number = 10000) {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (error || isSuccess) {
      const timer = setTimeout(() => {
        setError(null);
        setIsSuccess(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [error, isSuccess, duration]);

  const validateEmail = (email: string) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return regex.test(email);
  };

  const submitData = async (data: any, email: string = "contact@taeb.us") => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setIsSuccess(true);
        return true;
      } else {
        setError("Something went wrong. Please try again.");
        return false;
      }
    } catch (err) {
      setError("Connection error. Please check your internet.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { error, setError, isSubmitting, isSuccess, validateEmail, submitData };
}
