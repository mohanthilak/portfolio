import AboutMe from "./components/aboutme/Aboutme";
import Navbarr from "./components/navbar/Navbarr";
import Skill from "./components/skills/Skill";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/projects/Projects";
import Interests from "./components/interests/Interests";
import { Container } from "react-bootstrap";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Container>
        <AboutMe />
        <Skill />
        <Education />
        <Projects />
        <Interests />
      </Container>
    </div>
  );
}

export default App;
