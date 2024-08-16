import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Playlist = ({ val }) => {
  return (
    <div className=' text-white w-[18%] group cursor-pointer'>
      <div className='relative w-full'>
        <img
          className='h-auto w-full'
          src={val?.thumbnail?.[0].url}
          alt='playlist_img'
        />
        <Link
          href={`/watch?videoId=${val?.videoId}&pid=${val?.playlistId}&index=1`}
          className='absolute inset-0 flex items-center justify-center bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        >
          Play All
        </Link>
        <span className=' absolute right-1 bottom-2 p-1 bg-black'>
          {val?.videoCount} videos
        </span>
      </div>
      <h2 className='text-sx mt-1 '>{val?.title}</h2>
      <Link href={`/playlist?list=${val?.playlistId}`}>
        <Button size='md' className='text-white/60 mt-1 bg-transparent'>
          View full playlist
        </Button>
      </Link>
    </div>
  );
};

export default Playlist;
