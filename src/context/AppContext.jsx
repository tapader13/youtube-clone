'use client';
import { fetchDataFromSrcNew } from '@/lib/api';
import React, { createContext, useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
export const Context = createContext();

const AppContext = (props) => {
  const [selectCatagory, setSelectCatagory] = useState('new');
  const [endPoint, setEndpoint] = useState('/search?query=');
  const [data, setData] = useState([]);
  const [toggles, setToggles] = useState(false);
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProgress(30);
        const api = `${endPoint}${selectCatagory}`;
        const fetchedData = await fetchDataFromSrcNew(api);
        setData(fetchedData);
        setProgress(100);

        // console.log(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [endPoint, selectCatagory]);
  console.log(data, 'done');
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
