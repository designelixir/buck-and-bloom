
import Image from "next/image";
import ContactForm from "./ContactForm";
import SectionObserver from "./SectionObserver";

export default function Contact() {

  return (
    <section id="contact" className="flex-center-center" style={{ padding: "50px 2.5vw 50px"}}>
      <SectionObserver sectionId="contact"></SectionObserver>
      <div className="contact-wrapper">
        <h1 className="centered-text about-title">Contact Us</h1>
        <h3 className="centered-text">Interested in selling our products or a collab? Contact us!</h3>
        <ContactForm></ContactForm>
        <div className="flex-center-center" style={{marginTop: '-180px'}}>
          <Image src="/lily-detail.png" alt="lily detail" height={300} width={400} style={{opacity: '0.25'}}/>
        </div>
        
      </div>
    </section>
  );
}
