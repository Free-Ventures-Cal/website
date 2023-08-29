import React from "react";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import HomeCompany from "./HomeCompany";
import { Link } from "react-router-dom";
import freevgroup from "./../assets/program/freevgroup.jpg";
import "./../styles/App.css";
import "./../styles/Home.css";
import Testimonial from "./Testimonial";
// Press
import wired from "./../assets/press/grayscale/wired.png";
import tc from "./../assets/press/grayscale/tc.png";
import huffpost from "./../assets/press/grayscale/huffpost.png";
import forbes from "./../assets/press/grayscale/forbes.png";
import mic from "./../assets/press/grayscale/mic.png";
import medium from "./../assets/press/grayscale/medium.png";
import recode from "./../assets/press/grayscale/recode.png";
// Partners
import accel from "./../assets/partners/accel.png";
import greylock from "./../assets/partners/greylock.jpg";
import kpcb from "./../assets/partners/kpcb.png";
import lightspeed from "./../assets/partners/lightspeed.png";
import pear from "./../assets/partners/pear.png";
import spark from "./../assets/partners/spark.png";
import svangel from "./../assets/partners/svangle.png";
import ycombinator from "./../assets/partners/ycombinator.png";
// Acquisitions
import discord from "./../assets/acquisitions/discord-3.png";
import coinbase from "./../assets/acquisitions/coinbase-2.png";
import opendoor from "./../assets/acquisitions/opendoor.png";
// Portfolio
import paladin from "./../assets/portfolio/paladin.png";
import distributed from "./../assets/distributed.png";
import gainful from "./../assets/gainful.png";
// Icons
import funds from "./../assets/funds.png";
import mentors from "./../assets/mentors.png";
import workshops from "./../assets/program/training.png";

