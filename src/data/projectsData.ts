import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'usePopcorn',
    tagline: 'Movie watchlist app with search and rating features',
    description: 'A React-based movie application where users can search for movies, add them to a watchlist, and rate what they\'ve watched. Built with a fun popcorn theme and integrates with the OMDB API for real movie data.',
    image: '/projects/movie.png',
    techIcons: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'CSS3', icon: 'FaCss3Alt' }
    ],
    category: 'Frontend',
    slug: 'usepopcorn-movie-app',
    screenshots: ['/projects/movie.png', '/projects/movie 2.png'],
    features: [
      'Live movie search with OMDB API integration',
      'Add movies to personal watchlist',
      'Rate and review watched movies',
      'View comprehensive movie statistics',
      'Responsive and user-friendly interface'
    ]
  },
  {
    id: 2,
    title: 'The React Quiz',
    tagline: 'Interactive quiz app with multiple state management approaches',
    description: 'A modern and engaging quiz application built with React to test knowledge in an interactive way. Features two different implementations showcasing Context API and Prop Drilling with useReducer for educational purposes.',
    image: '/projects/quiz app 1.png',
    techIcons: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'CSS3', icon: 'FaCss3Alt' }
    ],
    category: 'Frontend',
    slug: 'react-quiz-app',
    screenshots: ['/projects/quiz app 1.png', '/projects/quiz2.png', '/projects/quiz3.png', '/projects/quiz 4.png'],
    features: [
      'Multiple-choice quiz with dynamic questions',
      'Timer functionality for each question',
      'Scoring system with high score tracking',
      'Two state management approaches (Context API & Prop Drilling)',
      'Progress bar and restart functionality'
    ]
  },
  {
    id: 3,
    title: 'Smart Packing List',
    tagline: 'React app for organized travel planning with real-time stats',
    description: 'A practical React application that helps users plan their trips by managing packing lists. Features include adding items with quantities, marking items as packed, sorting by different criteria, and viewing real-time packing statistics.',
    image: '/projects/travel.png',
    techIcons: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'CSS3', icon: 'FaCss3Alt' }
    ],
    category: 'Frontend',
    slug: 'smart-packing-list',
    screenshots: ['/projects/travel.png'],
    features: [
      'Add items with custom quantities',
      'Mark items as packed/unpacked',
      'Sort items by different criteria',
      'Real-time packing statistics',
      'Clean and intuitive interface'
    ]
  },
  {
    id: 4,
    title: 'Fast React Pizza',
    tagline: 'Modern pizza ordering system with real-time order tracking',
    description: 'A comprehensive pizza ordering application built with React and modern web technologies. Features include menu browsing, cart management, order customization, and real-time order tracking for a complete restaurant experience.',
    image: '/projects/pizza1.png',
    techIcons: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'CSS3', icon: 'FaCss3Alt' }
    ],
    category: 'Frontend',
    slug: 'fast-react-pizza',
    screenshots: ['/projects/pizza1.png', '/projects/pizza2.png', '/projects/pizza3.png', '/projects/pizza4.png', '/projects/pizza5.png'],
    features: [
      'Interactive pizza menu with customization',
      'Shopping cart with item management',
      'Real-time order tracking system',
      'Responsive design for all devices',
      'Modern UI with smooth animations'
    ]
  },
  {
    id: 5,
    title: 'The Wild Oasis',
    tagline: 'Hotel management dashboard with booking and analytics',
    description: 'A comprehensive hotel management system featuring cabin bookings, guest management, and detailed analytics. Built with React and modern UI components to provide a complete hospitality management solution.',
    image: '/projects/wildoasis1.png',
    techIcons: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'CSS3', icon: 'FaCss3Alt' }
    ],
    category: 'Dashboard',
    slug: 'wild-oasis-hotel',
    screenshots: ['/projects/wildoasis1.png', '/projects/wildoasis2.png', '/projects/wildoasis3.png', '/projects/wildoasis4.png'],
    features: [
      'Comprehensive booking management system',
      'Guest check-in and check-out functionality',
      'Revenue and occupancy analytics',
      'Cabin management and maintenance tracking',
      'Professional dashboard interface'
    ]
  },
  {
    id: 6,
    title: 'WorldWise',
    tagline: 'Interactive world map for tracking your travel adventures',
    description: 'A beautiful travel tracking application that allows users to mark cities they\'ve visited on an interactive world map. Features include city information, travel statistics, and a clean interface for managing your global adventures.',
    image: '/projects/worldwise.png',
    techIcons: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'CSS3', icon: 'FaCss3Alt' }
    ],
    category: 'Frontend',
    slug: 'worldwise-travel-tracker',
    screenshots: ['/projects/worldwise.png', '/projects/worldwise2.png'],
    features: [
      'Interactive world map interface',
      'City marking and information display',
      'Travel statistics and analytics',
      'Beautiful and intuitive design',
      'Responsive map functionality'
    ]
  }
];