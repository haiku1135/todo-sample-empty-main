import { useState } from 'react';
type UseHidden = () => {
  isHidden: boolean;
  onClickIndicate: () => void;
  onClickHidden: () => void;
};
export const useHidden: UseHidden = () => {
  const [isHidden, setIsHidden] = useState(false);

  const onClickIndicate = () => {
    setIsHidden(false);
  };

  const onClickHidden = () => {
    setIsHidden(true);
  };

  return {
    isHidden,
    onClickIndicate,
    onClickHidden,
  };
};
