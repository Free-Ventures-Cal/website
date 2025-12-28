import React, { useState } from "react";
import "./../styles/App.css";
import "./../styles/Apply.css";
import "./../styles/Fellowship.css";

import GenericPage from "./GenericPage";
import GenericTop from "./GenericTop";
import sp25grad from "./../assets/sp25grad.jpeg";

function Scholarship() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const dropdownStyle = {
    marginTop: "20px",
    marginBottom: "10px",
    borderBottom: "1px solid #e0e0e0",
  };

  const dropdownHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
    cursor: "pointer",
    fontFamily: '"Helvetica Neue", "HelveticaNeue-Light", "Helvetica Neue Light", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontSize: "18px",
    fontWeight: "600",
    color: "rgb(18, 18, 18)",
  };

  const dropdownContentStyle = {
    padding: "0 0 20px 0",
    fontFamily: '"Helvetica Neue", "HelveticaNeue-Light", "Helvetica Neue Light", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontSize: "16px",
    lineHeight: "1.6",
    color: "rgb(18, 18, 18)",
    fontWeight: "200",
  };

  const listStyle = {
    fontSize: "16px",
    fontFamily: '"Helvetica Neue", "HelveticaNeue-Light", "Helvetica Neue Light", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: "200",
    lineHeight: "1.6",
    margin: "0",
    paddingLeft: "20px",
  };

  const listItemStyle = {
    fontSize: "16px",
    fontFamily: '"Helvetica Neue", "HelveticaNeue-Light", "Helvetica Neue Light", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: "200",
    lineHeight: "1.6",
    marginBottom: "10px",
  };

  const getDropdownContentWrapperStyle = (index) => ({
    overflow: "hidden",
    maxHeight: openDropdown === index ? "3000px" : "0px",
    transition: "max-height 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)",
  });

  const plusSignStyle = {
    fontSize: "24px",
    fontWeight: "300",
    color: "rgb(18, 18, 18)",
    userSelect: "none",
    transform: openDropdown === 0 ? "rotate(45deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  };

  const plusSignStyle2 = {
    fontSize: "24px",
    fontWeight: "300",
    color: "rgb(18, 18, 18)",
    userSelect: "none",
    transform: openDropdown === 1 ? "rotate(45deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  };

  const plusSignStyle3 = {
    fontSize: "24px",
    fontWeight: "300",
    color: "rgb(18, 18, 18)",
    userSelect: "none",
    transform: openDropdown === 2 ? "rotate(45deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  };
  return (
    <section>
      <GenericTop
        header={
          <>
            <span style={{ color: "#67379a" }}>The Catalyst Scholarship</span> by Free Ventures
          </>
        }
        description={"at the University of California, Berkeley"}
      />
      <GenericPage id="copy">
        <div id="overview">
          <div>
            <h2>Program Overview</h2>
            <p>
              <b>The Catalyst Scholarship</b> is looking for <b>high school juniors and seniors</b> who want to make the world a better place by starting small and uplifting their communities first. The application and selection process is holistic, meaning we consider a variety of factors when determining which students are the best fit for our cohort.
            </p>
            <p>
              This is a highly competitive program. Previous scholars have gone on to matriculate at UC Berkeley M.E.T., Harvard, MIT, Stanford, and other top-tier institutions. We look for students who can pinpoint key problems in society and tackle them from a "bottom-up" perspective rather than a "top-down" social hierarchy structure.
            </p>
          </div>
        </div>
        <div className="speakers-row">
          <div className="speakers-column" id="coretasks">
            <div>
              <h2>Who We Are Looking For</h2>
              <p>
                Students selected for the Catalyst Scholarship generally have the following qualities:
              </p>
              <p>
                <ul>
                  <li>
                    <strong>Bottom-Up Mindset:</strong> A unique ability to identify friction in their immediate surroundings and the grit to solve it.
                  </li>
                  <li>
                    <strong>Community Focus:</strong> A demonstrated history of using their skills to uplift their local neighborhoods, schools, or families.
                  </li>
                  <li>
                    <strong>Passion for Innovation:</strong> Evidence of deep exploration into a specific field—whether through extracurriculars, personal projects, or academic rigor.
                  </li>
                  <li>
                    <strong>Resilience:</strong> A drive to learn and grow, viewing obstacles as opportunities for invention.
                  </li>
                </ul>
              </p>
              <div style={{ marginTop: "30px" }}>
                <div style={dropdownStyle}>
                  <div style={dropdownHeaderStyle} onClick={() => toggleDropdown(0)}>
                    <span>Application Details</span>
                    <span style={plusSignStyle}>+</span>
                  </div>
                  <div style={getDropdownContentWrapperStyle(0)}>
                    <div style={dropdownContentStyle}>
                      <p>To apply for the Catalyst Scholarship, you will need to prepare the following materials. We do not require standardized test scores; we care about your vision and your execution.</p>
                      <p><strong>1. Applicant Information</strong></p>
                      <p>Basic personal details, current high school, and contact information.</p>
                      <p><strong>2. Transcript / Activities</strong></p>
                      <p>Upload a one-page document highlighting your extracurricular activities, projects, and any work experience. This gives us a sense of your passions and interests outside of the classroom.</p>
                      <p><strong>3. Short Answer Essays (Max 2500 characters each)</strong></p>
                      <p>You will be asked to respond to the following three prompts:</p>
                      <ul style={listStyle}>
                        <li style={listItemStyle}><strong>Innovation:</strong> Free Ventures is looking for students who can pinpoint key problems in society and can tackle them from a bottoms-up perspective as opposed to a top-down social hierarchy perspective. If you could develop, invent, or innovate anything to change the world for the better, what would it be and why?</li>
                        <li style={listItemStyle}><strong>Impact:</strong> What field of study are you most interested in & how have you explored it? Why? How is that most helpful to your community?</li>
                        <li style={listItemStyle}><strong>Passion:</strong> What are you passionate about? How have you spent time exploring this passion?</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div style={dropdownStyle}>
                  <div style={dropdownHeaderStyle} onClick={() => toggleDropdown(1)}>
                    <span>Interview Process</span>
                    <span style={plusSignStyle2}>+</span>
                  </div>
                  <div style={getDropdownContentWrapperStyle(1)}>
                    <div style={dropdownContentStyle}>
                      <p>Finalists will be invited to a virtual interview. This is a theoretical and philosophical discussion based on your essays.</p>
                      <p>We will discuss your background, the world you came from, and how you hope to utilize this scholarship to impact your community.</p>
                      <p>Be prepared to answer and defend the following prompt in real-time:</p>
                      <p><i><strong>If you could develop, invent, or innovate anything to change the world for the better, what would it be and why?</strong></i></p>
                      <p>You will sharpen wits with your interviewer regarding your answer, debating why this innovation is necessary for society and articulating exactly what it would look like 50 years from now.</p>
                    </div>
                  </div>
                </div>
                <div style={dropdownStyle}>
                  <div style={dropdownHeaderStyle} onClick={() => toggleDropdown(2)}>
                    <span>Application Timeline</span>
                    <span style={plusSignStyle3}>+</span>
                  </div>
                  <div style={getDropdownContentWrapperStyle(2)}>
                    <div style={dropdownContentStyle}>
                      <ul style={listStyle}>
                        <li style={listItemStyle}><b>September 1st, 2025</b>: Applications Open</li>
                        <li style={listItemStyle}><b>January 2nd, 2026</b>: Application Deadline (11:59 PM PST)</li>
                        <li style={listItemStyle}><b>Early & Mid-January</b>: Finalist interviews</li>
                        <li style={listItemStyle}><b>Late-January</b>: Catalyst Scholars Announced</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="speakers-column" id="coretasks">
            <div>
              <h2>Eligibility</h2>
              <p>
                <ul>
                  <li>The application is open to current <b>high school juniors (class of 2027)</b> and <b>seniors (class of 2026)</b>.</li>
                  <li>Applicants must be able to demonstrate a track record of passion and community involvement.</li>
                </ul>
              </p>
              <div style={{ marginTop: "30px" }}>
                <img src={sp25grad} alt="Spring 2025 Graduation" style={{ maxWidth: "100%", width: "100%", height: "auto", borderRadius: "7px" }} />
              </div>
            </div>
          </div>
        </div>
        <span>
          <h2>Apply Now</h2>
          <p>
            Ready to become a catalyst for change in your community? Please email{" "}
            <a href="mailto:aathma@freeventures.org">aathma@freeventures.org</a>{" "}
            with any questions.
          </p>
          <a
            href="https://qerbeo8hwgp.typeform.com/to/eEn1dib9"
            className="genericButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply for the Catalyst Scholarship
          </a>
        </span>
      </GenericPage>
    </section>
  );
}

export default Scholarship;

