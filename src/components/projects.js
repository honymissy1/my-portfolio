import ProjectCard from './projectCard'
import '../styles/project.css';
import { Link } from "react-router-dom";

function Projects({showButton, fullProject}) {
  return (
    <div id="project" className="project">
      <div className="header">
        <h1>Projects</h1>
        <h3>Projects</h3>
      </div>

      <div  className="project-container">
        <ProjectCard 
          title="Threetop Travels"
          tools="Html | Css | JavaScript | Bootsrap"
          description="A travel agency profile website beautiful but simple 
          and easy to use a little bit of bootstrap."
          code="https://github.com/honymissy1"
          site="https://threetop.netlify.app"
        />

<ProjectCard 
          title="Blood Donation"
          tools="Html | Css | JavaScript "
          description="Form website for blood donation sent to client's 
          Gmail through netlify forms."
          code="https://github.com/honymissy1"
          site="https://nwfjalil.netlify.app"
        />

        <ProjectCard 
          title="Simple Portfolio"
          tools="React"
          description="Simple Portfolio Web App build with react Js ."
          code="https://github.com/honymissy1"
          site="https://seif-miehiar.netlify.app"
        />


        {
         fullProject ? (<>
          <ProjectCard 
          tools="Html | Css | JavaScript | Bootsrap"
          description="A travel agency profile website beautiful but simple 
          and easy to use a little bit of bootstrap."
          code="https://github.com/honymissy1"
          site="https://threetop.netlify.app"
        />

        <ProjectCard 
          title=""
          tools="Html | Css | JavaScript "
          description="Form website for blood donation sent to client's 
          Gmail through netlify forms."
          code="https://github.com/honymissy1"
          site="https://nwfjalil.netlify.app"
        />
        <ProjectCard 
        tools="React"
        description="Simple Portfolio Web App build with react Js ."
        code="https://github.com/honymissy1"
        site="https://seif-miehiar.netlify.app"
      />


         </>
         ): ('')
        }

      </div>
      {showButton ? (<Link to="more"><h1 className="more">More Projects</h1></Link>) : (<Link to="/"><h1 className="more">Back</h1></Link>)}   
    </div>
  );
}


export default Projects;