'use client';

import { Button } from '@/components/ui/button';
import { Context } from '@/context/AppContext';
import {
  fetchDataForVideoDtls,
  fetchRelatedVideo,
  fetchannelAbout,
} from '@/lib/api';
import { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { FaShare, FaDownload } from 'react-icons/fa';
import { abbreviateNumber } from 'js-abbreviation-number';
import moment from 'moment';
import Card from '@/components/Card';
import Link from 'next/link';
const VideoDetails = ({ params }) => {
  const context = useContext(Context);
  const [data, setData] = useState([]);
  const [aboutChannel, setAboutChannel] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        context.setProgress(30);
        const fetchedData = await fetchDataForVideoDtls(params.id);

        setData(fetchedData);
        if (fetchedData?.channelId) {
          const aboutChannelData = await fetchannelAbout(fetchedData.channelId);
          setAboutChannel(aboutChannelData);
        }
        context.setProgress(100);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchRelatedData = async () => {
      try {
        const fetchedData = await fetchRelatedVideo(params.id);

        setRelatedVideos(fetchedData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchRelatedData();
    fetchData();
  }, [params.id]);

  const description = data?.description || '';
  const preview = description.slice(0, 150);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <div
      className={`${
        context.toggles === true ? 'w-[90%]' : 'w-[85%]'
      } text-white pt-[75px] max-h-screen  overflow-y-auto`}
    >
      <div className=' w-full grid grid-cols-10 gap-5'>
        <div className='col-span-6'>
          <ReactPlayer
            controls
            className='rounded-lg'
            width={'100%'}
            url={`https://www.youtube.com/watch?v=${params.id}`}
          />
          <h1 className=' text-xl text-white my-2'>{data?.title}</h1>
          <div className=' mb-2 flex justify-between cursor-pointer'>
            <div className=' flex items-center gap-2'>
              <Link
                href={`/channel/${aboutChannel?.channelId}`}
                className='flex items-center gap-2'
              >
                {' '}
                <img
                  className=' h-11 w-11 rounded-full'
                  src={aboutChannel?.avatar?.[0].url}
                  alt='channelImg'
                />
                <div>
                  <h2>{data?.channelTitle}</h2>
                  <span className=' text-white/60'>
                    {aboutChannel?.subscriberCountText} subscribers
                  </span>
                </div>
              </Link>
              <Button variant='secondary' size='sm'>
                Subscribe
              </Button>
            </div>
            <div className=' flex gap-2'>
              <Button className='flex items-center'>
                <span className='mr-1 text-xl'>
                  <FaShare />
                </span>{' '}
                Share
              </Button>
              <Button className='flex items-center'>
                <span className='mr-1 text-xl'>
                  <FaDownload />
                </span>{' '}
                Download
              </Button>
            </div>
          </div>
          <div className=' mt-3 w-full h-auto bg-slate-900 p-2'>
            <div className=' flex gap-3 text-white/60'>
              <p>{abbreviateNumber(data?.viewCount)} views</p>
              <p>{moment(data?.publishDate).format('MMM Do YY')}</p>
            </div>
            {expand === true ? description : preview}
            <Button className='w-24 ml-2 underline' onClick={handleExpand}>
              {expand ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        </div>
        <div className='col-span-4 flex flex-col mr-3'>
          {relatedVideos.length > 0 &&
            relatedVideos?.map((data, i) => (
              <Card key={i} identity='related' data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
