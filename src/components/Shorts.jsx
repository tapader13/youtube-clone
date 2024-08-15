import React from 'react';

const Shorts = ({ val }) => {
  console.log(val, 'sh');
  return (
    <div className='w-[19%] h-auto'>
      <div>
        <img src={val?.thumbnail?.[0]?.url} alt='shorts_img' />
      </div>
      <h1>
        {val.title.slice(0, 40)}
        {val.title > val.title.slice(0, 40) && '...'}
      </h1>
      <p className='text-white/60'>{val.viewCountText}</p>
    </div>
  );
};

export default Shorts;
