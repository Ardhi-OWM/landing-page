import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  nLight,
  run,
  opensource,
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
    text: "Transform raw data into dynamic, interactive maps, making it easier to interpret and share your findings with others.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon3,
    imageUrl: nLight,
    light: true,
  },
  {
    id: "2",
    title: "Download Results in Multiple Formats",
    text: "Export your analysis results in a variety of formats, including txt, Geotiff, CSV, GeoJson etc. ",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: download,
    imageUrl: nLight,
  },
  {
    id: "3",
    title: "Open Source and Customizable",
    text: "Access and modify the source code to tailor the software to your specific needs. Contribute to the community and enhance the platform. ",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: opensource,
    imageUrl: nLight,
  },
];

export const socials = [
 /*  {
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
  }, */
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: 'https://linda-ochwada.netlify.app/',
  },
 /*  {
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
  }, */
];
