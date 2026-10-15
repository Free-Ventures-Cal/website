import React from "react";
import GenericPage from "./GenericPage";
import GenericTop from "./GenericTop";

// Existing FreeV images. Replace these when official EIR photos are ready.
import fellowship1 from "./../assets/fellowship/fellowship-1.jpg";
import fellowship2 from "./../assets/fellowship/fellowship-2.jpg";
import fellowship3 from "./../assets/fellowship/fellowship-3.jpg";
import fellowship4 from "./../assets/fellowship/fellowship-4.jpg";
import fellowship5 from "./../assets/fellowship/fellowship-5.jpg";

// Reuse the Fellowship layout and apply EIR-specific styling on top.
import "./../styles/Fellowship.css";
import "./../styles/EIR.css";

const applicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSd_af-bqXt_eW_t6nV-iJXP8cdaPEXQwibrpB95UMLvwewryA/viewform?usp=send_form";

const photos = [fellowship1, fellowship2, fellowship3, fellowship4, fellowship5];

function EIR() {
  return (
    <section className="eir-page">
      <GenericTop
        header="FreeV Engineers in Residence"
        description="A home for Berkeley students who build for the love of it."
      />

      <div className="main-gallery eir-gallery">
        {photos.map((photo, index) => (
          <div className="gallery-flex-item" key={photo}>
            <img src={photo} alt={`Free Ventures community photo ${index + 1}`} />
          </div>
        ))}
      </div>

      <GenericPage id="copy">
        <div id="overview" className="eir-overview">
          <div className="eir-overview-copy">
            <p className="eir-eyebrow">EIR Fall '26 · Founding Cohort</p>
            <h2>Overview</h2>
            <p>
              FreeV Engineers in Residence is a long-term community inside Free
              Ventures for Berkeley's curious builders, engineers, and
              researchers. It's for people who go deep into technical problems
              for their own sake, and build things nobody asked them to.
            </p>
            <p>
              Members build their own projects, share what they're learning,
              and work alongside FreeV founders on real technical challenges.
              This is a community, not a program with an end date.
            </p>
            <p className="eir-tagline">
              <strong>
                Founders build companies. Fellows learn to. EIRs build the tech.
              </strong>
            </p>
            <a
              href={applicationUrl}
              className="eir-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply for EIR Fall '26
            </a>
          </div>

          <aside id="sidebar" className="eir-sidebar">
            <div className="circle eir-deadline-circle">
              <div className="text">
                <p className="big">Oct 28</p>
                <p className="small">11:59 PM</p>
              </div>
            </div>
            <p className="eir-deadline-caption">
              <strong>Founding cohort application deadline</strong>
              <span>October 28, 2026</span>
            </p>
          </aside>
        </div>

        <div className="speakers-row eir-columns">
          <div className="speakers-column eir-column">
            <div>
              <h2>What EIRs Do</h2>
              <ul>
                <li>
                  <strong>Weekly build nights:</strong> Bring something you're
                  working on and build alongside other technical people and
                  FreeV founders.
                </li>
                <li>
                  <strong>Founder problems:</strong> Explore real technical
                  challenges brought by FreeV companies.
                </li>
                <li>
                  <strong>Monthly rabbit-hole talks:</strong> Teach founders
                  and fellow EIRs about something you've explored deeply.
                </li>
                <li>
                  <strong>Founder dinners:</strong> Join small-group
                  conversations with founders and mentors.
                </li>
                <li>
                  <strong>Demo nights:</strong> Show what you've built alongside
                  the broader FreeV community. Demos over decks.
                </li>
              </ul>
            </div>
          </div>

          <div className="speakers-column eir-column">
            <div>
              <h2>Community &amp; Benefits</h2>
              <ul>
                <li>
                  Be part of a lasting community alongside FreeV batch founders,
                  mentors, alumni founders, and the internal team.
                </li>
                <li>
                  Build alongside other deeply curious technical people.
                </li>
                <li>
                  Develop direct relationships with current and alumni FreeV
                  founders.
                </li>
                <li>
                  Take part in curated founder dinners, technical talks, and
                  community events.
                </li>
                <li>
                  Pursue interesting projects and research directions, whether
                  they're your own or inspired by a founder's problem.
                </li>
                <li>
                  Hold the title <strong>Engineer in Residence, Free Ventures</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="eir-section">
          <h2>Who Should Apply?</h2>
          <p>
            Students who build because they can't help themselves. Maybe you
            have a side project, an unusual technical obsession, or a research
            question you've been thinking about for months. We care about
            curiosity and specificity, not polished pitches or social fit.
          </p>
          <p>
            Show us what you've made or what you're obsessed with. There are
            no coffee chats or polish tests.
          </p>
        </div>

        <div className="eir-section">
          <h2>Part of Free Ventures</h2>
          <p>
            Free Ventures has supported 100+ portfolio companies and $300M+ in
            follow-on capital. Engineers in Residence joins that wider
            community of founders, alumni, and mentors.
          </p>
        </div>

        <div className="eir-section eir-apply">
          <h2>Apply for EIR Fall '26</h2>
          <p>
            Tell us about your deepest rabbit hole, the technology you're
            thinking about, and what you'd love to build next. The application
            asks for basic details and four short written responses (up to 100
            words each). Links to your work are optional.
          </p>
          <p className="eir-deadline-line">
            <strong>Deadline: October 28, 2026 at 11:59 PM.</strong>
          </p>
          <a
            href={applicationUrl}
            className="eir-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply to FreeV Engineers in Residence
          </a>
              
<p>
  Questions? Reach out to{" "}
  <a href="mailto:om@freeventures.org">om@freeventures.org</a>,{" "}
  <a href="mailto:daniel.bao@berkeley.edu">daniel.bao@berkeley.edu</a>,{" "}
  <a href="mailto:aaronbao@berkeley.edu">aaronbao@berkeley.edu</a>, or{" "}
  <a href="mailto:rohitsandadi@berkeley.edu">rohitsandadi@berkeley.edu</a>.
</p>
        </div>
      </GenericPage>
    </section>
  );
}

export default EIR;
