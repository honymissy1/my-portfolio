
function ProjectCard({tools}) {
  return (
    <div className="project-card">
        <div className="card-image"></div>
        <div className="card-content">
            <h1>Shopping App</h1>

            <ol style={{display: 'inline'}}>Tools - </ol>
            <p  style={{display: 'inline'}} className="tools">Html | Css |  JavaScript</p>
            <p className="description">
                Lorem ipsum dolor sit amet consectetur
                 adipisicing elit.
                 Fugiat, quae numquam!
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, aliquam ducimus!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dicta quod.
            </p>

        </div>

        <div className="cta">
            <button>View Code</button>
            <button>View Site</button>
        </div>
    </div>
  );
}

export default ProjectCard;


