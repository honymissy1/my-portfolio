import ProjectCard from './projectCard'
import '../styles/project.css';
import { Link } from "react-router-dom";

function Projects({showButton, fullProject}) {
  return (
    <div className="project">
      <div className="header">
        <h1>Projects</h1>
        <h3>Projects</h3>
      </div>

      <div className="project-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />

        {
         fullProject ? (<>
         <ProjectCard />
         <ProjectCard />
         <ProjectCard />
         </>
         ): ('')
        }

      </div>
      {showButton ? (<Link to="more"><h1 className="more">More Projects</h1></Link>) : (<Link to="/"><h1 className="more">Back</h1></Link>)}   
    </div>
  );
}


export default Projects;