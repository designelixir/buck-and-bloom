
import Image from "next/image";
import ContactForm from "./ContactForm";
import SectionObserver from "./SectionObserver";

export default function Contact() {

  return (
    <section id="contact" style={{ padding: "50px 2.5vw"}}>
      <SectionObserver sectionId="contact"></SectionObserver>
        <div className="flex-center-center">
            <Image src="/flora-2.svg" alt="floral detail" height={25} width={25} style={{marginRight: '25px'}}></Image>
            <h1 className="centered-text about-title">Contact Us</h1>
            <Image src="/flora-3.svg" alt="floral detail" height={25} width={25} style={{marginLeft: '25px'}}></Image>
            </div>
        <h3 className="centered-text">Interested in selling our products or a collab? Contact us!</h3>
        <ContactForm></ContactForm>
    </section>
  );
}
