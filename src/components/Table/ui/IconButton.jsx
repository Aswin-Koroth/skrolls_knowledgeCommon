const IconButton = (params) => {
  const { label, icon, onclick } = params;
  return (
    <div className="flex items-center gap-2 w-max rounded-full bg-background px-2 py-1 cursor-pointer hover:bg-background-mut">
      <img src={icon} alt="" className="h-3 w-3" />
      <span>{label}</span>
    </div>
  );
};

export default IconButton;
