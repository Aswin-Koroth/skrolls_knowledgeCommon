const IconButton = ({ label, icon, onclick }) => {
  return (
    <div className="flex w-max cursor-pointer items-center gap-2 rounded-full bg-background px-2 py-1 hover:bg-background-mut">
      <img src={icon} alt="" className="h-3 w-3" />
      <span>{label}</span>
    </div>
  );
};

export default IconButton;
