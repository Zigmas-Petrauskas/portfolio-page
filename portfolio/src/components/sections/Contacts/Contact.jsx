import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;
