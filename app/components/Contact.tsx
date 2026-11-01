
import Image from "next/image";
import ContactForm from "./ContactForm";
import SectionObserver from "./SectionObserver";

export default function Contact() {

  return (
    <section id="contact" className="flex-center-center" style={{ padding: "50px 2.5vw 50px"}}>
      <SectionObserver sectionId="contact"></SectionObserver>
      <div className="contact-wrapper">
        <div className="lily-bg">
          <h1 className="centered-text about-title">Contact Us</h1>
          <h3 className="centered-text">Interested in selling our products or a collab? Contact us!</h3>
          <ContactForm></ContactForm>
        </div>
        
        
      </div>
    </section>
  );
}
