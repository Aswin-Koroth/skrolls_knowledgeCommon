import setting_icon from '../../assets/settings.svg';
import { Link } from 'react-router-dom';

const NavpanelItem = (params) => {
  const { label, icon, isSelected, link, className, seperation } = params;
  return (
    <Link
      to={link}
      className={`${
        isSelected
          ? 'border-primary bg-background'
          : 'border-background-sec hover:border-text-fade'
      } ${className} ${
        seperation ? 'mt-auto' : ''
      } h-[60px] w-full cursor-pointer select-none border-l-4 hover:bg-text-fade`}
    >
      <div
        className={`${isSelected ? 'border-background' : 'border-border'} mx-5 flex h-full items-center justify-start gap-6 hover:border-text-fade ${
          seperation ? 'border-t-[1px]' : 'border-b-[1px]'
        }`}
      >
        <img src={icon} alt="icon" className="h-6" />
        <span className="text-sm leading-none text-text">{label}</span>
      </div>
    </Link>
  );
};

export default NavpanelItem;
