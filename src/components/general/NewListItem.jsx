import React from 'react';
import cross_icon from '@/assets/cross.svg';

const NewListItem = ({ lable, icon }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-md border-2 border-bg-secondary bg-bg-secondary">
      <div className="flex items-center gap-2">
        <img
          src={icon}
          alt="profile"
          className="w-8 select-none rounded-sm"
          draggable="false"
        />
        <div className="text-sm font-normal text-text-hard">{lable}</div>
      </div>
      <div className="cursor-pointer">
        <img src={cross_icon} className="w-5 select-none" alt="cross" />
      </div>
    </div>
  );
};

export default NewListItem;
