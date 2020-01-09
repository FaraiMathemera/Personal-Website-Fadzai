const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Fadzai Kadzinga',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Fadzai Kadzinga',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Fadzai Kadzinga',
    heading: 'PROJECTS',
  },
  {
    route: '/publications',
    title: 'Publications & Contributions | Fadzai Kadzinga',
    heading: 'PUBLICATIONS',
  },
  {
    route: '/contact',
    title: 'Contact | Fadzai Kadzinga',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
