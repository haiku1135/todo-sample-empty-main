import { NextPage } from 'next';

import { useDigitalClock } from '@/hooks/useDigitalClock';

const Page: NextPage = () => {
  const { currentTime } = useDigitalClock();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <h3 className="text-center text-2xl">{currentTime.toLocaleTimeString()}</h3>
      </div>
    </div>
  );
};

export default Page;
