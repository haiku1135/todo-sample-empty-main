import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useMemoApp } from '@/hooks/useMemoApp';

const Page: NextPage = () => {
  const { memo, memoList, handleChangeMemo, handleAdd, handleDelete } = useMemoApp();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          {/* 入力フォーム */}
          <div>
            <input
              className="rounded-sm border px-3 py-2 outline-none"
              type="text"
              placeholder="メモを入力"
              value={memo}
              onChange={handleChangeMemo}
            />

            {/* 追加ボタン */}
            <Button onClick={handleAdd} label="追加" variant="primary" className="mt-4" />
          </div>

          {/* memoList */}
          <ul className="mt-4">
            {memoList.map((memo, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b border-gray-100 py-2 text-sm"
              >
                {memo}
                <Button
                  onClick={() => handleDelete(index)}
                  label="削除"
                  variant="error-secondary"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
