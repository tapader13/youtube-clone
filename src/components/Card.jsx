import { abbreviateNumber } from 'js-abbreviation-number';
import Link from 'next/link';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({ data }) => {
  return (
    data.type === 'video' && (
      <div className='w-[32%] mb-2 cursor-pointer group transition-all duration-200 ease-in-out overflow-hidden'>
        <Link href={`video/details/${data?.videoId}`}>
          {' '}
          <div className='relative h-52 text-white group-hover:scale-105 transition-transform duration-300 ease-in-out w-full'>
            <LazyLoadImage
              className=' absolute top-0 left-0 h-full w-full object-cover'
              alt={data?.title}
              effect='black-and-white'
              src={data?.thumbnail[0]?.url}
            />
            <span className='absolute right-1 bottom-1 p-2 bg-slate-800/60 text-white'>
              {data?.lengthText}
            </span>
          </div>
          <div className='flex items-start gap-2 mt-2'>
            <div className='h-10 w-12 rounded-full overflow-hidden'>
              <img
                className='h-full w-full'
                src={data?.channelThumbnail?.[0]?.url || ''}
                alt={data?.description}
              />
            </div>
            <div>
              <h2>{data?.title}</h2>
              <h1 className='mt-1.5 text-xl text-white/60'>
                {data?.channelTitle}
              </h1>
              <div className='mt-1 flex gap-2 items-center'>
                <h6 className='text-white/60'>
                  {abbreviateNumber(data?.viewCount, 2)} views
                </h6>
                <h6 className='text-white/60'>
                  <span className='text-white/60'>.</span>
                  {data?.publishedTimeText}
                </h6>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  );
};

export default Card;
