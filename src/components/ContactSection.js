import React from "react";
import SectionTitle from "./SectionTitle.js";
import styled from "@emotion/styled";
import ContactInfoItem from "./ContactInfoItem.js";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactFrom from "./ContactFrom.js";

const ContactSectionStyle = styled.div`
  .contactSection__wrapper {
    display: flex;
    gap: 4rem;
    margin-top: 5rem;
    justify-content: center;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 3px;
    height: 50%;
    background-color: black;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      gap: 3rem;
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left {
      width: 95%;
      padding-right: 10px;
      padding-left: 10px;
    }
    .right {
      width: 80%;
      padding-top: 1.2rem;
      padding-right: 1.2rem;
      padding-bottom: 1.2rem;
      padding-left: 1.2rem;
    }
  }
`;

// @media only screen and (max-width: 1024px) {
//   .contactSection__wrapper {
//     display: flex;
//     gap: 4rem;
//     margin-top: 5rem;
//     justify-content: center;
//     position: relative;
//   }
//   .contactSection__wrapper::after {
//     position: absolute;
//     content: "";
//     width: 3px;
//     height: 50%;
//     background-color: black;
//     left: 54.5%;
//     top: 30%;
//     transform: translate(-50%, -50%);
//   }

//   .left {
//     width: max-content;
//     padding-right: 10px;
//     padding-left: 10px;

//   }
//   .right {
//     width: max-content;
//     padding-top: 1.2rem;
//     padding-right: 1.2rem;
//     padding-bottom: 1.2rem;
//     padding-left: 1.2rem;
//   }
// }

function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="Get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<PhoneIcon />} text="8526682169" />
            <ContactInfoItem
              icon={<EmailIcon />}
              text="muraliselvaraj.18@gmail.com"
            />
          </div>
          <div className="right">
            <ContactFrom />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}

export default ContactSection;
