import emaily from "../assets/images/emaily.png";
import myportfolio from "../assets/images/portfolio.png";
import bookshelf from "../assets/images/bookshelf.png";
import expressjs from "../assets/images/expressjs.svg";

export const works = [
  {
    image: myportfolio,
    name: "My Portfolio",
    link: "https://nervous-bhabha-4fcb5f.netlify.com/",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus illum expedita, at distinctio nesciunt.",
    githublink: "https://github.com/ShotaTogawa/portfolio"
  },
  {
    image: bookshelf,
    name: "BookShelf",
    link: "https://bookshelf112.herokuapp.com/user",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natusillum expedita, at distinctio nesciunt.",
    githublink: "https://github.com/ShotaTogawa/bookshelf-prod"
  },
  {
    image: emaily,
    name: "Emaily",
    link: "https://still-fjord-95766.herokuapp.com/",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natusillum expedita, at distinctio nesciunt.",
    githublink: "https://github.com/ShotaTogawa/emaily"
  }
];

export const icons = [
  {
    url: "#",
    icon: "fas fa-file",
    name: "Resume"
  },
  {
    url: "#",
    icon: "fab fa-github",
    name: "Github"
  },
  {
    url: "#",
    icon: "far fa-envelope",
    name: "Email"
  },
  {
    url: "#",
    icon: "fab fa-linkedin",
    name: "Linkedin"
  },
  {
    url: "#",
    icon: "fab fa-twitter",
    name: "Twitter"
  },
  {
    url: "#",
    icon: "fab fa-facebook-square",
    name: "Facebook"
  }
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
    skill: "Travis CI",
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
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi expedita ratione itaque, quaerat officiis quia recusandae, pariatur amet odio qui eius incidunt voluptas a in totam temporamolestias, veritatis quod.",
    stuck: "HTML5, CSS3, React, Express, MongoDB",
    image: myportfolio,
    link: "https://nervous-bhabha-4fcb5f.netlify.com/"
  },
  {
    name: "Emaily",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi expedita ratione itaque, quaerat officiis quia recusandae, pariatur amet odio qui eius incidunt voluptas a in totam temporamolestias, veritatis quod.",
    stuck: "HTML5, CSS3, React, Express, MongoDB",
    image: emaily,
    link: "https://still-fjord-95766.herokuapp.com/"
  }
];
