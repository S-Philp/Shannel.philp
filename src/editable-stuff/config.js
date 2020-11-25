// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shannel",
  middleName: "",
  lastName: "Philp",
  message: " Web Software Developer | Excited to build with you! ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/S-Philp",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shannel-philp/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Me_copy.jpg"),
  imageSize: 375,
  message:
    "I am Shannel Philp, a determined full stack developer who has just transitioned out of the oil and gas industry. I am currently a student at DigitalCrafts where I have learned full-stack development. I am looking for a new opportunity in a culture that fosters growth, learning and contribution to the big picture by utilizing my previous years of demonstrated performance experience creating order from chaos, independent analysis, problem-solving and strong organizational skills.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "S-Philp", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Recipes-Project", "frontend_project"],
};

// Leadership SECTION
const leadership = {
  // show: false,
  // heading: "Leadership",
  // message:
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  // images: [
  //   { 
  //     img: require("../editable-stuff/hashirshoaeb.png"), 
  //     label: "First slide label", 
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
  //   },
  //   { 
  //     img: require("../editable-stuff/hashirshoaeb.png"), 
  //     label: "Second slide label", 
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
  //   },
  // ],
  // imageSize: {
  //   width:"615",
  //   height:"450"
  // }
};

// SKILLS SECTION

const  newSkills = {
  show: true,
  heading: "Skills",
  // message:
  //   "I'm currently looking for Software Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  // email: "shannel.philp@yahoo.com",
}

const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    // { name: "Python", value: 90 },
    // { name: "SQL", value: 75 },
    // { name: "Data Structures", value: 85 },
    // { name: "C/C++", value: 65 },
    // { name: "JavaScript", value: 90 },
    // { name: "React", value: 65 },
    // { name: "HTML/CSS", value: 55 },
    // { name: "C#", value: 80 },
  ],
  softSkills: [
    // { name: "Goal-Oriented", value: 80 },
    // { name: "Collaboration", value: 90 },
    // { name: "Positivity", value: 75 },
    // { name: "Adaptability", value: 85 },
    // { name: "Problem Solving", value: 75 },
    // { name: "Empathy", value: 90 },
    // { name: "Organization", value: 70 },
    // { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Developer opportunities! If you know of any positions available, or if you have any questions, please feel free to email me at",
  email: "shannel.philp@yahoo.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, newSkills };
