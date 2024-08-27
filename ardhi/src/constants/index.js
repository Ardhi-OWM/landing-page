import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    nLight,
    run,
    download,
    //inter,
  
    discordBlack,
    facebook,
    instagram,
    telegram,
    twitter,

    // heroIcons
    file02,
    plusSquare,
    homeSmile,
    searchMd,
    
    notification1,
    notification2,
    notification3,
    notification4,

    // Company logos
    aws,
    google,
    openstack,

    cloudapps,

/*  chromecast,
    disc02,
    discord,
    figma,
    
    framer,
    
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
  
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
   
    slack,
    sliders04,
    
    yourlogo, */
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "About",
      url: "#about",
    },
    {
      id: "1",
      title: "features",
      url: "#features",
    },
    /* {
      id: "2",
      title: "Roadmap",
      url: "#road",
    }, */
    {
      id: "3",
      title: "Releases",
      url: "https://github.com/Ardhi-OWM/landing-page/releases/",
    },
    {
      id: "4",
      title: "Blogs",
      url: "#blogs",
    },
    {
      id: "5",
      title: "Sign in",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "6",
      title: "Ardhi App",
      url: "#login",
      onlyMobile: true,
    },
      
  ];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
export const notificationImages = [notification4, notification3, notification2];
  
export const companyLogos = [aws, google, openstack];

  /*
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ]; */
  
  /* export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ]; */
  
  /* export const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ]; */
  
  export const collabText =
    "Ardhi integrates with leading cloud platforms to ensure robust data management, scalable storage, and efficient data processing."; 
    export const collabText2 =
    "Integrateing with leading cloud platforms to ensure robust data management, scalable storage, and efficient data processing."; 
  
  export const collabContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
    },
    {
      id: "1",
      title: "Data Flexibility",
    },
    {
      id: "2",
      title: "Accessibility and Ease of Use",
    },
  ]; 
  
   export const collabApps = [
    {
      id: "0",
      title: "AWSs",
      icon: aws,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Google",
      icon: google,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Cloud Apps",
      icon: cloudapps,
      width: 34,
      height: 35,
    },
    {
      id: "3",
      title: "Openstack",
      icon: openstack,
      width: 36,
      height: 28,
    },
  ]; 
  
   export const blogContent = [
    {
      id: "0",
      title: "Basic",
      description: "So I started to walk into the water. I won't lie to you boys, I was terrified. I tell you Jerry at that moment, I was a marine biologist.",
      url: 'https://linda-ochwada.netlify.app/'
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      url: 'https://linda-ochwada.netlify.app/'
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      url: 'https://linda-ochwada.netlify.app/'
    },
    {
      id: "3",
      title: "Enterprise 2",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      url: 'https://linda-ochwada.netlify.app/'
    },
    {
      id: "4",
      title: "Enterprise 3",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      url: 'https://linda-ochwada.netlify.app/'
    },
  ]; 
  
  export const benefits = [
    {
      id: "0",
      title: "Seamlessly Run Python Scripts ",
      text: "Run Python scripts directly within the platform, providing a powerful environment for custom geospatial analysis.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: run,
      imageUrl: nLight,
    },
    {
      id: "1",
      title: "Interactive Result Visualization",
      text: "Transform raw data and script outputs into dynamic, interactive maps, making it easier to interpret and share your findings with others.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon3,
      imageUrl: nLight,
      light: true,
    },
    {
      id: "2",
      title: "Download Results in Multiple Formats",
      text: "Supports exporting analysis results in a variety of formats, including txt, Geotiff, CSV, GeoJson etc. ",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl:download,
      imageUrl: nLight,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: 'https://linda-ochwada.netlify.app/',
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: 'https://linda-ochwada.netlify.app/',
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: 'https://linda-ochwada.netlify.app/',
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: 'https://linda-ochwada.netlify.app/',
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: 'https://linda-ochwada.netlify.app/',
    },
  ];
  