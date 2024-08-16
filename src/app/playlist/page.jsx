'use client';

import PlayListSideBar from '@/components/PlayListSideBar';
import { Button } from '@/components/ui/button';
import { Context } from '@/context/AppContext';
import { fetchChannelPlaylistVideo } from '@/lib/api';
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

const PlaylistView = () => {
  const context = useContext(Context);
  const params = useSearchParams();
  const query = params.get('list');
  console.log(query);
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        context.setProgress(30);
        const fetchedData = await fetchChannelPlaylistVideo(query);
        setPlaylists(fetchedData);
        context.setProgress(100);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPlaylist();
  }, [query]);
  console.log(playlists, 'play');
  return (
    <div
      className={`${
        context.toggles === true ? 'w-[90%]' : 'w-[85%]'
      } text-white pt-[75px] max-h-screen  overflow-y-auto`}
    >
      <div className=' grid grid-cols-10'>
        <div className='col-span-3 bg-slate-950 w-full h-auto rounded-lg p-5'>
          <img
            className=' rounded-lg'
            src={playlists?.meta?.thumbnail?.[0]?.url}
            alt='channel_thumbnail'
          />
          <h1 className='my-5 text-2xl font-extrabold'>
            {playlists?.meta?.title}
          </h1>
          <p className='text-xl font-bold'>{playlists?.meta?.channelTitle}</p>
          <div className='flex gap-3 text-white/60 text-xs'>
            <p>{playlists?.meta?.videoCountText}</p>
            <p>{playlists?.meta?.viewCountText}</p>
            <p>{playlists?.meta?.lastUpdated}</p>
          </div>
          <div className=' flex gap-5 my-3'>
            <Button>Play All</Button>
            <Button>Shuffle</Button>
          </div>
          <p>{playlists?.meta?.description}</p>
        </div>
        <div className='col-span-7 max-h-screen overflow-y-auto'>
          {playlists?.data?.map((val, i) => (
            <PlayListSideBar query={query} val={val} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
