import setting_icon from "../../assets/settings.svg";
import { Link } from "react-router-dom";

const NavpanelItem = (params) => {
  const { label, icon, isSelected, link, className, seperation } = params;
  return (
    <Link
      to={link}
      className={`${
        isSelected
          ? "bg-background border-primary"
          : "border-background-sec hover:border-text-fade"
      } ${className} ${
        seperation ? "mt-auto" : ""
      } hover:bg-text-fade  border-l-4 w-full h-[60px] cursor-pointer select-none`}
    >
      <div
        className={`${isSelected ? "border-background " : "border-border"} 
      hover:border-text-fade flex items-center justify-start gap-6 mx-5 h-full ${
        seperation ? "border-t-[1px]" : "border-b-[1px]"
      }`}
      >
        <img src={icon} alt="icon" className="h-6" />
        <span className=" text-text leading-none text-sm">{label}</span>
      </div>
    </Link>
  );
};

export default NavpanelItem;
