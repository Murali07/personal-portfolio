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
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bannari Amman Institute of Technology, Sathyamangalam, Erode.
          </h3>
          <p>Bachelor of Engineering in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            System Engineer - Tata Consultancy Services
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Siemens Healthineers Project</h4>
          <p>
            SAP R/3 Technical Consultant over 3+ years of experience in SAP
            Security & Authorization.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Application Developer - Tata Consultancy Services
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Honeywell Project</h4>
          <p>Developed websites from front to backend using JavaScript, ReactJS, HTML, CSS, NodeJS, MongoDB.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
