import Link from 'next/link';
import React from 'react';

const PlayListSideBar = ({ val, isActive, query }) => {
  return (
    <Link
      href={`/watch?videoId=${val?.videoId}&pid=${query}&index=${val?.index}`}
    >
      <div
        className={`flex  ${
          isActive === true ? 'bg-white/20' : ''
        } gap-2 cursor-pointer hover:bg-white/20 p-2 rounded-lg`}
      >
        <div className=' flex justify-center items-center'>{val?.index}</div>
        <div className='w-28 h-20 overflow-hidden '>
          <img
            className='w-full h-auto rounded-lg'
            src={val?.thumbnail?.[0]?.url}
            alt='video_img'
          />
        </div>
        <div>
          <h1 className=' text-xl font-semibold'>{val?.title}</h1>
          <div className='flex gap-3 text-white/60 text-xs'>
            <p>{val?.channelTitle}</p>
            <p>{val?.viewCountText}</p>
            <p>{val?.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlayListSideBar;
