import '../styles/nav.css';
import ListIcon from '@material-ui/icons/List';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import {useState, useEffect} from 'react';
import navInfo from '../assets/navInfo'

function Nav() {
  // eslint-disable-next-line
  const [useNav,setNav] = useState(navInfo)

  useEffect(() =>{
    setNav(useNav)
  }, [useNav])
    const translate = () =>{
        const nav = document.querySelector('ul');
        nav.style.transform = 'translateX(0%)';
        const overlay = document.querySelector('.overlay');
        overlay.style.display = 'block';
        const body = document.querySelector('body');
        body.style.overflow = 'hidden'
        overlay.onclick = () =>{
          cancel()
        }
    }

    const cancel = () =>{
        const nav = document.querySelector('ul');
        nav.style.transform = 'translateX(100%)';
        const overlay = document.querySelector('.overlay');
        overlay.style.display = 'none';
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'

    }

    const resume = (e) =>{
      console.log(e.target.innerText)
    }

    return (
      <div>
        <div className="overlay"></div>
        <nav>
            {/* <div className="box"></div> */}
            <div><h1>{'<'}Honymissy{' />'}</h1></div>

        {/* Nav Items */}
        <ul>
          {
              
            useNav.map(ele =>(<a href={ele.link}  key={ele.id} onClick={resume} className={ele.title}><li>{ele.title}</li></a>))
          }

            <div className="cancel" onClick={cancel}><CloseRoundedIcon fontSize="large"/></div>
        </ul>

            <div className="bar" onClick={translate}><ListIcon fontSize="large"/></div>
        </nav>

        {/* <hr style={{position: 'relative', zIndex: '-4'}} /> */}
      </div>
    );
  }
  
  export default Nav;