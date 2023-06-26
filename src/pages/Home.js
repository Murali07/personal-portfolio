import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I Am Murali Selvaraj</h2>
        <br />
        <div className="animation">
          <TypeAnimation
            sequence={[
              "Ethusiastic Developer 😎",
              1000,
              "Full Stack Developer 💻",
              1000,
              "MERN Stack Developer 🌐",
              1000,
              "React Developer 📱",
              1000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1.5em", color: "red" }}
          />
        </div>
        <div className="prompt">
          <p>Full Stack Developer with a passion for learning and creating.</p>
          <a
            href="https://www.linkedin.com/in/murali-selvaraj/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Murali07" target="_blank">
            <GitHubIcon />
          </a>
        </div>
      </div>

      {/* <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, Bootstrap, MaterialUI, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, Spring, Spring Boot</span>
          </li>
          <li className="item">
            <h2>Database</h2>
            <span>MongoDB, SQL, MySQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java, JavaScript, Python</span>
          </li>
          <li className="item">
            <h2>Version Control</h2>
            <span>Git</span>
          </li>
          <li className="item">
            <h2>Containerization</h2>
            <span>Docker</span>
          </li>
          <li className="item">
            <h2>Cloud Services</h2>
            <span>AWS</span>
          </li>
          <li className="item">
            <h2>Other Tools</h2>
            <span>Postman, VS Code, Netlify, Render</span>
          </li>
        </ol>
      </div> */}
      
      <div className="skills">
        <h1>Skills</h1>
      </div>

      <div class="grid-container">
        <div>
          <h2>Front-End</h2>
          <span>
            ReactJS, HTML, CSS, NPM, Bootstrap, MaterialUI, StyledComponents
          </span>
        </div>
        <div>
          <h2>Back-End</h2>
          <span>NodeJS, ExpressJS, Spring, Spring Boot</span>
        </div>
        <div>
          <h2>Database</h2>
          <span>MongoDB, SQL, MySQL</span>
        </div>
        <div>
          <h2>Languages</h2>
          <span>Java, JavaScript, Python</span>
        </div>
        <div>
          <h2>Version Control</h2>
          <span>Git</span>
        </div>
        <div>
          <h2>Containerization</h2>
          <span>Docker</span>
        </div>
        <div>
          <h2>Cloud Services</h2>
          <span>AWS</span>
        </div>
        <div>
          <h2>Other Tools</h2>
          <span>Postman, VS Code, Netlify, Render</span>
        </div>
      </div>

    </div>
  );
}

export default Home;
