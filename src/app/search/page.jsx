'use client';
import Card from '@/components/Card';
import { Context } from '@/context/AppContext';
import { fetchSearchData } from '@/lib/api';
import React, { useContext, useEffect, useState } from 'react';

const SearchVIdeo = () => {
  const [data, setData] = useState([]);
  const context = useContext(Context);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const query = params.get('query');

      if (query) {
        const fetchData = async () => {
          try {
            context.setProgress(30);
            const fetchedData = await fetchSearchData(query);
            setData(fetchedData.data);
            context.setProgress(100);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
      }
    }
  }, []);
  console.log(data, 'srda');
  return (
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
  );
};

export default SearchVIdeo;
