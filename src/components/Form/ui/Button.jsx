import { cn } from '@/lib/utils';

const Button = ({ className, children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-text text-background-sec flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-sm',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
