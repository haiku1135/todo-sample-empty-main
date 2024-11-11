import { useState } from 'react';

type UseChangeBgColor = () => {
  currentColorIndex: number;
  changeColor: () => void;
};

export const COLORS = ['lightblue', 'lightgreen', 'lightpink', 'lavender', 'wheat'];

export const useChangeBgColor: UseChangeBgColor = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    setCurrentColorIndex((prevState) => (prevState + 1) % COLORS.length);
  };

  return { currentColorIndex, changeColor };
};
