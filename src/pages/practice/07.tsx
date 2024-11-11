import { NextPage } from 'next';

import { useCelsiusToFahrenheit } from '@/hooks/useCelsiusToFahrenheit';
const Page: NextPage = () => {
  const { handleChange, convertFromCelsiusToFahrenheit, celsius } = useCelsiusToFahrenheit();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <div className="mb-2 flex items-center gap-x-2">
            <label htmlFor="celsius">摂氏温度</label>
            <input
              className="rounded-md border px-2 py-1 outline-none"
              id="celsius"
              type="number"
              onChange={handleChange}
            />
          </div>
          <p>華氏温度:{convertFromCelsiusToFahrenheit(celsius)}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
