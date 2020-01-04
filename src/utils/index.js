import emaily from "../assets/images/emaily.png";
import myportfolio from "../assets/images/portfolio.png";
import bookshelf from "../assets/images/bookshelf.png";
import expressjs from "../assets/images/expressjs.svg";
import brickhouse from "../assets/images/brickhouse.png";
import resume from "../assets/Resume.pdf";

export const works = [
  {
    image: myportfolio,
    name: "My Portfolio",
    link: "https://nervous-bhabha-4fcb5f.netlify.com/",
    about:
      "Welcome to my portfolio that you are seeing now!  I built this from design and wrote with React without any CSS framework.",
    githublink: "https://github.com/ShotaTogawa/portfolio"
  },
  {
    image: bookshelf,
    name: "BookShelf",
    link: "https://bookshelf112.herokuapp.com/user",
    about:
      "BookShelf is my first full stack project built by MERN stuck. This helps to manage your reading status easily.",
    githublink: "https://github.com/ShotaTogawa/bookshelf-prod"
  },
  {
    image: emaily,
    name: "Emaily",
    link: "https://still-fjord-95766.herokuapp.com/",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natusillum expedita, at distinctio nesciunt.",
    githublink: "https://github.com/ShotaTogawa/emaily"
  },
  {
    image: brickhouse,
    name: "Brickhouse Project",
    link: "https://vigorous-visvesvaraya-70500e.netlify.com/",
    about:
      "This is a school team project to make a client homepage by using React .",
    githublink: "https://github.com/ShotaTogawa/Brickhouse-shcool-project"
  }
];

export const icons = [
  {
    url: resume,
    icon: "fas fa-file",
    name: "Resume"
  },
  {
    url: "https://github.com/ShotaTogawa",
    icon: "fab fa-github",
    name: "Github"
  },
  {
    url: "https://www.linkedin.com/in/shota-togawa-ba8235185/",
    icon: "fab fa-linkedin",
    name: "Linkedin"
  },
  {
    url: "https://twitter.com/shota54802490",
    icon: "fab fa-twitter",
    name: "Twitter"
  }
  // {
  //   url:
  //     "https://www.facebook.com/togawa.shota?viewas=100000686899395&privacy_source=timeline_gear_menu&entry_point=action_bar#_",
  //   icon: "fab fa-facebook-square",
  //   name: "Facebook"
  // }
];

export const frontEnd = [
  {
    icon: "fab fa-html5",
    skill: "HTML5",
    color: "#DE4B24",
    level: 2
  },
  {
    icon: "fab fa-css3-alt",
    skill: "CSS3",
    color: "#1773AC",
    level: 2
  },
  {
    icon: "fab fa-js",
    skill: "JavaScript",
    color: "#E9D64D",
    level: 1
  },
  {
    icon: "cib-typescript",
    skill: "TypeScript",
    color: "#0377C7",
    level: 3
  },
  {
    icon: "fab fa-react",
    skill: "React",
    color: "#02D3F7",
    level: 1
  }
  // {
  //   icon: "fab fa-bootstrap",
  //   skill: "BootStrap",
  //   color: "#543D79",
  //   level: 2
  // },
  // {
  //   icon: "",
  //   skill: "Semantic UI",
  //   color: "#33B8AD",
  //   level: 1
  // }
];

export const backEnd = [
  {
    icon: "fab fa-python",
    skill: "Python",
    color: "#0461B4",
    level: 2
  },
  {
    icon: "fab fa-node",
    skill: "Nodejs",
    color: "#82CA25",
    level: 1
  },
  {
    // icon: "fab fa-cc-amex",
    icon: expressjs,
    skill: "Express",
    color: "#02D3F7",
    level: 1
  },
  {
    icon: "fas fa-database",
    skill: "PostgreSql",
    color: "#315F8E",
    level: 1
  },
  {
    icon: "fab fa-envira",
    skill: "MongoDB",
    color: "#4AA93C",
    level: 2
  }
];

export const infrastructure = [
  {
    icon: "fab fa-aws",
    skill: "AWS",
    color: "#222F3C",
    level: 3
  },
  {
    icon: "fab fa-docker",
    skill: "Docker",
    color: "#3493D0",
    level: 3
  },
  {
    icon: "fab fa-docker",
    skill: "CI/CD",
    color: "#02D3F7",
    level: 3
  }
];

export const others = [
  {
    icon: "fab fa-git",
    skill: "Git",
    color: "#3B2C00",
    level: 2
  },
  {
    color: "#312f30",
    icon: "fab fa-github",
    skill: "Github",
    level: 2
  }
];

export const appsDetail = [
  {
    name: "My Portfolio",
    description: "This is my portfolio website to introduce myself. ",
    stuck: "HTML5, CSS3, React, Netlify",
    image: myportfolio,
    link: "https://nervous-bhabha-4fcb5f.netlify.com/"
  },
  {
    name: "BookShelf",
    description:
      "This is my first personal project from scratch by MERN Stack. In this application, you can manage your reading status by registering your books. Also, you can take memos for each books.Please feel free to play my app. Login info of test user is 'email: test@test.com / password: 123456'",
    stuck: "HTML5, CSS3, React, MongoDB, Express, Amazon S3, Heroku",
    image: bookshelf,
    link: "https://bookshelf112.herokuapp.com/"
  },
  {
    name: "Brickhouse project",
    description:
      "This is a school project to make client HP by using React with my teammate.",
    stuck: "HTML5, CSS3, React",
    image: brickhouse,
    link: "https://vigorous-visvesvaraya-70500e.netlify.com/"
  },
  {
    name: "Emaily",
    description:
      "I learned how to build a fullstack web application by MERN stack through this application. In this application, you can send email to your client to survey customer needs.",
    stuck:
      "HTML5, CSS3, MongoDB, Express, React, Node, Send Grid, Strip, Heroku, MaterialUI",
    image: emaily,
    link: "https://still-fjord-95766.herokuapp.com/"
  }
];
