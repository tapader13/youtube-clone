'use client';
import Card from '@/components/Card';
import { Context } from '@/context/AppContext';
import { fetchSearchData } from '@/lib/api';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useContext, useEffect, useState } from 'react';

const SearchVIdeo = () => {
  const [data, setData] = useState([]);
  const context = useContext(Context);
  const searchParams = useSearchParams();

  const search = searchParams.get('query');
  useEffect(() => {
    const fetchData = async () => {
      try {
        context.setProgress(30);
        const fetchedData = await fetchSearchData(search);
        setData(fetchedData.data);
        context.setProgress(100);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <Suspense fallback={<div className='text-white pt-[75px]'>Loading...</div>}>
      <div
        className={`${
          context.toggles === true ? 'w-[90%]' : 'w-[85%]'
        } text-white pt-[75px] max-h-screen  overflow-y-auto py-5`}
        suppressHydrationWarning
      >
        {data.length > 0 &&
          data?.map((data, i) => (
            <Card key={i} identity='related' identity2='search' data={data} />
          ))}
      </div>
    </Suspense>
  );
};

export default SearchVIdeo;
