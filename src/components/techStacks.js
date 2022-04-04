import Css from '../images/technologies/css.png'
import Bootstrap from '../images/technologies/bootstrap.png'
import Javascript from '../images/technologies/javascript.png'
import mongo from '../images/technologies/mongo.png';
import node from '../images/technologies/node.png';
import react from '../images/technologies/react.png';
import redux from '../images/technologies/redux.png';

function TechStacks() {
  return (
    <div>
      <div className="techStacks">
          <div className="marquee">
             <img src={Css} alt="" />
             <img src={Bootstrap} alt="" />
             <img src={Javascript} alt="" />
             <img src={mongo} alt="" />
             <img src={node} alt="" />
             <img src={react} alt="" />
             <img src={redux} alt="" />
          </div>
      </div>
    </div>
  );
}

export default TechStacks;