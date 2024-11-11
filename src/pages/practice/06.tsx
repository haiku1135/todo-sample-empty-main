import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useDisplayFeedback } from '@/hooks/useDisplayFeedback';

const Page: NextPage = () => {
  const { inputValue, handleInputChange, handleSubmit, feedbackList } = useDisplayFeedback();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <textarea
            className="rounded-sm border px-3 py-2"
            placeholder="フィードバックを入力してください"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="mt-4 flex justify-center">
            <Button onClick={handleSubmit} label="送信する" variant="primary" />
          </div>
          <div className="mt-2">
            <ul>
              {feedbackList.map((feedback, index) => {
                return <li key={index}>{feedback}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
