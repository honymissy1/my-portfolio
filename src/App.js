import Apps from './components/Apps';
import { Routes, Route } from "react-router-dom";
import ContactPage from './components/contactPage';
import Nav from "./components/nav";
import MoreProject from './components/moreProject'

function App() {
  return (
    <div>
        <Nav />
     <Routes>
        <Route path="/" element={<Apps />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="more" element={<MoreProject showButton={true} fullProject={false} />} />
      </Routes>
    </div>
  );
}

export default App;
