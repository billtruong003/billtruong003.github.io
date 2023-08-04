// gitprofile.config.js

const config = {
  github: {
    username: 'billtruong003', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 14, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['ads', 'checklistbilltruong003.github.io', 'adTest', 'template', 'test', 'gittest'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'billtruong003',
    facebook: 'truongbill003',
    instagram: 'bill.workaholic',
    dev: 'billtruong003',
    website: 'billwebsite.github.io',
    phone: '+84 374976616',
    email: 'billtruong003@gmail.com',
    twitter: '',
    mastodon: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: 'live:.cid.20fb3e5aba7d18b7',
    telegram: '',
  },
  resume: {
    fileUrl:
      'https://static.topcv.vn/topcv-cv-uploads/80b745be13af28ce9cb936e615cfeb7d.pdf#toolbar=0&navpanes=0&scrollbar=0', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C/C#',
    'Unity',
    'Html5',
    'CSS',
    'Javascript',
    'Firebase',
    'Python',
    'SQL',
    'Git',
    // 'Tailwind CSS',
    'Latex',
    'MD',
    'nodeJS',
    // 'Docker',
    // 'PHPUnit',
    // 'Antd',
    
  ],
  experiences: [
    {
      company: 'GAMELOFT',
      position: 'PRG Game Developer Internship',
      from: 'June 2023',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/gameloft-vietnam/mycompany/',
    },
    {
      company: 'GOLDEN SEA STUDIO',
      position: 'GAME DEVELOPER INTERNSHIP',
      from: 'April 2023',
      to: 'June 2023',
      companyLink: 'https://www.linkedin.com/company/golden-sea-studio/mycompany/',
    },
    {
      company: 'MARATHON EDUCATION',
      position: 'IT ADVISOR',
      from: 'April 2023',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/marathon-education/mycompany/',
    },
    {
      company: 'DIGIUNI VIETNAM',
      position: 'PROGRAMMING INSTRUCTOR',
      from: 'July 2022',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/digiunivietnam/mycompany/',
    },
    {
      company: 'PACIFIC HEALTHCARE',
      position: 'IT HELP DESK',
      from: 'July 2022',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/pacific-healthcare-group-vn/about/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'EMASI VAN PHUC',
      degree: 'HIGH SCHOOL DEGREE',
      from: '2019',
      to: '20122',
    },
    {
      institution: 'FPT UNIVERSITY',
      degree: 'BACHELOR DEGREE',
      from: '2022',
      to: 'PRESENT',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
