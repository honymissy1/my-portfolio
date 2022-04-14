import Projects from "./projects.js";


const MoreProject = ({showButton, fullProject}) =>{
    return(
        <div>
            <Projects showButton={false} fullProject={true} />
        </div>
    )
}

export default MoreProject