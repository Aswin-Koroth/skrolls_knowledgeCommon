import React from 'react';

const SelectBox = ({
  label,
  name,
  icon = null,
  options,
  children,
  required = true,
}) => {
  return (
    <div className="relative flex flex-col gap-2 max-xl:gap-1">
      <label htmlFor={name} className="select-none text-base font-bold">
        {label}
      </label>
      <div className="flex h-10 gap-2 overflow-hidden rounded-md border-b-[1px] border-border-primary bg-bg-primary">
        {icon && (
          <img src={icon} className="ml-2 w-4" alt="icon" draggable="false" />
        )}
        <select
          name={name}
          id={name}
          className="w-full bg-transparent px-2 py-1 outline-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {children}
    </div>
  );
};

export default SelectBox;
