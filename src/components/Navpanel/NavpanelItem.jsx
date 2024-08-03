import clsx from 'clsx';
import { Link } from 'react-router-dom';

const NavpanelItem = (params) => {
  const { label, icon, isSelected, link, className, seperation } = params;
  return (
    <Link
      to={link}
      className={clsx(
        'h-[60px] w-full cursor-pointer select-none border-l-4 hover:bg-text-fade',
        {
          'border-primary bg-background': isSelected,
          'border-background-sec hover:border-text-fade': !isSelected,
          'mt-auto': seperation,
        },
        className
      )}
    >
      <div
        className={clsx(
          'mx-5 flex h-full items-center justify-start gap-6 hover:border-text-fade',
          {
            'border-background': isSelected,
            'border-border': !isSelected,
            'border-t-[1px]': seperation,
            'border-b-[1px]': !seperation,
          }
        )}
      >
        <img src={icon} alt="icon" className="h-6" />
        <span className="text-sm leading-none text-text">{label}</span>
      </div>
    </Link>
  );
};

export default NavpanelItem;
