import {
  FaHome,
  FaFire,
  FaHistory,
  FaMusic,
  FaFilm,
  FaGamepad,
  FaNewspaper,
  FaLightbulb,
  FaTrophy,
  FaHeart,
  FaCog,
  FaFlag,
  FaShieldAlt,
  FaQuestionCircle,
  FaCommentDots,
} from 'react-icons/fa';

export const sidebarItems = [
  {
    name: 'Home',
    icon: <FaHome />,
    type: 'new',
  },
  {
    name: 'Trending',
    icon: <FaFire />,
    type: 'category',
  },
  {
    name: 'Learning',
    icon: <FaHistory />,
    type: 'category',
  },
  {
    name: 'Music',
    icon: <FaMusic />,
    type: 'category',
  },
  {
    name: 'Movies',
    icon: <FaFilm />,
    type: 'category',
  },
  {
    name: 'Gaming',
    icon: <FaGamepad />,
    type: 'category',
  },
  {
    name: 'News',
    icon: <FaNewspaper />,
    type: 'category',
  },
  {
    name: 'Live',
    icon: <FaLightbulb />,
    type: 'category',
  },
  {
    name: 'Sports',
    icon: <FaTrophy />,
    type: 'category',
  },
  {
    name: 'Favorites',
    icon: <FaHeart />,
    type: 'menu',
  },
  {
    name: 'Settings',
    icon: <FaCog />,
    type: 'settings',
  },
  {
    name: 'Report History',
    icon: <FaFlag />,
    type: 'settings',
  },
  {
    name: 'Privacy Policy',
    icon: <FaShieldAlt />,
    type: 'settings',
  },
  {
    name: 'Help',
    icon: <FaQuestionCircle />,
    type: 'settings',
  },
  {
    name: 'Send Feedback',
    icon: <FaCommentDots />,
    type: 'settings',
  },
];
