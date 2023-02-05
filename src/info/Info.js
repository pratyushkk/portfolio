import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";

//export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

//export let colors = ["rgb(182,251,255)", "rgb(131,164,212)"];

export let colors = [
  "rgb(238,68,92)",
  "rgb(245,98,163)",
  "rgb(167,119,226)",
  "rgb(46,161,182)",
];

export const info = {
  firstName: "Pratyush",
  lastName: "Nayak",
  initials: "</>",
  position: "a Web Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by chai",
    },
    {
      emoji: "🌎",
      text: "based in India",
    },
    {
      emoji: "💼",
      text: "Full-stack Web Developer intern @ iNeuron.ai",
    },
    {
      emoji: "📧",
      text: "pratyushkk.nayak@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://instagram.com/pratyushkk.dev",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/pratyushkk",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/pratyushkknayak",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/pratyushkk_",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    {
      link: "https://blog.pratyushkk.in/",
      icon: "fa fa-pencil-square",
      label: "hashnode",
    },
  ],
  bio: "Hello! I'm Pratyush. I'm a frontend developer looking to leverage my passion for building engaging products and user experiences. Skilled in JavaScript, React, Tailwind CSS,Bootstrap, HTML & CSS. With excellent communication skills and always ready to learn new skill sets, I am also a great team player and a self-starter that likes to engage in a logical thinking approach to problem-solving.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "Tailwind CSS",
      "html5",
      "css3",
    ],
    exposedTo: ["nodejs", "Express.js", "MongoDB"],
  },
  hobbies: [
    {
      label: "biking",
      emoji: "🏍️",
    },

    {
      label: "movies",
      emoji: "🎥",
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Movie Recommendation App",
      live: "https://watcher-co.netlify.app/",
      source: "https://github.com/pratyushkk/movie-streaming-app",
      image: mock1,
    },
    {
      title: "Modern UI/UX Landing Page",
      live: "https://zippy-marigold-34e445.netlify.app/",
      source: "https://github.com/pratyushkk/modern-UI-UX-landing_page",
      image: mock2,
    },
    {
      title: "Calculator",
      live: "https://myjscalculator001.netlify.app/",
      source: "https://github.com/pratyushkk/Calculator",
      image: mock3,
    },
    {
      title: "Autocomplete Search Bar",
      live: "https://stupendous-treacle-039cba.netlify.app/",
      source: "https://github.com/pratyushkk/Autocomplete-Search-Bar",
      image: mock4,
    },
    {
      title: "Hex Code Generator",
      live: "https://dainty-pudding-4f9077.netlify.app",
      source: "https://github.com/pratyushkk/Hex-Code-Generator",
      image: mock5,
    },
    {
      title: "Word Counter App",
      live: "https://word-counter-application.netlify.app/",
      source: "https://github.com/pratyushkk/Word-counter-app",
      image: mock6,
    },
  ],
};
