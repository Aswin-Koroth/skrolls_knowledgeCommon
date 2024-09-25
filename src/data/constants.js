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


const LIBRARIAN_NAV_LIST = [
  {
    label: 'Dashboard',
    link: '/librarian/dashboard',
    icon: settings_icon,
    type: 'bottom',
  },
  { label: 'Submission', link: '/librarian/submission', icon: settings_icon },
  { label: 'User', link: '/librarian/user', icon: settings_icon },
  { label: 'chat', link: '/librarian/chat', icon: settings_icon },
  { label: 'Reports & Analysis', link: '/librarian/report', icon: settings_icon },
  {
    label: 'Settings',
    link: '/librarian/settings',
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

const submission = [
  {
    title: 'The Future of AI',
    type: 'Article',
    status: 'Approved',
  },
  {
    title: 'Modern Web Development',
    type: 'Book',
    status: 'Pending',
  },
  {
    title: 'Blockchain Revolution',
    type: 'Article',
    status: 'Approved',
  },
  {
    title: 'Quantum Computing Basics',
    type: 'Book',
    status: 'Pending',
  },
  {
    title: 'Cybersecurity Trends 2024',
    type: 'Article',
    status: 'Approved',
  },
  {
    title: 'Deep Learning Explained',
    type: 'Book',
    status: 'Pending',
  },
  {
    title: 'Data Science: A Modern Approach',
    type: 'Book',
    status: 'Approved',
  },
  {
    title: 'Augmented Reality in Healthcare',
    type: 'Article',
    status: 'Pending',
  },
  {
    title: 'Ethical AI: Navigating the Challenges',
    type: 'Article',
    status: 'Approved',
  },
  {
    title: 'Introduction to Cloud Computing',
    type: 'Book',
    status: 'Approved',
  },
];

const users = [
  {
    name: 'Alice Johnson',
    status: 'Active',
  },
  {
    name: 'Bob Smith',
    status: 'Pending',
  },
  {
    name: 'Catherine Lee',
    status: 'Active',
  },
  {
    name: 'David Kim',
    status: 'Pending',
  },
  {
    name: 'Emily Davis',
    status: 'Active',
  },
  {
    name: 'Frank Thomas',
    status: 'Pending',
  },
  {
    name: 'Grace Miller',
    status: 'Active',
  },
  {
    name: 'Henry Wilson',
    status: 'Pending',
  },
  {
    name: 'Isabella Brown',
    status: 'Active',
  },
  {
    name: 'Jack Garcia',
    status: 'Pending',
  },
];

const report = [
  {
    users: 10,
    approvals: 5,
    pending: 2,
    rejected: 1,
    views: 150,
    downloads: 30,
  },
  {
    users: 8,
    approvals: 3,
    pending: 5,
    rejected: 2,
    views: 120,
    downloads: 20,
  },
  {
    users: 15,
    approvals: 8,
    pending: 1,
    rejected: 0,
    views: 300,
    downloads: 45,
  },
  {
    users: 6,
    approvals: 2,
    pending: 3,
    rejected: 4,
    views: 80,
    downloads: 15,
  },
  {
    users: 12,
    approvals: 7,
    pending: 2,
    rejected: 1,
    views: 250,
    downloads: 60,
  },
  {
    users: 9,
    approvals: 4,
    pending: 4,
    rejected: 2,
    views: 200,
    downloads: 25,
  },
  {
    users: 11,
    approvals: 6,
    pending: 1,
    rejected: 0,
    views: 280,
    downloads: 50,
  },
  {
    users: 7,
    approvals: 3,
    pending: 3,
    rejected: 3,
    views: 100,
    downloads: 18,
  },
  {
    users: 13,
    approvals: 9,
    pending: 1,
    rejected: 1,
    views: 350,
    downloads: 70,
  },
  {
    users: 10,
    approvals: 5,
    pending: 4,
    rejected: 2,
    views: 170,
    downloads: 35,
  },
];




export { ADMIN_NAV_LIST,LIBRARIAN_NAV_LIST, products, modals,submission,users,report };
