import { cn } from '@/lib/utils';

const DropdownButton = ({
  onClick,
  dropdownId,
  isActive,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      data-dropdown-toggle={dropdownId}
      className={cn(
        'flex h-[37px] w-full items-center justify-center border px-4 py-1 text-sm font-medium',
        'focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300',
        'md:w-auto',
        {
          'bg-gray-100': isActive,
          'bg-white': !isActive,
        },
        'hover:text-primary-700 text-gray-900',
        'hover:bg-bg-muted border-gray-200',
        'dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400',
        'dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700',
        className
      )}
      type="button"
    >
      {children}
    </button>
  );
};

export default DropdownButton;
