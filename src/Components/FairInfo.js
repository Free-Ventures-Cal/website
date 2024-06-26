import React from "react";
import "./../styles/App.css";
import "./../styles/Fellowship.css";

import GenericTop from "./GenericTop";
import GenericPage from "./GenericPage";
import ContactForm from "./ContactForm";

import application from "./../assets/application.png";
import interview from "./../assets/interview.png";
import arrow from "./../assets/arrow.png";

function FairInfo() {
  let timelineContent = [
    {
      date: "August 15th @ 12 AM PST",
      description: "Application Released",
      image: application,
    },
    {
      date: "September 8th @ 11:59 PM PST",
      description: "Application Due",
      image: application,
    },
    {
      date: "Saturday, September 10th",
      description: "Interviews",
      image: interview,
    },
  ];

  let timelineWithArrows = timelineContent.map((event, i) => {
    const isLastOne = timelineContent.length === i + 1;
    const result = (
      <article>
        <div>
          <img src={event.image} alt="" />
        </div>
        <h2>{event.date}</h2>
        <p>{event.description}</p>
      </article>
    );
    return isLastOne
      ? result
      : [
          result,
          <span>
            <img src={arrow} alt="" />
          </span>,
        ];
  });

  return (
    <section>
      <GenericTop
        header={"Free Ventures Startup Fair"}
        description={
          "A startup-focused recruitment fair to connect top UC Berkeley and Bay Area talent with early-stage startups (Series A and Seed) who are looking to grow their team. Our aim is to expand upon the world-class startup ecosystem at UC Berkeley, and part of doing that is facilitating introductions between Berkeley students & incredible startup opportunities."
        }
      />
      {/* <div className="main-gallery">
        <div className="gallery-flex-item">
          <img src={fellowship1} alt="Fellowship Picture" />
        </div>
        <div className="gallery-flex-item">
          <img src={fellowship2} alt="Fellowship Picture" />
        </div>
        <div className="gallery-flex-item">
          <img src={fellowship3} alt="Fellowship Picture" />
        </div>
        <div className="gallery-flex-item">
          <img src={fellowship4} alt="Fellowship Picture" />
        </div>
        <div className="gallery-flex-item">
          <img src={fellowship5} alt="Fellowship Picture" />
        </div>
      </div> */}
      <GenericPage id="copy">
        <div id="overview">
          <div>
            <h2>Overview</h2>
            <p>
              As part of our commitment to the startup ecosystem on UC
              Berkeley's campus, this semester we'll be organizing a
              startup-focused recruitment fair, where students of all years and
              majors will have the opportunity to converse with startup founders
              and CEOs from some of the fastest growing startups in the Bay
              Area.
            </p>
            {/* <p>
              The 6-week long fellowship provides an up-close insight into the
              robust UC Berkeley startup ecosystem and aims to serve as a
              launchpad for entrepreneurial endeavors. Fellows will engage
              directly with startup founders, shadow point-person advising
              sessions, participate in an exclusive weekly curriculum, and take
              a deep dive into a startup topic of their choosing!
            </p> */}
          </div>
          <div id="sidebar"></div>
        </div>
        <div id="requirements">
          <div>
            <h2>Logistics</h2>
            <p>
              <ul>
                <li>
                  Taking place on October 20th, 2022 from 4:30 - 7PM at Anna
                  Head Alumnae Hall
                </li>
                <li>Opportunities to network with founders</li>
                <li>Resumé drop-boxes and company booths</li>
                <li>
                  Recruiter presentations & dedicated infosessions from top
                  sponsors
                </li>
              </ul>
            </p>
          </div>
        </div>
        <span>
          <h2>Sign Up</h2>
          <p>It takes just a minute to sign up!</p>
          <a
            href="https://airtable.com/shrMGnpTSiUIv1Ush"
            className="genericButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign Up Here
          </a>
          <h2>
            <a href="https://tinyurl.com/freevfair22">Fair Guide</a>
          </h2>
          <iframe
            width="1000px"
            height="1000px"
            src="https://docs.google.com/document/d/1PMphoHWWwHEhXGrbjZZThtcWMN7il6Dj5tdACv6-0rE/edit#"
          />
          <p>
            If you have any questions, please email us at:{" "}
            <a href="mailto:anjan@freeventures.org">anjan@freeventures.org</a>,
            or fill out the form below.
          </p>
        </span>
        <ContactForm />
      </GenericPage>
    </section>
  );
}

export default FairInfo;
