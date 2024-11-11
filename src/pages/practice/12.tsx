import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useTimer } from '@/hooks/useTimer';

const Page: NextPage = () => {
  const { seconds, handleClickToggle, isActive, handleClickReset } = useTimer();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">時間：{seconds}びょう</h3>
          <div className="mt-4 flex justify-center gap-x-2">
            <Button
              onClick={handleClickToggle}
              label={!isActive ? '開始' : '停止'}
              variant="primary"
            />
            <Button onClick={handleClickReset} label="リセット" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
