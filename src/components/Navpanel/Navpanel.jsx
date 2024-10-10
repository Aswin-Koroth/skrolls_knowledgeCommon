import logo from '../../assets/icon.png';
import NavpanelItem from './NavpanelItem';
import { useLocation } from 'react-router-dom';

const Navpanel = ({ navList }) => {
  const location = useLocation();

  return (
    <nav className="flex h-screen w-[300px] min-w-[170px] max-w-[20%] flex-col items-start justify-start border-r-2 border-border bg-white pt-10 max-sm:hidden">
      <img src={logo} alt="logo" className="h-24 self-center pb-10" />
      {navList.map((item, index) => (
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
