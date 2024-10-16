const Input = ({ label, name, type = 'text', placeholder, icon = null }) => {
  return (
    <div className="flex flex-col gap-2 max-xl:gap-1">
      <label htmlFor={name} className="select-none text-sm font-bold">
        {label}
      </label>
      {/* <div className="flex items-center gap-2 text-sm font-light"> */}
      {icon && <img src={icon} className="w-4" alt="icon" draggable="false" />}
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        className="h-10 rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
        required
      />
      {/* </div> */}
    </div>
  );
};

export default Input;
