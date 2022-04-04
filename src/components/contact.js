import '../styles/contact.css'
import ContactImage from '../images/contact.jpg';
function Contact() {
  return (
    <div className="contact">
      <div className="contact_container">
         <div className="contact_form">
            <form>
              <label htmlFor="Email" style={{marginTop: '30px'}}>Email</label>
              <input type="text" id="Email" />

              <label htmlFor="message">Message</label>
              <textarea name="" id="message"></textarea>
           
              <input type="submit" value="Submit" />
            </form>


            
         </div>
          <div className="contact_image">
          <img src={ContactImage} alt="contact"/>
         </div>
      </div>
    </div>
  );
}

export default Contact;