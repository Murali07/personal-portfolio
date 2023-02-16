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
          SAP Security Consultant with 4+ years of experience in SAP ERP Central
          Component (ECC) 6.0. Experience in Production Support for R/3 Security
          and GRC. Full stack web developer with background knowledge of MERN
          stacks. I am an enthusiastic team player, deep thinker and a strong
          customer focus. Reliable, resourceful and efficient team player with
          good communication skills, able to adapt quickly to new technologies.
          An effective leader, skilled in enlisting the support of all team
          members in aligning with project and organizational goals.
        </p>
      </div>

      <div className="button">
        <button
          className="button hireme-button"
          onClick={() => navigate("/contact")}
        >
          Hire me
        </button>
        <a href="https://drive.google.com/file/d/1Juy13N28kd9N7z_1IbgqkukFhzD5qMRx/view?usp=share_link" target="_blank">
          <button className="button resume-button">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
