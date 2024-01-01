type MenuType = {
  name: string;
  link: string;
  isActive?: boolean;
};

const menuItems: MenuType[] = [
  {
    name: 'Home',
    link: '/',
    isActive: true,
  },
  {
    name: 'Popular',
    link: '#',
    isActive: false,
  },
  {
    name: 'Top Hosts',
    link: '#',
    isActive: false,
  },
];

export { menuItems };
