import settings_icon from '../assets/settings.svg';

const modals = {
  SUBMISSION_PANEL: 'add_submissions_panel',
  VIEW_MODAL: 'view_submission_modal',
};

const ADMIN_NAV_LIST = [
  {
    label: 'Dashboard',
    link: '/admin',
    icon: settings_icon,
    type: 'bottom',
  },
  { label: 'Content', link: '/admin/contents_list', icon: settings_icon },
  {
    label: 'University',
    link: '/admin/universities_list',
    icon: settings_icon,
  },
  {
    label: 'College / Librarian ',
    link: '/admin/colleges_list',
    icon: settings_icon,
  },
  { label: 'Department', link: '/admin/departments_list', icon: settings_icon },
  { label: 'User', link: '/admin/users_list', icon: settings_icon },
  { label: 'Reports & Analysis', link: '/admin/reports', icon: settings_icon },
  {
    label: 'Settings',
    link: '/admin/settings',
    icon: settings_icon,
    sep: true,
  },
];

const CONTENTS_TABLE_HEADERS = [];
const USERS_TABLE_HEADERS = [];
const COLLEGES_TABLE_HEADERS = [];
const DEPARTMENTS_TABLE_HEADERS = [];
const UNIVERSITIES_TABLE_HEADERS = [];

const products = [
  {
    productName: 'Smartphone XYZ',
    category: 'Electronics',
    brand: 'Brand A',
    description: 'A high-end smartphone with a great camera and display.',
    price: 999.99,
  },
  {
    productName: 'Laptop ABC',
    category: 'Computers',
    brand: 'Brand B',
    description: 'A powerful laptop suitable for gaming and professional work.',
    price: 1499.99,
  },
  {
    productName: 'Wireless Earbuds',
    category: 'Accessories',
    brand: 'Brand C',
    description:
      'Compact and comfortable wireless earbuds with excellent sound quality.',
    price: 199.99,
  },
  {
    productName: 'Smartwatch 123',
    category: 'Wearables',
    brand: 'Brand D',
    description:
      'A stylish smartwatch with fitness tracking and notifications.',
    price: 299.99,
  },
  {
    productName: '4K Television',
    category: 'Home Entertainment',
    brand: 'Brand E',
    description:
      'A large 4K television with vibrant colors and smart features.',
    price: 799.99,
  },
  {
    productName: 'Smartphone XYZ',
    category: 'Electronics',
    brand: 'Brand A',
    description: 'A high-end smartphone with a great camera and display.',
    price: 999.99,
  },
  {
    productName: 'Laptop ABC',
    category: 'Computers',
    brand: 'Brand B',
    description: 'A powerful laptop suitable for gaming and professional work.',
    price: 1499.99,
  },
  {
    productName: 'Wireless Earbuds',
    category: 'Accessories',
    brand: 'Brand C',
    description:
      'Compact and comfortable wireless earbuds with excellent sound quality.',
    price: 199.99,
  },
  {
    productName: 'Smartwatch 123',
    category: 'Wearables',
    brand: 'Brand D',
    description:
      'A stylish smartwatch with fitness tracking and notifications.',
    price: 299.99,
  },
  {
    productName: '4K Television',
    category: 'Home Entertainment',
    brand: 'Brand E',
    description:
      'A large 4K television with vibrant colors and smart features.',
    price: 799.99,
  },
  {
    productName: '4K Television',
    category: 'Home Entertainment',
    brand: 'Brand E',
    description:
      'A large 4K television with vibrant colors and smart features.',
    price: 799.99,
  },
  ,
  {
    productName: '4K Television',
    category: 'Home Entertainment',
    brand: 'Brand E',
    description:
      'A large 4K television with vibrant colors and smart features.',
    price: 799.99,
  },
  ,
  {
    productName: '4K Television',
    category: 'Home Entertainment',
    brand: 'Brand E',
    description:
      'A large 4K television with vibrant colors and smart features.',
    price: 799.99,
  },
  ,
  {
    productName: '4K Television',
    category: 'Home Entertainment',
    brand: 'Brand E',
    description:
      'A large 4K television with vibrant colors and smart features.',
    price: 799.99,
  },
];

export { ADMIN_NAV_LIST, products, modals };
