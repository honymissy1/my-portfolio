import '../styles/nav.css';
// import ListIcon from '@material-ui/icons/List';
// import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useEffect} from 'react';
// import navInfo from '../assets/navInfo';

function Nav() {
  useEffect(() =>{
    console.log('Used');
    const list = document.querySelectorAll('nav ul li');
    
    list.forEach(ele =>{
      ele.onclick = () =>{
        const nav = document.querySelector('nav');
        const overlay = document.querySelector('.overlay')
        const bar = document.querySelectorAll('.bar > div');
        bar.forEach((ele, index) =>{
          ele.classList.remove('bar'+(index+1))
         })
        nav.classList.remove("change"); 
        overlay.classList.remove('overlay-display')
        console.log(ele.textContent);
      }
    })
    
  },[])
  const navToggle = () =>{
    const nav = document.querySelector('nav');
    const bar = document.querySelectorAll('.bar > div');
    const overlay = document.querySelector('.overlay')


    nav.classList.toggle("change");     
    overlay.classList.toggle('overlay-display')
    bar.forEach((ele, index) =>{
     ele.classList.toggle('bar'+(index+1))
    })
  }

  const overlay = () =>{
    const overlay = document.querySelector('.overlay')
    const nav = document.querySelector('nav');
    const bar = document.querySelectorAll('.bar > div');

    bar.forEach((ele, index) =>{
      ele.classList.toggle('bar'+(index+1))
     })
    nav.classList.toggle('change');
    overlay.classList.toggle('overlay-display')
   }
    return (
      <>
        <div className="bar" onClick={navToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="overlay" onClick={overlay}></div>
      <nav>
       
        <div className="logo">
          <h3>{'<owolewaBamidele />'}</h3>
        </div>

        <ul>
          <li>Home</li>
           <li><a href="#project">Project</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#contact">Contact Me</a></li>        
        </ul>
      </nav>
      </>
    )
  }
  
  export default Nav;