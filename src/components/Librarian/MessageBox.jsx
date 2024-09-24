import { useState, useEffect, useRef, useCallback } from 'react';

import photo from '@/assets/profile.png';
import more from '@/assets/vertical_dots.svg';
import attach from '@/assets/attach.svg';
import send from '@/assets/send.svg';
import smily from '@/assets/smily.svg';
import upload from '@/assets/upload.svg';

import { ProfilePhoto } from '@/components/Librarian/Profilephoto/ProfilePhoto';
import EmojiPicker from 'emoji-picker-react';
import MessageBubble from '@/components/Librarian/MessageBubble';
import sampleMessage from '@/components/Librarian/data/image_send';
import { groupMessagesByDate } from '@/components/Librarian/groupMessagesByDate';
import useClickOutside from '@/components/Librarian/useClickOutside';

const MessageBox = () => {
  const [open, setOpen] = useState(false);
  const [openAttach, setOpenAttach] = useState(false);
  const [inputStr, setInputStr] = useState('');
  const [messages, setMessages] = useState(sampleMessage);
  const messageBoxRef = useRef(null);

  // Hook to close emoji picker when clicking outside
  const emojiPickerRef = useClickOutside(open, () => {
    setOpen(false);
  });

  // Hook to close attachment options when clicking outside
  const attachmentRef = useClickOutside(openAttach, () => {
    setOpenAttach(false);
  });

  const handleEmojiPicker = () => {
    setOpen(!open);
  };

  const handleAttachment = () => {
    setOpenAttach(!openAttach);
  };

  const onEmojiClick = (emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
  };

  const handleSendMessage = (type = 'text', content = inputStr) => {
    if (content.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        type: type,
        content: content,
        sentByMe: true,
        timestamp: new Date().toISOString(),
        sender: 'Me',
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputStr('');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileType = file.type.startsWith('image/')
          ? 'image'
          : file.type.startsWith('video/')
            ? 'video'
            : 'file';
        handleSendMessage(fileType, {
          name: file.name,
          data: reader.result,
          type: file.type,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  // useEffect(() => {
  //   if (messageBoxRef.current) {
  //     messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
  //   }
  // }, [messages]);

  const scrollToBottom = useCallback(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, []);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Scroll to bottom on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);

    // Optional: Use MutationObserver to detect when content has finished loading
    const observer = new MutationObserver(() => {
      scrollToBottom();
    });

    if (messageBoxRef.current) {
      observer.observe(messageBoxRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [scrollToBottom]);

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 select-none items-center justify-between bg-bg-secondary px-5 py-2">
        <div className="flex items-center gap-3 text-lg font-medium">
          <ProfilePhoto img={photo} className={'h-10 w-10'} />
          Manuprasad
        </div>
        <img
          className="w-7 cursor-pointer"
          src={more}
          alt="More options"
          draggable="false"
        />
      </div>

      <div
        className="flex h-full flex-col gap-2 overflow-y-scroll px-4 py-2"
        ref={messageBoxRef}
        style={{ scrollbarWidth: 'none' }}
      >
        {Object.keys(groupedMessages).map((date) => (
          <div key={date}>
            <div className="my-2 text-center text-xs text-text-secondary select-none">
              {date}
            </div>
            {groupedMessages[date].map((message) => (
              <MessageBubble
                key={message.id}
                message={message.content}
                type={message.type}
                isSentByMe={message.sentByMe}
                timestamp={message.timestamp}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="relative flex h-16 w-full items-center gap-3 justify-self-end rounded-2xl border-4 border-bg-primary bg-bg-secondary px-5 py-1">
        <div
          className="relative cursor-pointer rounded-full p-2 transition-all delay-0 ease-in-out hover:bg-secondary"
          ref={emojiPickerRef}
          onClick={handleEmojiPicker}
        >
          <img
            className="w-6 select-none"
            src={smily}
            alt="Emoji"
            draggable="false"
          />
          {open && (
            <div
              className="absolute bottom-full left-0 mb-2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>

        <div
          className="cursor-pointer rounded-full p-2 outline-2 transition-all delay-0 ease-in-out hover:bg-secondary"
          onClick={handleAttachment}
          ref={attachmentRef}
        >
          <img
            src={attach}
            className="w-6 select-none"
            draggable="false"
            alt="Attach"
          />

          {openAttach && (
            <div
              className="absolute bottom-full left-5 h-24 rounded-t-3xl bg-bg-secondary p-2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <label
                htmlFor="uploadfile"
                className="flex h-full w-full cursor-pointer flex-row items-center gap-2 rounded-t-3xl border-2 border-dashed border-border-primary bg-bg-primary p-6 text-text-hard"
              >
                <img src={upload} className="w-8" alt="upload button" />
                <span className="text-sm">upload an attachment</span>
              </label>
              <input
                type="file"
                id="uploadfile"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          )}
        </div>

        <textarea
          className="h-12 w-full select-none resize-none p-3 text-base outline-none placeholder:text-base placeholder:text-text-secondary"
          placeholder="Your Message!"
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ scrollbarWidth: 'none' }}
          rows={3}
        />
        <div
          className="cursor-pointer rounded-lg px-5 py-2 transition-all delay-0 ease-in-out hover:bg-secondary"
          onClick={() => handleSendMessage('text', inputStr)}
        >
          <img
            src={send}
            className="w-8 select-none"
            draggable="false"
            alt="Send"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
