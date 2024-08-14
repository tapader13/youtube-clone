'use client';
import { fetchDataFromSrcNew } from '@/lib/api';
import { useRouter } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
export const Context = createContext();

const AppContext = (props) => {
  const [selectCatagory, setSelectCatagory] = useState('new');
  const [endPoint, setEndpoint] = useState('/search?query=');
  const [data, setData] = useState([]);
  const [toggles, setToggles] = useState(false);
  const [progress, setProgress] = useState(30);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setProgress(30);
        const api = `${endPoint}${selectCatagory}`;
        const fetchedData = await fetchDataFromSrcNew(api);
        setData(fetchedData);
        setProgress(100);
        router.push('/');
        // console.log(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [endPoint, selectCatagory]);

  const value = {
    selectCatagory,
    setSelectCatagory,
    endPoint,
    setEndpoint,
    data,
    toggles,
    setToggles,
    progress,
    setProgress,
  };

  return (
    <Context.Provider value={value}>
      {' '}
      <LoadingBar color='#f11946' progress={progress} />
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;
