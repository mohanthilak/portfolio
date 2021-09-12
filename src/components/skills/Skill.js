import React from "react";
import "./skill.css";

export default function Skill() {
  return (
    <div className="skill-page">
      <h2>Skills 🎯</h2>
      <div className="skills">
        <div className="skill-i">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
          />
          <p>JavaScript</p>
        </div>
        <div className="skill-i">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <p>React</p>
        </div>
        <div className="skill-i">
          <img
            src="https://media.istockphoto.com/vectors/nodejs-vector-logo-backend-programming-in-javascript-server-vector-id1195857274?k=20&m=1195857274&s=170667a&w=0&h=k8oHsv3ehrvhviozLlvhEjGHweiHU7hbBv7bHEkgUqc="
            alt=""
          />
          <p>Node JS</p>
        </div>
        <div className="skill-i">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <p>Mongo DB</p>
        </div>
        <div className="skill-i">
          <img
            src="https://cdn.pngsumo.com/a-brief-tour-of-graphql-dev-graphql-png-200_200.png"
            alt=""
          />
          <p>Graph QL</p>
        </div>
      </div>
    </div>
  );
}
