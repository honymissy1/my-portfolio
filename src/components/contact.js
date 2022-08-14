import '../styles/contact.css'
import { Link } from "react-router-dom";
import ContactPage from './contactPage'
// import ContactImage from '../images/contact.jpg';
function Contact() {
  return (
    <div id="contact" className="contact">
      <ContactPage />
    </div>
  );
}

export default Contact;