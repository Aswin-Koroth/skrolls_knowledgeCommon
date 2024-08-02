const OnlineIcon = ({ icon, flag = true }) => {
  return (
    <div className="relative cursor-pointer rounded-full p-2 hover:bg-background">
      <img src={icon} className="h-6" />
      {flag ? (
        <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary ring-2 ring-background-sec"></div>
      ) : undefined}
    </div>
  );
};

export default OnlineIcon;
