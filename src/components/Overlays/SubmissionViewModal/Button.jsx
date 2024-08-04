import { cn } from '@/lib/utils';

const Button = ({ className, children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex cursor-pointer items-center gap-1 rounded-sm bg-text px-2 py-1 text-xs text-background-sec',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
