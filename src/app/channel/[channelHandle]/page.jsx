'use client';
import { Button } from '@/components/ui/button';
import { Context } from '@/context/AppContext';
import {
  fetchChannelHome,
  fetchChannelPlaylist,
  fetchChannelShorts,
} from '@/lib/api';
import React, { useContext, useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Card from '@/components/Card';
import Shorts from '@/components/Shorts';
import Playlist from '@/components/Playlist';

const ChannelHandle = ({ params }) => {
  const context = useContext(Context);
  const [data, setData] = React.useState(null);
  const [shorts, setShorts] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        context.setProgress(30);
        const fetchedData = await fetchChannelHome(params.channelHandle);
        setData(fetchedData);
        context.setProgress(100);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchShorts = async () => {
      try {
        context.setProgress(30);
        const fetchedData = await fetchChannelShorts(params.channelHandle);
        setShorts(fetchedData);
        context.setProgress(100);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchPlaylist = async () => {
      try {
        context.setProgress(30);
        const fetchedData = await fetchChannelPlaylist(params.channelHandle);
        setPlaylists(fetchedData);
        context.setProgress(100);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    fetchShorts();
    fetchPlaylist();
  }, []);
  return (
    <div
      className={`${
        context.toggles === true ? 'w-[90%]' : 'w-[85%]'
      } text-white pt-[75px] max-h-screen  overflow-y-auto`}
    >
      <div className='w-full ml-5 overflow-hidden rounded-lg'>
        <img
          className='h-44 w-[90%]'
          src={`${data?.meta?.banner?.[0]?.url}`}
          alt='channel banner'
        />
      </div>
      <div className='my-3 flex gap-4 items-center'>
        <div>
          <img
            className='h-40 w-40 rounded-full'
            src={data?.meta?.avatar?.[0]?.url}
            alt='avatar'
          />
        </div>
        <div>
          <h1 className=' text-2xl font-extrabold mb-2'>{data?.meta?.title}</h1>
          <div className=' flex gap-2 mb-2 text-white/60'>
            <p>{data?.meta?.channelHandle}</p>
            <p>{data?.meta?.subscriberCountText} subscribers</p>
            <p>{data?.meta?.videosCountText}</p>
          </div>
          <p className='mb-2 text-white/60'>{data?.meta?.description}</p>
          <Button variant='secondary' size='sm'>
            Subscribe
          </Button>
        </div>
      </div>
      <div className=' mt-5 mb-5'>
        <Tabs
          defaultValue='Home'
          className='w-full border-b-[1px] border-white/65'
        >
          <TabsList>
            {data?.meta?.tabs?.map((tab, i) => (
              <TabsTrigger
                key={i}
                value={tab}
                className='mr-3 hover:border-b-2 hover:border-white/65'
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={'Home'} className='flex flex-wrap gap-3'>
            {' '}
            {data?.data?.map((val, i) => {
              return (
                val.type === 'video_listing' &&
                val?.data?.map((val, i) => {
                  return (
                    <>
                      <Card key={i} data={val} />
                    </>
                  );
                })
              );
            })}
          </TabsContent>
          <TabsContent value={'Videos'} className='flex flex-wrap gap-3'>
            {' '}
            {data?.data?.map((val, i) => {
              return (
                val.type === 'video_listing' &&
                val?.data?.map((val, i) => {
                  return (
                    <>
                      <Card key={i} data={val} />
                    </>
                  );
                })
              );
            })}
          </TabsContent>
          <TabsContent value={'Shorts'} className='flex px-5 flex-wrap gap-3'>
            {shorts?.data?.map((val, i) => {
              if (val.type === 'shorts') {
                return <Shorts key={i} val={val} />;
              }
              return null;
            })}
          </TabsContent>
          <TabsContent
            value={'Playlists'}
            className='flex px-5 flex-wrap gap-3'
          >
            {playlists?.data?.map((val, i) => {
              if (val.type === 'playlist') {
                return <Playlist key={i} val={val} />;
              }
              return null;
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChannelHandle;
