import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import  "../styles/Experience.css"
const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>G.L. Bajaj Institute of Management And Technology</h3>
          <p>Bachelor in Technology - 78%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Capgemini | Mumbai</h3>
          <p>Software Developer</p>
          <p>
          <ul>
            <li>
            <b>Project: IUW Document Management </b>
            </li>
            <li>
            Collaborated on pre-release software
          projects, aligning frontend development with project timelines.
          Created an efficient module structure with frontend development best
          practices.
            </li>
          </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Infogain | Noida, UP</h3>
          <p>Senior Software Developer</p>
          <p>
            <ul>
              <li>
                <b>Projects: Timesnownews, Zoomtventertainment</b>
              </li>
              <li>
              Integrated Articles, video
          pages, and multiple templates, focusing on frontend development to
          enhance content presentation and user engagement.
              </li>
              <li>
              Demonstrated
          expertise in React state management strategies, playing a pivotal role
          in front-end development by ensuring efficient data handling and
          optimal user experiences. Worked on App backend using nodejs, to
          create APIs for different templates.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Times Network | Noida, UP</h3>
          <p>React Developer</p>
          <p>
            <ul>
         <li><b>Projects: Timesnownews, Zoomtventertainment, Timesfoodie, Gadgettimes,
          ETNowNews</b>
          </li> 
          <li>
          Collaborated with the Glance team to integrate Glance Pages
          and Mlib, revolutionizing the platform's user interface and
          interactivity.<br />
          Enhanced front-end development to drive a 45% increase
          in user engagement and a 20% boost in customer retention. Implemented
          frontend-focused SEO optimization strategies resulting in a 20%
          increase in crawl rates, boosting search engine visibility and
          improving user experience.
          </li>
          </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
