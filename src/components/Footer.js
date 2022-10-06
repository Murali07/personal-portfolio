import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/murali-selvaraj/" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Murali07" target="_blank">
          <GitHubIcon />
        </a>
      </div>
      <p> &copy; 2022 muraliportfolio.com </p>
    </div>
  );
}

export default Footer;
