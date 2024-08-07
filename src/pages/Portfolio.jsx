import ProjectCard from "../components/Cards.jsx";
import ProjectCardList from "../components/Cards.jsx";

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statment in index.js
  const projects = [
    {
      name: "Cultured Cusine",
      description:
        "A team built Recipe site which emerses the user in the culture of the cuisine's region. Recipes are classified by region and accoumpanied by cultural information from said region. ",
      // live site
      link: "https://culturedcuisine-59da43e6096e.herokuapp.com/",
      // github repo
      repo: "https://github.com/Widewanderer/CulturedCuisine",
      // name of project image
      image: "culturedCuisine",
    },
    {
      name: "Would You Rather",
      description:
        " Would You Rather is a polling based website. Users can create an account, create, edit, and delete polls in their profiles, as well as cast votes for polls created by other users. Website is a full-stack application built using React in coordination with a small group of developers.",
      link: "https://wyr-3b5b304bab70.herokuapp.com/",
      repo: "https://github.com/Widewanderer/Would-You-Rather-Quizes?tab=readme-ov-file",
      image: "WouldYouRather",
    },
    {
      name: "Tech Blog",
      description:
        "A simple CMS style blog site built in the MVC paradigm structure. Finished version of site will allow users to sign in, make, edit, and delete posts, as well as comment on posts. Website uses Sequilize for ORM, and the express-session npm package for authentication.",
      link: "https://the-great-slavic-tech-blog-4107dec86ccf.herokuapp.com/",
      repo: "https://github.com/Widewanderer/Tech-Blog",
      image: "TechBlog",
    },
    {
      name: "Melody Mapper",
      description:
        "A team built live music application that can search concerts in the Nashville area. Users can search by band name, date, and even add specific performances to favorites section. Concerts are displaye with nearest date on top. Links are provided for purchase of tickets.",
      link: "https://pgold762.github.io/MelodyMapper/",
      repo: "https://github.com/PGold762/MelodyMapper",
      image: "MelodyMapper",
    },
  ];
  // for each project, use the Project component to build a project
  return (
    <div>
      <ProjectCardList projects={projects} />
    </div>
  );
}

export default Portfolio;
