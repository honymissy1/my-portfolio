// import Nav from './nav';
import Main from './mainBody'
import About from './about';
import TechStacks from './techStacks';
import Contact from './contact';
import Nav from './nav';
import Footer from './footer'

function Apps() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <TechStacks />
      <About />

      <Contact />
      <Footer />
    </div>
  );
}

export default Apps;
