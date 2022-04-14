// import Nav from './nav';
import Main from './mainBody'
import About from './about';
import TechStacks from './techStacks';
import Contact from './contact';


function Apps() {
  return (
    <div className="App">
      <Main />
      <TechStacks />
      <About />

      <Contact />
    </div>
  );
}

export default Apps;
