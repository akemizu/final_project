import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import "./footer.css";

import logoImg from '../../assets/logo-white.png';

const contacts = [
  { icon: faLocationDot, info: "123 Random Avenue, Chicago, IL 60602" },
  { icon: faPhone, info: "+1 (872) 555-5555" },
  { icon: faEnvelope, info: "info@littlelemon.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faInstagram, name: "instagram" },
  { icon: faTwitter, name: "twitter" },
  { icon: faYoutube, name: "youtube" },
];

const Footer = ({ navLinks }) => {
  return (
    <footer className="site-footer">
      <img
        className="site-footer-logo"
        src={logoImg}
        alt="Little Lemon"
      />
      <nav className="site-footer-nav">
        <h4>Site Menu</h4>
        <ul>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <HashLink to={navLink.path}>{navLink.name}</HashLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="site-footer-contact">
        <h4>Contact Us</h4>
        <address>
          {contacts.map((contact, index) => (
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          ))}
        </address>
      </div>
      <div className="site-footer-social">
        <h4>Social Media</h4>
        {socials.map((social, index) => (
          <a
            key={index}
            href={`https://www.${social.name}.com`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
