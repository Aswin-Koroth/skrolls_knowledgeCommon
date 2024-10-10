import notification_icon from '@/assets/notification.svg';
import OnlineIcon from '@/components/OnlineIcon/OnlineIcon';
import avatar_placeholder from '@/assets/profile.png';
import logo_icon from '@/assets/skrolls.png';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation().pathname;
  const role = location.includes('/admin')
    ? 'Admin'
    : location.includes('/librarian') && 'Librarian';

  return (
    <div className="flex h-20 justify-end bg-white px-6 max-sm:justify-center max-xs:px-2">
      <div className="flex items-center gap-9 max-sm:w-full max-sm:justify-end max-sm:gap-5">
        <img className="mr-auto sm:hidden" src={logo_icon} alt="Skrolls logo" />
        <OnlineIcon icon={notification_icon} flag={true} />
        <div className="flex cursor-pointer items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={avatar_placeholder}
            alt="User avatar"
          />
          <div className="flex flex-col">
            <span className="flex items-center justify-between font-medium">
              <span className="text-sm text-text">John Doe</span>
              {role && (
                <span className="rounded-sm bg-primary p-1 text-xs leading-none text-white">
                  {role}
                </span>
              )}
            </span>
            <span className="text-xs text-text-mut">johndoe@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
