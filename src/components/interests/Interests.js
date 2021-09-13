import React from "react";
import "./interests.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Interests() {
  return (
    <div className="interest_pages">
      <h1 className="interest_heading">Interest</h1>

      <p className="mb-5">
        Currently working towards learning new technologies like TypeScript,
        GraphQL and Devops. <br /> Would like to participate in hackathones and
        other community driven tasks!
      </p>
      <div className="socials_icons d-flex justify-content-center mt-5">
        <a href="https://github.com/mohanthilak" className="github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohan-thilak/"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="MohanThilak4" className="twitter">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
      </div>
    </div>
  );
}
