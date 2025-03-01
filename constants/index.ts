import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Portfolio & Skills",
    url: "/portfolio",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];
export const skills = [
  {
    id: 1,
    name: "Front-end Development",
    description:
      "I have expertise in coding the visual aspects of websites using HTML, CSS, and JavaScript, ensuring a seamless and visually appealing user interface.",
    icon: "/icons/service-1.svg",
  },
  {
    id: 2,
    name: "User Interface - UI Development",
    description:
      "I possess the skill to develop visually captivating and intuitive interfaces through coding, enriching user engagement and interaction.",
    icon: "/icons/service-2.svg",
  },
  {
    id: 3,
    name: "User Experience - UX Development",
    description:
      "I have a deep understanding of user behavior and experience priciples, which I apply through coding to create smooth and gratifying user interactions",
    icon: "/icons/service-3.svg",
  },
  {
    id: 4,
    name: "Responsive Web Development",
    description:
      "I have the capability to create websites that seamlessly adapt and perform perfectly on different devices and screen sizes, utilizing coding techniques.",
    icon: "/icons/service-4.svg",
  },
  // {
  //   id: 5,
  //   name: "Prototyping and Development Testing",
  //   description:
  //     "Ability to code prototypes and conduct thorough testing to visualize and refine website functionalities.",
  //   icon: "/icons/service-5.svg",
  // },
  // {
  //   id: 6,
  //   name: "Mobile-Friendly Coding",
  //   description:
  //     "Proficiency in coding practices that ensure websites function seamlessly on mobile devices.",
  //   icon: "/icons/service-6.svg",
  // },
];
export const benefits = [
  {
    id: 1,
    name: "Customized Development Aligned with Your Brand",
    description:
      "I recognize the importance of translating your brand identity into a unique website. By closely collaborating with you, I ensure that your website embodies your brand's personality, values, and objectives. The result is a custom-developed platform that distinguishes you from competitors and resonates with your target audience.",
  },
  {
    id: 2,
    name: "Creative Coding for Visitor Engagement",
    description:
      "With a strong sense of aesthetics and a creative drive, I specialize in coding visually stunning and engaging websites. By integrating elegant code structures, interactive elements, and strategic design principles, I craft an immersive and impactful user experience. Your website will captivate visitors, enhancing your brand's credibility and professionalism.",
  },
  {
    id: 3,
    name: "User-Centric Development for Enhanced Experience",
    description:
      "I prioritize user experience (UX) development, focusing on your visitors throughout the coding process. Through extensive research and user testing methodologies, I ensure that your website is intuitive, easy to navigate, and guides users effectively. The outcome is a gratifying user journey that boosts engagement and conversions.",
  },
  {
    id: 4,
    name: "Mobile-Optimized Coding for Widespread Accessibility",
    description:
      "In today's mobile-driven landscape, a responsive website is essential. I specialize in coding mobile-friendly designs that seamlessly adapt to various devices and screen sizes. Your website will maintain its appearance and functionality across desktops, smartphones, and tablets, allowing you to reach and engage your audience effectively.",
  },
  {
    id: 5,
    name: "Proficiency in Advanced Coding Technologies",
    description:
      "With expertise in HTML, CSS, JavaScript, and cutting-edge front-end technologies, I possess the technical prowess to execute your design concepts. From seamless animations to interactive features, I leverage the latest coding technologies to elevate user engagement and deliver a dynamic user experience.",
  },
];
export const portfolios = [
  {
    id: 1,
    title: "SoapDelight.J",
    link: "https://soapdelight-j.onrender.com/",
    images: [
      "/images/SoapDelight-1.png",
      "/images/SoapDelight-2.png",
      "/images/SoapDelight-3.png",
    ],
  },
  {
    id: 2,
    title: "Schon",
    link: "https://schon-seven.vercel.app/",
    images: [
      "/images/Schon-1.png",
      "/images/Schon-2.png",
      "/images/Schon-3.png",
      "/images/Schon-4.png",
      "/images/Schon-5.png",
      "/images/Schon-6.png",
    ],
  },
  // {
  //   id: 3,
  //   title: "Skill Bridge Website",
  //   link: "#",
  //   images: [
  //     "/images/portfolio-3.png",
  //     "/images/portfolio-1.png",
  //     "/images/portfolio-2.png",
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Current Vandi Website",
  //   link: "#",
  //   images: [
  //     "/images/portfolio-4.png",
  //     "/images/portfolio-5.png",
  //     "/images/portfolio-6.png",
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Fit Fusion Gym Website",
  //   link: "#",
  //   images: [
  //     "/images/portfolio-5.png",
  //     "/images/portfolio-6.png",
  //     "/images/portfolio-7.png",
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "DX Digital Agency Website",
  //   link: "#",
  //   images: [
  //     "/images/portfolio-6.png",
  //     "/images/portfolio-7.png",
  //     "/images/portfolio-8.png",
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "Little Learners Website",
  //   link: "#",
  //   images: [
  //     "/images/portfolio-7.png",
  //     "/images/portfolio-8.png",
  //     "/images/portfolio-9.png",
  //   ],
  // },
  // {
  //   id: 8,
  //   title: "StreamVibe Website",
  //   link: "#",
  //   images: [
  //     "/images/portfolio-8.png",
  //     "/images/portfolio-9.png",
  //     "/images/portfolio-4.png",
  //   ],
  // },
  // {
  //   id: 9,
  //   title: "YourBank Website",
  //   link: "#",
  //   images: [
  //     "/images/portfolio-9.png",
  //     "/images/portfolio-4.png",
  //     "/images/portfolio-5.png",
  //   ],
  // },
];
export const reviews = [
  {
    id: 1,
    name: "Sarah Thompson",
    designation: "CEO Texo",
    review:
      "Waseem Anjum is an incredibly talented web develioper. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Waseem was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Waseem for anyone looking to elevate their online presence.",
    stars: 5,
    socialLinks: [
      {
        id: 1,
        icon: Facebook,
        url: "#",
      },
      {
        id: 2,
        icon: Linkedin,
        url: "#",
      },
      {
        id: 3,
        icon: Twitter,
        url: "#",
      },
    ],
  },
  {
    id: 2,
    name: "Emily Roberts",
    designation: "CEO Texo",
    review:
      "Waseem Anjum is an incredibly talented web develioper. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Waseem was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Waseem for anyone looking to elevate their online presence.",
    stars: 3,
    socialLinks: [
      {
        id: 1,
        icon: Facebook,
        url: "#",
      },
      {
        id: 2,
        icon: Linkedin,
        url: "#",
      },
      {
        id: 3,
        icon: Twitter,
        url: "#",
      },
    ],
  },
  {
    id: 3,
    name: "Emily Roberts",
    designation: "CEO Texo",
    review:
      "Waseem Anjum is an incredibly talented web develioper. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Waseem was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Waseem for anyone looking to elevate their online presence.",
    stars: 5,
    socialLinks: [
      {
        id: 1,
        icon: Facebook,
        url: "#",
      },
      {
        id: 2,
        icon: Linkedin,
        url: "#",
      },
      {
        id: 3,
        icon: Twitter,
        url: "#",
      },
    ],
  },
  {
    id: 4,
    name: "Emily Roberts",
    designation: "CEO Texo",
    review:
      "Waseem Anjum is an incredibly talented web develioper. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Waseem was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Waseem for anyone looking to elevate their online presence.",
    stars: 4,
    socialLinks: [
      {
        id: 1,
        icon: Facebook,
        url: "#",
      },
      {
        id: 2,
        icon: Linkedin,
        url: "#",
      },
      {
        id: 3,
        icon: Twitter,
        url: "#",
      },
    ],
  },
  {
    id: 5,
    name: "Emily Roberts",
    designation: "CEO Texo",
    review:
      "Waseem Anjum is an incredibly talented web develioper. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Waseem was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Waseem for anyone looking to elevate their online presence.",
    stars: 4,
    socialLinks: [
      {
        id: 1,
        icon: Facebook,
        url: "#",
      },
      {
        id: 2,
        icon: Linkedin,
        url: "#",
      },
      {
        id: 3,
        icon: Twitter,
        url: "#",
      },
    ],
  },
];
export const certs = [
  {
    id: 1,
    certName: "Master in Counselling and Psychotherapy",
    organization:
      "University of Saint Joseph",
    date:"2016"
  },
  {
    id: 2,
    certName: "Licentiate in Psychology",
    organization:
      "University of Saint Joseph",
    date:"2013"
  },

];
export const socialLinks = [
  // {
  //   id: 1,
  //   label: "Facebook",
  //   icon: Facebook,
  //   url: "#",
  // },
  {
    id: 1,
    label: "Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/carrey-cheang-762087247/",
  },

];
export const contactDetails = [
  {
    id: 1,
    icon: Phone,
    text: "+853 6636 9509",
  },
  {
    id: 2,
    icon: Mail,
    text: "carrey.120.cc@gmail.com",
  },
  {
    id: 3,
    icon: MapPin,
    text: "Macau, China",
  },
];
export const timeline = [
  {
    id: 1,
    title: "Director of the Centre",
    duration: "2023 - now",
    description:
      "I was appointed as the Director of Noah Family Mutual Aid Association in 2023, managing organizational affairs, formulating policies in the centre, monitoring operations, coordination departments, organizing activities and services, representing the organization, managing resources, maintaining records, handling special cases, and reporting to the board.",
  },
  {
    id: 2,
    title: "Counselor",
    duration: "2019 - 2023",
    description:
      "From 2019 to 2023, I worked as a counselor in Noah Family Mutual Aid Association , assisting individuals who had successfully overcome substance addiction in reitegrating into society.",
  },
  {
    id: 3,
    title: "Master of Counselling and Psychotheropy",
    duration: "2016",
    description:
      "Graduated in University of Saint Joseph, Macao in 2016.",
  },
  {
    id: 4,
    title: "Counselor",
    duration: "2013 - 2018",
    description:
      "Since 2013, I have been working as a psychological counselor, assisting clients in adapting to the drug rehabilitation program at the center.",
  },
  {
    id: 5,
    title: "Event Coordinator",
    duration: "2011 - 2013",
    description:
      "From the last year of university, I started working as an Event Coordinator at the DESAFI JOVEM TEEN CHALLENGE, responsible for organizing events and coordinating programs.",
  },
  {
    id: 6,
    title: "Bechelor in Pyscology",
    duration: "2008 - 2013",
    description:
      "Graduated in University of Saint Joseph, Macao in 2013.",
  },
  {
    id: 7,
    title: "Sales",
    duration: "2007 - 2011",
    description:
      "Worked as a salesperson at SENG IP PEN & LIGHTER, responsible for sales and inventory management.",
  },
  
];