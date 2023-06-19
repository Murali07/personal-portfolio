import React from "react";
import "../styles/AboutMe.css";
import { useNavigate } from "react-router-dom";

function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className="aboutme">
      <div className="profile-pic">
        <div className="profile-pic-bg"></div>
      </div>
      <div className="objective">
        <p>
          I have 5 years of work experience, with 2 years as a Full Stack Web
          Developer with MERN stack expertise and 3 years as a SAP Security
          Consultant. My goal is to use my skills to build high-quality websites
          and learn new technologies while staying up-to-date with industry best
          practices. I'm seeking a position in web development that allows me to
          continue developing my career and contribute to the company's growth.
        </p>
      </div>

      <div className="button">
        <button
          className="button hireme-button"
          onClick={() => navigate("/contact")}
        >
          Hire me
        </button>
        <a
          href="https://drive.google.com/file/d/1gciOSd0D1eMokniq78KTYZutDRYa4aMX/view?usp=drive_link"
          target="_blank"
        >
          <button className="button resume-button">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
