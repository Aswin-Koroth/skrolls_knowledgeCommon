import settings_icon from "../assets/settings.svg";

const navpanelList = [
  {
    label: "Dashboard",
    link: "/",
    icon: settings_icon,
    type: "bottom",
  },
  { label: "Content", link: "/contents_list", icon: settings_icon },
  { label: "University", link: "/universities_list", icon: settings_icon },
  {
    label: "College / Librarian ",
    link: "/colleges_list",
    icon: settings_icon,
  },
  { label: "Department", link: "/departments_list", icon: settings_icon },
  { label: "User", link: "/users_list", icon: settings_icon },
  { label: "Reports & Analysis", link: "/reports", icon: settings_icon },
  { label: "Settings", link: "/settings", icon: settings_icon, sep: true },
];

export { navpanelList };
