/my-nextjs-project
├── /app
│   ├── /auth
│   │   ├── page.js                // Registration page or authentication page
│   │   ├── login.js               // Login page
│   │   └── register.js            // Registration page
│   ├── /dashboard                 // User dashboard section
│   │   ├── page.js                // Dashboard home page
│   │   └── settings.js            // Settings page
│   ├── /participants              // Participants section
│   │   ├── page.js                // Participants page
│   │   └── [id].js                // Individual participant details page
│   ├── /about                     // About page
│   │   └── page.js
│   ├── /events                    // Upcoming events section
│   │   ├── page.js                // Events listing page
│   │   └── [eventId].js           // Event details page
│   └── layout.js                  // Global layout for app pages
├── /components
│   ├── /common                   // Reusable components (Header, Footer, etc.)
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── SearchBar.js
│   │   └── SocialIcons.js
│   ├── /auth                     // Authentication-related components
│   │   ├── RegistrationForm.js
│   │   └── LoginForm.js
│   ├── /events                    // Event-related components
│   │   └── EventCard.js
│   └── /participants              // Participant-related components
│       ├── ParticipantCard.js
│       └── ParticipantList.js
├── /data                          // Data files and APIs
│   ├── events.json                // Static data for events
│   ├── participants.json          // Static data for participants
│   ├── firebase-config.js         // Firebase configuration and init
│   └── db.js                      // Database functions (or server-side logic)
├── /public
│   ├── /images                    // Static image files (served publicly)
│   │   ├── Swachhata_banner_english.jpg
│   │   ├── fb.png
│   │   ├── g20-logo.png
│   │   ├── govinlogo.png
│   │   ├── linkedin.png
│   │   ├── nidmlogo.png
│   │   ├── search-icon.png
│   │   ├── task-icon1.png
│   │   ├── task-icon2.png
│   │   ├── task-icon3.png
│   │   ├── task-icon4.png
│   │   ├── twitter.png
│   │   └── youtube.png
├── /styles
│   ├── globals.css                // Global styles (reset, body styles, etc.)
│   ├── layout.module.css          // Styles for global layout (Header, Footer)
│   ├── auth.module.css            // Styles for auth pages (Login, Register)
│   ├── participants.module.css    // Styles for participants pages
│   ├── events.module.css          // Styles for events pages
│   └── common.module.css          // Common UI styles for buttons, inputs, etc.
├── /utils
│   ├── firebase.js                // Firebase utility functions (auth, db, etc.)
│   ├── helpers.js                 // Other utility functions (e.g., date formatting)
│   └── validation.js              // Form validation utilities
├── /middleware                    // Middleware (authentication, etc.)
│   └── authMiddleware.js          // Auth middleware for protected routes
├── /hooks                         // Custom React hooks
│   ├── useAuth.js                 // Hook for managing auth state
│   └── useParticipants.js         // Hook for fetching participants data
├── .env.local                     // Environment variables (Firebase keys, etc.)
├── next.config.js                 // Next.js config file (for image optimization, etc.)
├── package.json                   // Project dependencies and scripts
└── README.md                      // Project README file
