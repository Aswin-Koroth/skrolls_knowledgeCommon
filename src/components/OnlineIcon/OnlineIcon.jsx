const OnlineIcon = ({ icon, flag = true }) => {
  return (
    <div className="hover:bg-background p-2 rounded-full cursor-pointer relative">
      <img src={icon} className="h-6 " />
      {flag ? (
        <div className="h-2  w-2 bg-primary absolute top-2 right-2 rounded-full ring-2 ring-background-sec"></div>
      ) : undefined}
    </div>
  );
};

export default OnlineIcon;
