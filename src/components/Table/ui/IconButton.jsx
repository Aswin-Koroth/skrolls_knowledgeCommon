import { cn } from '@/lib/utils';
const IconButton = ({ label, icon, onclick, className }) => {
  return (
    <div
      onClick={onclick}
      className={cn(
        'flex w-max cursor-pointer select-none items-center gap-2 rounded-full bg-bg-primary px-2 py-1 hover:bg-bg-muted-transparent hover:text-black',
        className
      )}
    >
      <img src={icon} alt="" className="h-3 w-3" />
      <span>{label}</span>
    </div>
  );
};

export default IconButton;
