import { NextPage } from 'next';

import { useTrafficLight } from '@/hooks/useTrafficLight';

const Page: NextPage = () => {
  const { light } = useTrafficLight();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center gap-x-2">
        <div
          className={`size-12 rounded-full  ${light === 'red' ? 'bg-red-600' : 'bg-gray-700'}`}
        ></div>
        <div
          className={`size-12 rounded-full  ${light === 'yellow' ? 'bg-yellow-600' : 'bg-gray-700'}`}
        ></div>
        <div
          className={`size-12 rounded-full  ${light === 'green' ? 'bg-green-600' : 'bg-gray-700'}`}
        ></div>
      </div>
    </div>
  );
};

export default Page;
