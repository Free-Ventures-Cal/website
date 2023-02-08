import React from "react";
import "./../styles/App.css";
import "./../styles/Fellowship.css";

import GenericTop from "./GenericTop";
import GenericPage from "./GenericPage";
import ContactForm from "./ContactForm";
import Speaker from "./Speaker";

import fellowship1 from "./../assets/fellowship/fellowship-1.jpg";
import fellowship2 from "./../assets/fellowship/fellowship-2.jpg";
import fellowship3 from "./../assets/fellowship/fellowship-3.jpg";
import fellowship4 from "./../assets/fellowship/fellowship-4.jpg";
import fellowship5 from "./../assets/fellowship/fellowship-5.jpg";

import application from "./../assets/application.png";
import interview from "./../assets/interview.png";
import arrow from "./../assets/arrow.png";

import placeholder from "./../assets/pink-gradient.jpg";
import danielle from "./../assets/fiatlux/past_speakers/Danielle.jpeg";
import jasmine from "./../assets/fiatlux/past_speakers/Jasmine.jpeg";
import jessica from "./../assets/fiatlux/past_speakers/Jessica.jpeg";
import gresshaa from "./../assets/fiatlux/past_speakers/Gresshaa.jpeg";
import amy from "./../assets/fiatlux/past_speakers/Amy.jpeg";
import esther from "./../assets/fiatlux/past_speakers/Esther.jpeg";
import gillian from "./../assets/fiatlux/past_speakers/Gillian.jpeg";
import archa from "./../assets/fiatlux/past_speakers/Archa.jpeg";

function Fellowship() {
  let timelineContent = [
    {
      date: "February 1",
      description: "Application Released",
      image: application,
    },
    {
      date: "February 16",
      description: "Application Due",
      image: application,
    },
    {
      date: "February 18",
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
        header={"Fellowship"}
        description={
          "A comprehensive program designed specifically for undergraduate students who want a friendly and engaging introduction to Entrepreneurship & Venture Capital. Our aim is to provide these students with direct exposure to the world-class startup ecosystem here at UC Berkeley & beyond."
        }
      />
      <div className="main-gallery">
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
      </div>
      <GenericPage id="copy">
        <div id="overview">
          <div>
            <h2>Overview</h2>
            <p>
              For nearly a decade now, our team has been dedicated to our
              mission of empowering student founders. An important part of that
              mission is also to enable students to become founders as well. We
              understand the importance of creating an inclusive and equitable
              entrepreneurship community that invites students of all
              backgrounds & interests.
            </p>
            <p>
              The 6-week long fellowship provides an up-close insight into the
              robust UC Berkeley startup ecosystem and aims to serve as a
              launchpad for entrepreneurial endeavors. Fellows will engage
              directly with startup founders, shadow point-person advising
              sessions, participate in an exclusive weekly curriculum, and take
              a deep dive into a startup topic of their choosing!
            </p>
          </div>
          <div id="sidebar">
            <div className="circle">
              <div className="text">
                <p className="big">6</p>
                <p className="small">Weeks</p>
              </div>
            </div>
            {/* <div className="circle">
              <div className="text">
                <p className="big">x</p>
                <p className="small">Students</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="speakers-row">
          <div className="speakers-column" id="coretasks">
            <div>
              <h2>Core Tasks</h2>
              <p>
                <ul>
                  <li>
                    Shadow weekly point-person mentorship sessions with startup
                    founders.
                  </li>
                  <li>
                    Participate in core curriculum about various topics central
                    to building and scaling startups.
                  </li>
                  <li>
                    Join networking events, reach out to founders, and conduct
                    research on the startup topic of their choosing.
                  </li>
                  <li>Collaborate with other fellows on a final project.</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="speakers-column" id="perks">
            <div>
              <h2>Perks & Benefits</h2>
              <p>
                <ul>
                  <li>
                    Access to our alumni, VC, founder, and industry network.
                  </li>
                  <li>Access to our startup curriculum decks.</li>
                  <li>1-on-1 help with industry recruiting.</li>
                  <li>First-hand exposure to the UC Berkeley startup space.</li>
                  <li>
                    Guaranteed first-round interview for a spot on our Internal
                    Team.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div id="requirements">
          <div>
            <h2>Requirements</h2>
            <p>
              <ul>
                <li>Must be a current UC Berkeley undergraduate student.</li>
                <li>Must be able to commit at least 5-7 hours per week</li>
              </ul>
            </p>
          </div>
        </div>
        <span>
          <h2>Apply Now</h2>
          <p>
            We have a simple application process – it’s just a resume drop and a
            short response!
          </p>
          <a
            href="https://airtable.com/shrkN2sqrGM64Ylqg"
            className="genericButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply for Spring 2023 Fellowship
          </a>
          <h3>Spring 2023 Timeline</h3>
          <div className="timeline">{timelineWithArrows}</div>
          <p>
            Please direct questions to our form below, or email:{" "}
            <a href="mailto:safwan@freeventures.org">safwan@freeventures.org</a>
            .
          </p>
        </span>
        <ContactForm />
      </GenericPage>
    </section>
  );
}

export default Fellowship;
