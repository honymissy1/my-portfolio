
import Projects from './projects';
import 'antd/dist/antd.css';
import '../styles/about.css';

import { DatePicker, Button } from 'antd';

function About() {
  const dates = (e) =>{
    console.log(e);
  }
  return (
    <div>
    <div className="about">
    <div className="seperator"></div>
    <div className="about-content">
        <h1 type="secondary">Na we dey with buttons oya smile</h1>
        <Button type="primary">Buttonn</Button>
        <br />
    </div>
    </div>


    <Projects />
    </div>
  );
}

export default About;