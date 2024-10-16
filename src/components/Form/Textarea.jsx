const Textarea = ({ label, name, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 max-xl:gap-1">
      <label htmlFor={name} className="select-none text-sm font-bold">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        name={name}
        id={name}
        className="h-40 resize-none rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
        required
      ></textarea>
    </div>
  );
};

export default Textarea;