function Home() {
  let portfolioContent = [
    {
      logo: paladin,
      companyName: "Paladin Drones",
      description:
        "Paladin Drones deploys drones to 911 calls to give first responders instant access to critical information.",
      raised: "$1.3m raised",
      link: "https://techcrunch.com/2019/05/28/paladin-drones-picks-up-1-3m-to-give-first-responders-a-live-feed-of-emergencies/",
      linkTitle: "Read more on TechCrunch",
      tags: [
        {
          content: "FreeV SP17",
          backgroundColor: "#67379A",
        },
        {
          content: "YC S2018",
          backgroundColor: "#EC8641",
        },
      ],
    },
    {
      logo: distributed,
      companyName: "Distributed Systems",
      description:
        "Distributed Systems builds a decentralized identity platform. Acquired by Coinbase.",
      raised: "$1.7m raised",
      link: "https://techcrunch.com/2018/08/15/login-with-coinbase/",
      linkTitle: "Learn about the acquisition",
      tags: [
        {
          content: "FreeV SP16",
          backgroundColor: "#67379A",
        },
        {
          content: "Acquired",
          backgroundColor: "#424242",
        },
      ],
    },
    {
      logo: gainful,
      companyName: "Gainful",
      description:
        "Personalized protein powder, delivered directly to your doorstep.",
      raised: "$120k raised",
      link: "https://www.gainful.com",
      linkTitle: "Check out their website",
      tags: [
        {
          content: "FreeV SP18",
          backgroundColor: "#67379A",
        },
        {
          content: "YC W2018",
          backgroundColor: "#EC8641",
        },
      ],
    },
  ];

  let pressContent = [
    {
      address:
        "https://www.wired.com/story/the-college-kids-doing-what-twitter-wont/",
      image: wired,
      alt: "Wired",
    },
    {
      address:
        "https://techcrunch.com/2015/06/29/yc-backed-instant-esports-is-espn-for-competitive-gaming/",
      image: tc,
      alt: "TechCrunch",
    },
    {
      address:
        "http://www.huffingtonpost.com/rawan-abushaban/wildfire-app-alerts-users_b_9287408.html",
      image: huffpost,
      alt: "Huffington Post",
    },
    {
      address:
        "https://www.forbes.com/pictures/lmh45edlmk/30-under-30-education/#12b818c11c3d",
      image: forbes,
      alt: "Forbes",
    },
    {
      address:
        "https://www.mic.com/articles/112886/a-pair-of-entrepreneurs-want-to-make-sure-every-woman-gets-the-pleasure-she-deserves#.oWYar7k3v",
      image: mic,
      alt: "Mic",
    },
    {
      address:
        "https://medium.com/@robhat/identifying-propaganda-bots-on-twitter-5240e7cb81a9",
      image: medium,
      alt: "Medium",
    },
    {
      address:
        "https://www.vox.com/2015/5/7/11562380/searching-for-the-next-stanford-silicon-valley-turns-its-eyes-to",
      image: recode,
      alt: "Recode",
    },
  ];

  let investorsContent = [
    {
      logo: ycombinator,
      name: "YCombinator",
      website: "http://www.ycombinator.com/",
    },
    {
      logo: kpcb,
      name: "KPCB",
      website: "http://www.kpcb.com/",
    },
    {
      logo: greylock,
      name: "Greylock Partners",
      website: "http://www.greylock.com/",
    },
    {
      logo: pear,
      name: "Pear VC",
      website: "http://www.pear.vc/",
    },
    {
      logo: accel,
      name: "Accel",
      website: "https://www.accel.com/",
    },
    {
      logo: lightspeed,
      name: "Lightspeed Ventures",
      website: "http://lsvp.com/",
    },
    {
      logo: spark,
      name: "Spark Capital",
      website: "http://sparkcapital.com/",
    },
    {
      logo: svangel,
      name: "SV Angel",
      website: "http://svangel.com/",
    },
  ];

  let acquisitionsContent = [
    {
      logo: discord,
      name: "Discord",
      website: "https://discord.com",
    },
    {
      logo: coinbase,
      name: "Coinbase",
      website: "https://www.coinbase.com",
    },
    {
      logo: opendoor,
      name: "Opendoor",
      website: "https://www.opendoor.com",
    },
  ];

  const testimonialsContent = [
    {
      name: "Kai",
      company: "Loggicat",
      text: "Free Ventures has been 10-100x better than other accelerators I’ve been a part of because of direct support, connections to inventors, and pitch work.",
    },
    {
      name: "Mokshith",
      company: "Placeware",
      text: "We literally started at ground zero with startups... The point person structure makes them stand out because of the focus on helping founders.",
    },
    {
      name: "Pedro",
      company: "Sportsvue",
      text: "[Some might ask] why I would spend two hours here instead of working on my startup ...this is worth the time and that’s the best thing I can say...",
    },
    {
      name: "Noah",
      company: "Oki",
      text: "Oki was just an idea, and we managed to build a product with the support of point people who are constantly checking and pushing us to move forward.",
    },
    {
      name: "Jared",
      company: "Polyture",
      text: "Polyture was just a project... it wasn’t until the batch that I understood the core competencies of the platform and what he should spend his time on.",
    },
    {
      name: "Rishma",
      company: "BlossomVR",
      text: "It was super helpful and interesting to get opinions of ppl not familiar with VR in mentor sessions, which had a great mix of good mix of VC, marketing, and tech.",
    },
    {
      name: "Ibrahim",
      company: "Blackbook",
      text: "[Connecting with mentors] helped us think critically about [our] company, and the curriculum introduced us to startup terminology and ideation, financing, hiring.",
    },
  ];

  let portfolioCompanies = portfolioContent.map((company) => {
    return (
      <HomeCompany
        logo={company.logo}
        companyName={company.companyName}
        description={company.description}
        raised={company.raised}
        link={company.link}
        linkTitle={company.linkTitle}
        tags={company.tags}
      />
    );
  });

  let investors = investorsContent.map((investor) => {
    return (
      <a href={investor.website}>
        <img src={investor.logo} alt={investor.name} />
      </a>
    );
  });

  let acquisitions = acquisitionsContent.map((company) => {
    return (
      <a href={company.website}>
        <img
          src={company.logo}
          id={"aq-img-" + company.name.toLowerCase()}
          className="aq-img"
          alt={company.name}
        />
      </a>
    );
  });

  let press = pressContent.map((link) => {
    return (
      <li>
        <a href={link.address} target="_blank" rel="noopener noreferrer">
          <img src={link.image} alt={link.alt} />
        </a>
      </li>
    );
  });

  let testimonials = testimonialsContent.map((testimonial) => {
    return (
      <Testimonial
        name={testimonial.name}
        company={testimonial.company}
        text={testimonial.text}
      />
    );
  });

  const testimonialsMiddleCol = React.createRef();
  useEffect(() => {
    testimonialsMiddleCol.current.scrollTop = 0;
  });

  return (
    <section>
      <div className="splash">
        <div className="container">
          <span>
            <h1>Empowering the brightest founders in Berkeley</h1>
            <h2>
              Free Ventures is Cal’s leading pre-seed startup accelerator. We
              empower student founders by providing access to funding,
              mentorship, and resources to scale.
            </h2>
            <Link to="/apply" className="apply">
              Recruiting Fall 2023 Startups
            </Link>
            <br></br>
            {/* <a href="https://airtable.com/shr2JwPjM7cEaEI42" className="apply">
              Spring 2023 Interest Form
            </a> */}
            <a href="https://airtable.com/shrGDA9SEDiHso7Z7" className="apply">
              Fall 2023 Internal Team Interest Form
            </a>
          </span>
          <span>
            <img src={freevgroup} alt="" />
          </span>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="blueWaveTop"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#eeeeee"
          fill-opacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="overview">
        <div className="container overviewLayout">
          <div className="mini-header">
            <h2>The Free Ventures Accelerator</h2>
            <p>
              Since 2013, Free Ventures has been Cal's leading pre-seed
              accelerator, combining the power of our mentor network,
              sponsor-led curriculum, and unique personalized point person
              structure to elevate student startups at Cal to the next level. We
              are a semester-long program, running a batch in both the spring
              and fall.
            </p>
            <Link to="/program" className="genericButton">
              Learn more about the program{" "}
            </Link>
          </div>
          <div className="numbers">
            <h3>
              <span className="bigNumber">90</span> alumni companies
            </h3>
            <h3>
              <span className="bigNumber">$170m+</span> of follow-on capital
            </h3>
            <h3>
              <span className="bigNumber">18</span> batches hosted
            </h3>
          </div>
        </div>
        <div className="pressHome">
          <hr />
          <ul>{press}</ul>
        </div>
      </div>
      <div className="sponsors homeSection">
        <div className="container">
          <h2>Our companies are funded by leading investors</h2>
          <div className="four-grid">{investors}</div>
          <br />
          <Link to="/partners" className="genericButton">
            Learn more about our partnerships
          </Link>
        </div>
      </div>
      {/* start gray section */}
      <svg
        className="grayWave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
      >
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,64L60,64C120,64,240,64,360,80C480,96,600,128,720,165.3C840,203,960,245,1080,256C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="sponsors homeSection gray" id="acquisitions">
        <div className="container">
          <h2>Recent Acquisitions by Leading Companies</h2>
          <div className="aq-flex">{acquisitions}</div>
        </div>
      </div>
      <div className="portfolioHome homeSection gray">
        <div className="container">
          <h2>Selected portfolio</h2>
          <div className="three-grid">{portfolioCompanies}</div>
          <Link to="/portfolio" className="genericButton">
            See all our portfolio companies
          </Link>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#f3f4f5"
          d="M0,128L60,138.7C120,149,240,171,360,176C480,181,600,171,720,149.3C840,128,960,96,1080,85.3C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      {/* end gray section */}
      <div className="tiers homeSection">
        <div className="container">
          <h2 className="pratik">What we offer</h2>
          <div className="three-grid">
            <article>
              <span>
                <img src={funds} alt="" />
              </span>
              <span>
                <h3>Funding</h3>
                <p>
                  We provide equity-free funds to reimburse costs associated
                  with growing your company on campus, and we help fundraise
                  from top investors during and after the batch.
                </p>
              </span>
            </article>
            <article>
              <span>
                <img src={mentors} alt="" />
              </span>
              <span>
                <h3>Mentorship</h3>
                <p>
                  Each week, we bring in founders, investors, and industry
                  experts to help guide our teams. We also provide access to key
                  stakeholders in Cal's startup ecosystem.
                </p>
              </span>
            </article>
            <article>
              <span>
                <img src={workshops} alt="" />
              </span>
              <span>
                <h3>Resources</h3>
                <p>
                  We host workshops to help founders learn quickly and scale,
                  and we partner with top firms SVB and Cooley to provide
                  founder-friendly legal and banking services.
                </p>
              </span>
            </article>
          </div>
        </div>
      </div>
      {/* start gray section */}
      <div className="testimonialsHome homeSection gray">
        <div className="testimonials-container">
          <div className="testimonials-flex">
            <div className="testimonials-intro">
              <section className="genericTop">
                <div className="container">
                  <div className="purpleBorder"></div>
                  <div class="topHeader">
                    <h1>Testimonials</h1>
                    <p>
                      Don't just take it from us. Here's what our incredible
                      founders have to say:
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="testimonials">
              <div>
                <div className="testimonials-cards-col">
                  {testimonials.slice(0, testimonials.length / 3)}
                </div>
              </div>
              <div>
                <div
                  className="testimonials-cards-col"
                  ref={testimonialsMiddleCol}
                >
                  {testimonials.slice(
                    (2 * testimonials.length) / 3,
                    testimonials.length
                  )}
                </div>
              </div>
              <div>
                <div className="testimonials-cards-col">
                  {testimonials.slice(
                    testimonials.length / 3,
                    (2 * testimonials.length) / 3
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#f3f4f5"
          d="M0,128L60,138.7C120,149,240,171,360,176C480,181,600,171,720,149.3C840,128,960,96,1080,85.3C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      {/* end gray section */}
      <div className="contactSection homeSection" id="contact">
        <div className="container">
          <h2>Looking to get involved?</h2>
          <p>
            We believe a university ecosystem is the ideal place to start up,
            and Cal is one of the best. But there's still a huge need for a
            strengthened community on campus to bring students together to
            tackle meaningful challenges. Join us in our quest to build a better
            community.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Home;
