import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import useContact from "./useContact";

const ContactInfo = () => {
  const { contactsData } = useContact();

  return (
    <div className="contact-info">
      <h2>Susisiekime</h2>

      <p>
        Jeigu domina bendradarbiavimas arba turi klausimų, parašyk man.
        Atsakysiu kaip įmanoma greičiau.
      </p>

      <div className="contact-item">
        <FaEnvelope />
        <span>{contactsData.email}</span>
      </div>
      <div className="contact-item">
        <FaPhoneAlt />
        <span>{contactsData.phone}</span>
      </div>
      <div className="contact-item">
        <FaMapMarkerAlt />
        <span>{contactsData.location}</span>
      </div>

      <div className="contact-socials">
        <a href={contactsData.github} target="_blank" rel="noreferrer">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a href={contactsData.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
