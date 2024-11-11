import { useState } from 'react';

export const QUESTION = 'Reactはどのようなものですか？';
export const CHOICE_LIST = ['ライブラリ', 'フレームワーク', '言語', 'データベース'];
const CORRECT_ANSWER = 'ライブラリ';

type UseQuiz = () => {
  handleChoice: (choice: string) => void;
  userChoice: string;
  handleSubmit: () => void;
  result: string;
};

export const useQuiz: UseQuiz = () => {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');
  const handleChoice = (choice: string) => {
    setUserChoice(choice);
  };

  const handleSubmit = () => {
    if (userChoice === CORRECT_ANSWER) {
      setResult('正解！');
    } else {
      setResult('不正解...');
    }
  };

  return { handleChoice, userChoice, handleSubmit, result };
};
