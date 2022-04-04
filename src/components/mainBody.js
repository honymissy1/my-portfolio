import '../styles/mainBody.css';
import Image from '../images/hero.gif'

function Main() {
  return (
    <div className="main">
            <div className="content">
              <h1>This is who?</h1>
                <p>
                    My name is Onimisi Owolewa, a full stack web developer with vast
                    experience in modern web development 
                    framework that gives your brand the confidence 
                    it deserves.
                </p>
                <br/>
                <p style={{color: 'white'}}>Welcome to my world</p>
                <button>Explore</button>
            </div>
      
           <div className="image">
               <img src={Image} alt="hero" />
           </div>
    </div>
  );
}

export default Main;
