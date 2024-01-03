// utils.js

export const changeNavbarColor = (setColorchange) => {
  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export const skillvalues = [
  {
    index: 1,
    logo: "devicon-react-original",
    Name: "React",
    Description: "Library for web and User interfaces."
  },
  {
    index: 2,
    logo: "devicon-html5-plain",
    Name: "HTML5",
    Description: "Static webpages and portfolio projects"
  },
  {
    index: 3,
    logo: "devicon-css3-plain",
    Name: "CSS",
    Description: "For bringing the appearance and formatting of web pages"
  },
  {
    index: 4,
    logo: "devicon-javascript-plain",
    Name: "Javascript",
    Description: "For enhancing the functionality of websites and general scripting"
  },
  {
    index: 5,
    logo: "devicon-mongodb-plain",
    Name: "MongoDb",
    Description: "For storing client and user data"
  },
  {
    index: 6,
    logo: "devicon-tailwindcss-plain",
    Name: "Tailwind CSS",
    Description: "CSS framework to quickly build responsive web pages"
  },
  {
    index: 7,
    logo: "devicon-redux-original",
    Name: "Redux",
    Description: "To manage the state of an application in a consistent way"
  },
  {
    index: 8,
    logo: "devicon-nodejs-plain",
    Name: "NodeJs",
    Description: "To write server-side scripts"
  },
  {
    index: 9,
    logo: "devicon-express-original",
    Name: "Express",
    Description: "Framework for developing server-side applications in JavaScript using Node.js"
  },
  {
    index: 10,
    logo: "devicon-nextjs-plain",
    Name: "Next Js",
    Description: "Used for making web pages with server-side rendering"
  },
  {
    index: 11,
    logo: "devicon-nginx-original-wordmark",
    Name: "Nginx",
    Description: "Used for web hosting, load balancing, and reverse proxying"
  },
  {
    index: 12,
    logo: "devicon-git-plain",
    Name: "Git",
    Description: "Used for version control and collaborating on projects"
  },
  {
    index: 13,
    logo: "devicon-github-original",
    Name: "Github",
    Description: "Managing repositories and project deployment"
  },
  {
    index: 14,
    logo: "devicon-figma-plain",
    Name: "Figma",
    Description: "Designing websites and prototyping"
  },
];


