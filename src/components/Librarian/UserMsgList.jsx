import { useState, useRef } from 'react';

import UserMsgListItem from '@/components/Librarian/UserMsgListItem/UserMsgListItem';
// import { NewGroupForm } from '../NewGroupForm/NewGroupForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/Librarian/dialog';




const UserMsgList = () => {
  const inputRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const users = [
    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },
    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },
    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },

    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },
    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
  ];

  return (
    <div className="min-w-60 flex flex-col justify-start items-center bg-[white]">
        <div className="h-[60px] w-full flex justify-center items-center font-bold">Chat</div>
          <div
            className="flex h-full w-full flex-col overflow-y-scroll rounded-t-2xl bg-bg-secondary"
            style={{ scrollbarWidth: 'none' }}
          >
            {users.map((user, index) => (
              <UserMsgListItem
                key={index}
                user={user}
                isActive={activeIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
    </div>
  );
};

export default UserMsgList;
