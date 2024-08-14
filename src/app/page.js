'use client';
import Card from '@/components/Card';
import { Context } from '@/context/AppContext';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

export default function Home() {
  const context = useContext(Context);
  const [data, setData] = useState([]);
  useEffect(() => {
    context.data !== null && setData(context.data);
  }, [context.data]);
  return (
    <main
      className={`${
        context.toggles === true ? 'w-[90%]' : 'w-[85%]'
      } text-white pt-[75px] max-h-screen  overflow-y-auto`}
    >
      <div className='w-full flex justify-around gap-1 pl-2 flex-wrap'>
        {/* <Card data={1} /> */}
        {data.length > 0 &&
          data?.map((data, i) => <Card key={i} data={data} />)}
      </div>
    </main>
  );
}
