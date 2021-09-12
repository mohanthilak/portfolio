import "./projects.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <div className="projects_page">
      <h2 className="heading_h2">Projects 💻</h2>

      <div className="projects_div">
        <div className="project">
          <h4>SomeGeek</h4>
          <p className="date">July, 2021</p>
          <a href="https://github.com/mohanthilak/SomeGeekk" className="github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p>
            A web app where you can upload the Question(MCQ only for now) and
            let people vote your answer.
          </p>
          <ul className="tech_specs">
            <li>Built with NodeJS, Express JS and MongoDB.</li>
            <li>
              Used cloudinary to store photes and multer for uploading photes.
              Also used Tesseract JS, an OCR Tool to read the text in the image.
            </li>
            <li>Passport JS for authentication.</li>
            <li>EJS for templating.</li>
          </ul>
        </div>

        <div className="project">
          <h4>Quizo</h4>
          <p className="date">August, 2021</p>
          <a
            href="https://github.com/mohanthilak/quizo-frontend"
            className="github"
          >
            <FontAwesomeIcon icon={faGithub} />
            (frontend)
          </a>
          &emsp;
          <a
            href="https://github.com/mohanthilak/quizo-backend"
            className="github"
          >
            <FontAwesomeIcon icon={faGithub} />
            (backend)
          </a>
          <p>
            A web app where you can take quizzes on your favourite anime and
            also chat with friends.
          </p>
          <ul className="tech_specs">
            <li>Built with React, NodeJS, Express JS and MongoDB.</li>
            <li>
              Used cloudinary to store profile pic, multer for uploading photes,
              Socket.io for real time Duplex communication between server and
              client.
            </li>
            <li>Passport JS for auth</li>
          </ul>
        </div>
        <div className="project">
          <h4>Gojo-Blog</h4>
          <p className="date">July, 2021</p>
          <a href="https://github.com/mohanthilak/SomeGeekk" className="github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p>
            A web app where you can upload the blogs and show it to everyone.
          </p>
          <ul className="tech_specs">
            <li>Built with NodeJS, React JS and JSON-Server.</li>
            <li>made a temporary database using JSON Server.</li>
            <li>NOTE: learnt from a tutorial.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
