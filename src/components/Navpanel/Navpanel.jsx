import logo from "../../assets/icon.png";
import NavpanelItem from "./NavpanelItem";
import { navpanelList } from "@/data/constants";
import { useLocation } from "react-router-dom";

const Navpanel = () => {
  const location = useLocation();

  return (
    <nav className="bg-background-sec w-[300px] max-w-[30%] h-screen flex flex-col items-start justify-start pt-10 border-r-2 border-border max-sm:hidden ">
      <img src={logo} alt="logo" className="self-center h-24 pb-10" />
      {navpanelList.map((item, index) => (
        <NavpanelItem
          label={item.label}
          key={index}
          link={item.link}
          icon={item.icon}
          isSelected={location.pathname === item.link}
          seperation={item.sep}
        />
      ))}
    </nav>
  );
};

export default Navpanel;
