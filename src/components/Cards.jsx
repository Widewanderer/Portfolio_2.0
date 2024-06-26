import Card from "react-bootstrap/Card";
import * as projects from "../assets";

// use media queries to make the cards responsive
// try making seperate css file (cards.module.css) and import it here
// "choice".module.file type

function ProjectCard({ project }) {
  const { name, repo, link, description, image } = project;
  return (
    <Card style={{ width: "30rem", margin: "10px", marginTop: "25px",}}>
      <a href={link}>
        <Card.Img
          // style={{ height: "280px" }} // add justify content center or space between & delete height
          variant="top"
          src={projects[image]}
          alt={name}
        />
        <Card.Title>{name}</Card.Title>
      </a>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Link href={repo}>
        {" "}
        <i className="fab fa-github" style={{ fontSize: "30px" }}></i> GitHub
      </Card.Link>
    </Card>
  );
}

function ProjectCardList({ projects }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "5%",
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

//export default ProjectCard;
export default ProjectCardList;
