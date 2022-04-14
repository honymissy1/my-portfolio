import '../styles/mainBody.css';
import Image from '../images/hero.gif'

function Main() {
  return (
    <div className="main">
            <div className="content">
              <h1>Hi, I’m Onimisi. Nice to meet you</h1>
                <p>
                Since beginning my journey as a freelance web developer nearly 5 years ago, I've done remote work for agencies, consulted for startups,
                 and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, 
                and perpetually working on improving my chops one design problem at a time.
                </p>
                <br/>
             
                <a href="#tech-stack"><button>Explore</button></a>
            </div>
      
           <div className="image">
               <img src={Image} alt="hero" />
           </div>
    </div>
  );
}

export default Main;
