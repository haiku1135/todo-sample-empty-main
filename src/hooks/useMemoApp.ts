import { useState, ChangeEvent } from 'react';

type UseMemoApp = () => {
  memo: string;
  memoList: string[];
  handleChangeMemo: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
  handleDelete: (index: number) => void;
};

export const useMemoApp: UseMemoApp = () => {
  const [memo, setMemo] = useState('');

  const [memoList, setMemoList] = useState<string[]>([]);

  const handleChangeMemo = (e: ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  };

  const handleAdd = () => {
    if (!memo) {
      return; // 何もしない
    }
    setMemo('');
    setMemoList((prevState) => [...prevState, memo]);
  };

  const handleDelete = (index: number) => {
    setMemoList((prevState) => prevState.filter((_, i) => i !== index));
  };

  return { memo, memoList, handleChangeMemo, handleAdd, handleDelete };
};
