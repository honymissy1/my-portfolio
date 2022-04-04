import Nav from './components/nav';
import Main from './components/mainBody'
import About from './components/about';
import TechStacks from './components/techStacks';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <Nav />

      <Main />
      <TechStacks />
      <About />

      <Contact />
    </div>
  );
}

export default App;
