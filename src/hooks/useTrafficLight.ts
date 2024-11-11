import { useEffect, useState } from 'react';

const CYCLE = { red: 'green', green: 'yellow', yellow: 'red' } as const;

type UseTrafficLight = () => {
  light: keyof typeof CYCLE;
};

export const useTrafficLight: UseTrafficLight = () => {
  const [light, setLight] = useState<keyof typeof CYCLE>('red');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLight(CYCLE[light]);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [light]);

  return { light };
};
