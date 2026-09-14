export const personalInfo = {
  name: 'Md Abdul Kalam',
  headline: 'Full-Stack Developer | CS Undergrad at MNNIT',
  intro: "I'm a Computer Science undergraduate at MNNIT Allahabad who builds full-stack applications engineered for scale, featuring real-time capabilities and AI integration. With 1,059+ problems solved and a Knight rating on LeetCode, I bring elite problem-solving fundamentals to every system I ship.",
  email: 'abdulkalam91557489@gmail.com',
  phone: '+91-9155748962',
  location: 'Prayagraj, India',
};

export const socialLinks = {
  github: 'https://github.com/Abdulkalam0018',
  linkedin: 'https://www.linkedin.com/in/abdul-kalam0018/',
  leetcode: 'https://leetcode.com/Abdulkalam0018',
  codeforces: 'https://codeforces.com/profile/AbdulKalam0018',
  gfg: 'https://www.geeksforgeeks.org/user/Abdulkalam0018',
};

export const resumeUrl = 'https://drive.google.com/file/d/1bCAGbbW-11Kbvldr6GzqxcF83YsS_53R/view?usp=drive_link';

export const education = [
  {
    degree: 'Bachelor of Technology',
    branch: 'Computer Science and Engineering',
    institution: 'Motilal Nehru National Institute of Technology Allahabad',
    shortName: 'MNNIT Allahabad',
    duration: '2023 - 2027',
    grade: 'CPI: 8.1 (Till 6th Semester)',
    logo: null,
  },
  {
    degree: '12th (Intermediate)',
    branch: null,
    institution: 'Thakur Prasad College, Madhepura',
    shortName: 'Thakur Prasad College',
    duration: '2022',
    grade: 'Percentage: 83.6%',
    board: 'Bihar School Examination Board',
  },
  {
    degree: '10th (Matriculation)',
    branch: null,
    institution: 'Millia Convent English School',
    shortName: 'Millia Convent English School',
    duration: '2020',
    grade: 'Percentage: 92.6%',
    board: 'Central Board of Secondary Education',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'JavaScript'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Socket.IO', 'Kafka', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'SQL'],
  },
  {
    category: 'Auth & Security',
    items: ['JWT', 'Firebase', 'Clerk'],
  },
  {
    category: 'CS Fundamentals',
    items: ['OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    category: 'DSA',
    items: ['Graphs', 'DP', 'Arrays', 'Linked Lists', 'Trees', 'Trie', 'Greedy', 'Stack', 'Queue'],
  },
];

export const projects = [
  {
    name: 'RoadResQ',
    tagline: 'Full-stack roadside assistance platform connecting vehicle owners with nearby mechanics',
    description: 'A full-stack roadside-assistance platform connecting stranded vehicle owners with nearby mechanics in real-time.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Socket.IO', 'JWT', 'Kafka'],
    features: [
      'RESTful APIs for garage discovery, service requests, ratings, and profile management',
      'Real-time chat, notifications, ETA updates, and live mechanic-location tracking via Socket.IO',
      'Kafka-powered async event processing for mechanic notifications without blocking API requests',
      'MongoDB GeoJSON with 2dsphere indexes for geospatial nearby mechanic search',
    ],
    github: 'https://github.com/Abdulkalam0018/RoadResQ-',
    demo: 'https://road-res-q.vercel.app/',
    image: '/images/projects/roadresq.png',
  },
  {
    name: 'MediAlert',
    tagline: 'AI-powered medication tracking, smart reminders, and health assistance platform',
    description: 'An AI-powered full-stack platform for medication tracking, smart reminders, and health assistance.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Google Calendar API', 'Clerk'],
    features: [
      'Conversational AI chatbot for medication queries and real-time schedule management',
      'Custom algorithm for proactive health nudges and adherence tracking',
      'Google Calendar API integration for automated dose scheduling and cross-platform alerts',
      'Clerk + JWT auth with FCM token management for personalized push notifications',
    ],
    github: 'https://github.com/Abdulkalam0018/MediAlert',
    demo: 'https://medi-alert-nine.vercel.app/',
    image: '/images/projects/medialert.png',
  },
  {
    name: 'InkSpire',
    tagline: 'Interactive multiplayer drawing and real-time guessing platform',
    description: 'An interactive multiplayer drawing and real-time guessing platform with synchronized gameplay.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.IO', 'Fabric.js'],
    features: [
      'Real-time multiplayer drawing and guessing with synchronized gameplay via Socket.IO',
      'Fabric.js canvas sync across clients with debounced updates and versioning',
      'Secure role-based socket authorization restricting drawing to active presenter',
      'Concurrent lobby management with automated admin handoff and game cleanup',
    ],
    github: 'https://github.com/Abdulkalam0018/InkSpire',
    demo: 'https://ink-sage.vercel.app/',
    image: '/images/projects/inkspire.png',
  },
];

export const codingProfiles = [
  {
    platform: 'LeetCode',
    handle: 'Abdulkalam0018',
    problemsSolved: 453,
    rating: 1853,
    badge: 'Knight',
    url: 'https://leetcode.com/Abdulkalam0018',
    color: '#FFA116',
  },
  {
    platform: 'Codeforces',
    handle: 'AbdulKalam0018',
    problemsSolved: 348,
    rating: 1442,
    badge: 'Specialist',
    url: 'https://codeforces.com/profile/AbdulKalam0018',
    color: '#1F8ACB',
  },
  {
    platform: 'GeeksforGeeks',
    handle: 'Abdulkalam0018',
    problemsSolved: 258,
    rating: null,
    badge: null,
    url: 'https://www.geeksforgeeks.org/user/Abdulkalam0018',
    color: '#2F8D46',
  },
];

export const totalProblemsSolved = 1059;

export const achievements = [
  {
    title: 'CodeSangam Hackathon Finalist',
    description: 'Finalist for developing MediAlert, an AI-powered medication tracking application.',
    icon: 'Trophy',
  },
  {
    title: 'Global Rank 365 / 41,000+',
    description: 'LeetCode Weekly Contest 489',
    icon: 'Globe',
  },
  {
    title: 'All India Rank 553',
    description: 'Codeforces Round 1103',
    icon: 'Award',
  },
  {
    title: 'Captain, College Kabaddi Team',
    description: 'Led the college Kabaddi team to the semi-finals in an Inter-NIT tournament.',
    icon: 'Medal',
  },
];

export const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Profiles', to: 'coding-profiles' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
];
