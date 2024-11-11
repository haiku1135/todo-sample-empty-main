import { NextPage } from 'next';

import { useQuotesRandom } from '@/hooks/useQuotesRandom';

const Page: NextPage = () => {
  const { currentQuote } = useQuotesRandom();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <h3 className="text-4xl font-bold">{currentQuote}</h3>
      </div>
    </div>
  );
};

export default Page;
