import "./App.css";
import Header from "./Header";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <Header/>
        <div className="Content">
          <div className="LeftColumn">
            <hr></hr>
            <Contact />
            <br></br>
            <hr></hr>
            <Education/>
            <br></br>
            <hr></hr>
            <Skills/>
            <br></br>
            <hr></hr>
          </div>
          <WorkExperience/>
        </div>
      </div>
    </div>
  );
}