import './UserMsgListItem.css';
import photo from '@/assets/profile.png';
import { ProfilePhoto } from '@/components/Librarian/Profilephoto/ProfilePhoto';

const UserMsgListItem = ({ user, isActive, onClick }) => {
  return (
    <div
      className={`usermsglist-item flex select-none items-center justify-between p-2 ${
        isActive ? 'clickedmsg' : ''
      }`}
      onClick={onClick}
    >
      <div className="user-msg-details flex items-center gap-3">
        <ProfilePhoto img={photo} className={'h-10 w-10'} />
        <div className="user-msg-name flex flex-col">
          <div className="user-name min-w-0 truncate">{user.name}</div>
          <div className="user-final-msg h-5 flex-nowrap overflow-hidden truncate">
            {user.lastMessage}
          </div>
        </div>
      </div>

      <div className="user-msg-status flex min-w-12 flex-col gap-2">
        <div className="last-msg-time text-xs">{user.time}</div>
        <div className="unseen-msg-count flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-xs leading-none">
          {user.count}
        </div>
      </div>
    </div>
  );
};

export default UserMsgListItem;
