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
    title: 'WorldWise',
    tagline: 'Interactive world map for tracking your travel adventures',
    description: 'A modern and elegant travel tracker built with React, Vite, and Leaflet. WorldWise allows you to visually manage your travel history by adding cities directly on an interactive world map, leaving notes, and organizing your journeys like a pro.',
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
      'Interactive world map with click-to-add cities',
      'City management with notes and date tracking',
      'Geolocation integration for current location',
      'User authentication with protected routes',
      'Wikipedia integration for city information'
    ]
  },
  {
    id: 4,
    title: 'Fast React Pizza',
    tagline: 'Modern pizza ordering system with cart and location services',
    description: 'A comprehensive pizza ordering application built with React, Redux Toolkit, and Tailwind CSS. Features dynamic menu loading, shopping cart management, geolocation services, and order tracking for a complete restaurant experience.',
    image: '/projects/pizza1.png',
    techIcons: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' }
    ],
    category: 'Frontend',
    slug: 'fast-react-pizza',
    screenshots: ['/projects/pizza1.png', '/projects/pizza2.png', '/projects/pizza3.png', '/projects/pizza4.png', '/projects/pizza5.png'],
    features: [
      'Dynamic pizza menu loaded via external API',
      'Shopping cart with real-time price updates',
      'GPS-based address auto-fill with geolocation',
      'Order tracking with live ETA updates',
      'Priority ordering for faster delivery'
    ]
  },
  {
    id: 5,
    title: 'The Wild Oasis',
    tagline: 'Comprehensive hotel management system with analytics',
    description: 'A modern, full-featured hotel management system built with React and Supabase. Provides complete hotel operations management including cabin bookings, guest check-in/check-out processes, business analytics, and user authentication.',
    image: '/projects/wildoasis1.png',
    techIcons: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'Supabase', icon: 'SiSupabase' }
    ],
    category: 'Dashboard',
    slug: 'wild-oasis-hotel',
    screenshots: ['/projects/wildoasis1.png','/projects/wildoasis3.png', '/projects/wildoasis4.png'],
    features: [
      'Complete cabin management with image uploads',
      'Booking system with guest check-in/check-out',
      'Business dashboard with sales analytics',
      'User authentication and profile management',
      'Real-time occupancy and revenue tracking'
    ]
  },
  {
    id: 6,
    title: 'The Atomic Blog',
    tagline: 'Modern React blog with performance optimizations',
    description: 'A performant React blog application showcasing advanced patterns like Context API, React.memo, and state management. Features real-time search, dark mode toggle, and a post archive of over 10,000 entries with optimal performance.',
    image: '/projects/blog2.png',
    techIcons: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'CSS3', icon: 'FaCss3Alt' }
    ],
    category: 'Frontend',
    slug: 'atomic-blog',
    screenshots: ['/projects/blog2.png', '/projects/blog.png'],
    features: [
      'Real-time search through 10,000+ posts',
      'Performance optimizations with React.memo and useMemo',
      'Dark/light mode toggle with smooth transitions',
      'Post creation and management system',
      'Fake data generation using Faker.js'
    ]
  },
  {
    id: 7,
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
    id: 8,
    title: 'Instagram Clone',
    tagline: 'Full-Stack Instagram-Like Social Media Platform',
    description: 'A full-featured, Instagram-inspired social media platform replicating key functionalities like media sharing, stories, reels, messaging, and real-time user interactions. Built with Next.js, Node.js, Express.js, Prisma, PostgreSQL, and Socket.io.',
    image: '/projects/insta1.png',
    techIcons: [
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Node.js', icon: 'FaNodeJs' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'Prisma', icon: 'SiPrisma' },
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'Socket.io', icon: 'SiSocketdotio' }
    ],
    category: 'Fullstack',
    slug: 'instagram-clone',
    screenshots: [
      '/projects/insta1.png',
      '/projects/insta2.png',
      '/projects/insta3.png',
      '/projects/insta4.png'
    ],
    features: [
      'User Authentication (JWT-based)',
      'Optimized Media Uploads (photos & videos)',
      'Stories & Reels functionality',
      'Real-time Direct Messaging',
      'Explore & Search (users, hashtags, locations)',
      'Live Notifications',
      'Responsive Design (Mobile-first)',
      'WebSocket-based Real-time Interactions'
    ]
  },
  {
    id: 9,
    title: 'BookIt',
    tagline: 'Full-Stack Hotel Room Booking Platform',
    description: 'A production-grade, full-stack hotel room booking application built with modern web technologies. Delivers a complete hotel booking ecosystem — from room discovery and secure payments to robust admin management — making it ideal for real-world deployments.',
    image: '/projects/bookit.png',
    techIcons: [
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Redux Toolkit', icon: 'SiRedux' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'Node.js', icon: 'FaNodeJs' },
      { name: 'Stripe', icon: 'SiStripe' },
      { name: 'Cloudinary', icon: 'SiCloudinary' },
      { name: 'Mapbox', icon: 'SiMapbox' }
    ],
    category: 'Fullstack',
    slug: 'bookit-hotel-booking',
    screenshots: ['/projects/bookit.png'],
    features: [
      'User registration and login via NextAuth.js with JWT-based session management',
      'Role-based access control (Admin/User) with secure route protection',
      'Advanced filtering: search by location, price, date, guest capacity, and amenities',
      'MapBox integration for geolocation-based room discovery',
      'Stripe integration for secure checkout sessions with webhook support',
      'PDF invoice generation with jsPDF for booking confirmations',
      'Full CRUD operations for rooms, bookings, and users with admin dashboard',
      'Sales analytics and revenue charts using Chart.js',
      'Cloudinary-powered media upload and image management',
      'Real-time room availability using dynamic date selection',
      'Ratings & reviews from verified users',
      'Email notifications for password reset and booking confirmations'
    ]
  }
];