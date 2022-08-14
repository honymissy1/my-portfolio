
function ProjectCard({title, tools, description, code, site}) {  
  return (
    <div className="project-card">
        <div className="card-image"></div>
        <div className="card-content">
            <h1>{title}</h1>

            <ol style={{display: 'inline'}}>Tools - </ol>
            <p  style={{display: 'inline'}} className="tools">{tools}</p>
            <p className="description" style={{display:'flex', alignItems: 'center'}}>
               {description}
               </p>

        </div>

        <div className="cta">
            <button><a href={code}>View Code</a></button>
            <button><a href={site} target="_blank" rel="noreferrer">View Site</a></button>
        </div>
    </div>
  );
}

export default ProjectCard;


