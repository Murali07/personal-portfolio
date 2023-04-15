import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MERN Stack Developer - Tata Consultancy Services
          </h3>
          <p>
            <ul>
              <li>
                Developed multiple POCs to create a user interface in React JS.
              </li>
              <li>
                Developed POCs to create ecommerce application using JAVA.
              </li>
              <li>
                Responsible for making responsive web pages using Bootstrap and
                Media Queries.
              </li>
              <li>
                Hands on experience in developing Single Page Applications (SPA)
                using React JS and Node.js. Used React JS for creating reusable
                UI components.
              </li>
              <li>
                Daily Programming in server side by using Node.JS and
                Express.JS.
              </li>
              <li>
                Extensively used GIT for version controlling and regularly
                pushed the code to GitHub.
              </li>
              <li>
                Used Object Oriented Programming concepts to develop UI
                components that could be reused across the Web Application.
              </li>
              <li>
                Hands on experience in developing Food Web Application using
                React JS, Bootstrap, Node.JS, Express and MongoDB.{" "}
              </li>
              <li>
                Implemented generating the verification hash code using Node JS
                and added user validation by using Node JS, Mongoose.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SAP Security Consultant - Tata Consultancy Services
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Siemens Healthineers
          </h4> */}
          <p>
            <ul>
              <li>
                Worked on user administration using SU01, SU10 to perform
                various user set up related activities like new user
                creation/modifications, lock/unlock, deletion, password reset
                and extending expired users.
              </li>
              <li>
                Creating and modifying Single, Derived and Composite Roles using
                Profile Generator.
              </li>
              <li>
                Handled troubleshooting authorization issues using the SAP
                transactions like SU53, ST01, STAUTHTRACE.
              </li>
              <li>
                Lock/unlock users and reset user passwords. Giving test ID's
                access and extending test ID's access to user urgent
                requirement.
              </li>
              <li>
                Good experience with Physical Inventory and Role Review process.
              </li>
              <li>
                Solved functional and technical obstacles and worked closely
                with project team from different streams.
              </li>
              <li>
                Delivered SAP training, user support and knowledge transfer at
                end of project and followed up to verify successful
                implementation.
              </li>
              <li>
                Architected SAP solutions by prioritizing simplicity,
                appropriate scale, resiliency and maintainability.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Assistant System Engineer - Tata Consultancy Services
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Honeywell Project
          </h4>
          <p>
            <ul>
              <li>
                User Maintenance including creation/deletion/locking and
                unlocking.
              </li>
              <li>
                Mass user maintenance using SU10 such as a Creation,
                Modification &Locking/ Unlocking.
              </li>
              <li>
                Find out last failed Authorizations using SU53 report from the
                user.
              </li>
              <li>Extensive use of User Information System using SUIM.</li>
              <li>
                Experience in Audit logs using the SM20 report for the users.
              </li>
              <li>
                Extensively used tables like AGR_USERS, AGR_TCODES, AGR_1251,
                AGR_DEFINE etc.
              </li>
              <li>
                Good understanding on Segregation of Duties and Audit Compliance
                Standards.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement> */}

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bannari Amman Institute of Technology, Sathyamangalam, Erode.
          </h3>
          <p>Bachelor of Engineering in Computer Science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
