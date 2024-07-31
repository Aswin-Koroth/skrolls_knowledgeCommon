import React from "react";
import notification_icon from "@/assets/notification.svg";
import OnlineIcon from "../OnlineIcon/OnlineIcon";
import avatar_placeholder from "@/assets/profile.png";

const Header = () => {
  return (
    <div className="h-20 flex justify-end  max-sm:justify-center px-6 bg-background-sec">
      <div className="flex items-center gap-9  max-sm:justify-between  max-sm:w-full">
        <OnlineIcon icon={notification_icon} flag={true} />

        <div className="flex items-center gap-3 cursor-pointer">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={avatar_placeholder}
            alt="User avatar"
          />
          <div className="flex flex-col">
            <span className="font-medium flex items-center justify-between">
              <span className="text-text text-sm">John Doe</span>
              <span className="p-1 bg-primary text-xs text-background-sec rounded-sm leading-none">
                Admin
              </span>
            </span>
            <span className="text-xs text-text-mut">johndoe@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
