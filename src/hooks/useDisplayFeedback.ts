import { useState, ChangeEvent } from 'react';

type UseDisplayFeedback = () => {
  inputValue: string;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  feedbackList: string[];
};

export const useDisplayFeedback: UseDisplayFeedback = () => {
  const [inputValue, setInputValue] = useState('');

  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      return;
    }
    setFeedbackList((prevState) => [...prevState, inputValue]);
    setInputValue('');
  };

  return { inputValue, handleInputChange, handleSubmit, feedbackList };
};
