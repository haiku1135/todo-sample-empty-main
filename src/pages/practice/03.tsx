import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useHidden } from '@/hooks/useHidden';

const Page: NextPage = () => {
  const { isHidden, onClickIndicate, onClickHidden } = useHidden();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      {!isHidden && <h2 className="text-center text-4xl font-bold">こんにちは</h2>}
      <div className="mt-10 flex justify-center gap-4">
        <Button onClick={onClickIndicate} label="表示" variant="primary" />
        <Button onClick={onClickHidden} label="非表示" variant="primary" />
      </div>
    </div>
  );
};

export default Page;
