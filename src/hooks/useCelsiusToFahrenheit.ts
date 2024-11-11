import { useState, ChangeEvent } from 'react';

type UseCelsiusToFahrenheit = () => {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  convertFromCelsiusToFahrenheit: (celsius: number) => number;
  celsius: number;
};

export const useCelsiusToFahrenheit: UseCelsiusToFahrenheit = () => {
  const [celsius, setCelsius] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCelsius(Number(e.target.value));
  };

  const convertFromCelsiusToFahrenheit = (celsius: number) => {
    return (celsius * 9) / 5 + 32;
  };

  return { handleChange, convertFromCelsiusToFahrenheit, celsius };
};
