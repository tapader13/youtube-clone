'use client';
import React, { useContext } from 'react';
import { sidebarItems } from '@/lib/data';
import { Button } from './ui/button';
import { Context } from '@/context/AppContext';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  const context = useContext(Context);
  const handleButton = (name) => {
    context.setSelectCatagory(name);
    router.push('/');
  };
  console.log(context.toggles);

  return (
    <div
      className={` pb-5  flex gap-2 flex-col pt-[75px] bg-slate-800/15 max-h-screen  overflow-y-auto ${
        context.toggles === true ? 'w-[10%]' : 'w-[15%]'
      }  `}
    >
      {sidebarItems?.map((item, i) => (
        <Button
          key={i}
          onClick={() => handleButton(item.name)}
          className={`flex bg-transparent w-[90%] ${
            context.toggles === true
              ? 'flex-col items-center gap-1'
              : 'flex-row gap-3'
          } justify-start   text-xl`}
        >
          <span>{item.icon}</span> {item.name}
        </Button>
      ))}
    </div>
  );
};

export default Sidebar;
