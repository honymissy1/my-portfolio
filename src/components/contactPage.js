import '../styles/contact.css'
import Image from '../images/work.gif';
import Facebook from '../images/facebook.gif'
import Whatsapp from '../images/whatsapp.gif'
import Linkedin from '../images/linkedin.gif'
import Github from '../images/github.gif';
import Back from '../images/back.png'
// import { Link } from "react-router-dom";



function ContactPage() {
  return (
    <div className="contact">
     <div className="grid-container">
       <div className="grid-image">
         <img src={Image} alt="Starting work" />
       </div>
       <form>
         <input type="text" placeholder="E-mail Address"/>
         <textarea name="" id="" cols="15" rows="10" style={{width: '100%'}}></textarea>
         <input className="grid-button" type="submit" value="Send" />
       </form>
       <div className="grid-description">
         <h3>Let's work</h3>
         <p style={{color: 'white'}}>
           Working with me give your company the upper hand,
           I deliver fast and execute projects right on time,
           lucky you've found the right developer then contact me 
           and let's get your jobs done.
         </p>

         <h4>- Technologies -</h4>
         <ul class="skill-ul">
           <li>Html</li>
           <li>Css</li>
           <li>Bootstrap</li>
           <li>JavaScript</li>
           <li>React Js</li>
           <li>Redux</li>
           <li>Node Js</li>
           <li>MongoDb</li>
           <li>Figma</li>
         </ul>
       </div>
       

       <div className="social-media">
         <p style={{textAlign: 'center', fontSize: '1.4em'}}>Or</p>
         <div className="social-content">
           <a href='https://www.linkedin.com/in/onimisi-owolewa-693a06168/'>
             <img src={Linkedin} alt="facebook logo" />
           </a>

           <a href='tel:+2348155550465'>
             <img src={Whatsapp} alt="facebook logo" />
           </a>

           <a href='https://github.com/honymissy1/'>
             <img src={Github} alt="facebook logo" />
           </a>

           <a href='https://www.facebook.com/honymissy.owolewa.1/'>
             <img src={Facebook} alt="facebook logo" />
           </a>

         </div>
       </div>

     </div>
    </div>
  );
}

export default ContactPage;