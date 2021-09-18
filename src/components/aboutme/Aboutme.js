import "./aboutme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Aboutme() {
  return (
    <div className="aboutme_page">
      <h1>Hey There! 👋</h1>
      <p>
        My name is Mohan Thilak, I am a junior Web-Developer from India. I
        started my coding journey with Web-Dev and haven't hated it even once.
      </p>
      <p>
        I like learning new technologies and building smarter and faster
        products. I like working with people and would love to build amazing
        stuff with like-minded people!
      </p>

      <div className="socials_icons">
        <a href="https://github.com/mohanthilak" className="github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohan-thilak/"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/MohanThilak4" className="twitter">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
      </div>
    </div>
  );
}
