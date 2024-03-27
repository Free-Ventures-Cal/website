import React from "react";
import { Link } from "react-router-dom";
import useScrollHandler from "../hooks/useScrollHandler";
import "./../styles/App.css";
import "./../styles/Team.css";

import aamir from "./../assets/team/aamir.png";
import alex from "./../assets/team/alex.png";
import alson from "./../assets/team/alson_chan.jpg";
import aashi from "./../assets/team/alumni/aashi_jawar.png";
import abhay from "./../assets/team/alumni/abhay_malik.jpeg";
import adhiv from "./../assets/team/alumni/adhiv_dhar.png";
import alice from "./../assets/team/alumni/alice_deng.jpeg";
import amrit from "./../assets/team/alumni/amrit_ayalur.jpeg";
import blake from "./../assets/team/alumni/blake_lafayette.jpeg";
import cameron from "./../assets/team/alumni/cameron_baradar.jpeg";
import damini from "./../assets/team/alumni/damini_satija.jpeg";
import daniella from "./../assets/team/alumni/daniella_wenger.jpeg";
import farbod from "./../assets/team/alumni/farbod_nowzad.jpeg";
import jasmine from "./../assets/team/alumni/jasmine_stoy.jpeg";
import jeff from "./../assets/team/alumni/jeff_feng.jpeg";
import jeremy from "./../assets/team/alumni/jeremy_fiance.jpeg";
import kathy from "./../assets/team/alumni/kathy_kong.png";
import keyan from "./../assets/team/alumni/keyan_sarrafzadeh.jpeg";
import kirtan from "./../assets/team/alumni/kirtan_upadhyaya.jpeg";
import lulu from "./../assets/team/alumni/lulu_holland.png";
import nikita from "./../assets/team/alumni/nikita_ashok.png";
import omkar from "./../assets/team/alumni/omkar_salpekar.jpeg";
import pranav from "./../assets/team/alumni/pranav_gulati.png";
import pratik from "./../assets/team/alumni/pratik_bhat.jpg";
import sam from "./../assets/team/alumni/sam_kirschner.jpeg";
import saneel from "./../assets/team/alumni/saneel_sreeni.jpg";
import sean from "./../assets/team/alumni/sean_linehan.jpeg";
import shaantam from "./../assets/team/alumni/shaantam_chawla.png";
import amy from "./../assets/team/amy.png";
import christina from "./../assets/team/christina.png";
import hiya from "./../assets/team/hiya.png";
import hriday from "./../assets/team/hriday.png";
import ishaan from "./../assets/team/ishaan.png";
import kelly from "./../assets/team/kelly.png";
import mahika from "./../assets/team/mahika_valluri.jpg";
import nandu from "./../assets/team/nandu.png";
import pavit from "./../assets/team/pavit.png";
import radha from "./../assets/team/radha_singh.jpg";
import rohan from "./../assets/team/rohan.jpg";
import safwan from "./../assets/team/safwan.png";
import samiha from "./../assets/team/samiha.png";
import sanjay from "./../assets/team/sanjay_adhikesaven.jpeg";
import shlok from "./../assets/team/shlok.png";
import varun from "./../assets/team/varun.png";
import GenericPage from "./GenericPage";
import GenericTop from "./GenericTop";
import Person from "./Person.js";

import berkeleyengineering from "./../assets/partners/berkeleyengineering.png";
import haas from "./../assets/partners/haas.jpg";
import house from "./../assets/partners/house.png";
import scet from "./../assets/partners/scet.png";
import skydeck from "./../assets/partners/skydeck.png";
import AlumniCardsMarquee from "./AlumniCardsMarquee";

function Team() {
  var header = "Meet the Team";
  var internalRecruitment = false;
  var description =
    "We're a small group of undergraduates who care about the Berkeley startup ecosystem. Interested in joining our team?";

  let button;

  if (internalRecruitment) {
    description +=
      " We're currently recruiting for internal team! Click below to learn more.";
    button = (
      <Link to="/apply" className="genericButton">
        Apply to internal team
      </Link>
    );
  } else {
    description +=
      " Click below to fill out our interest form! We'll email you once we begin recruitment in October.";
    button = (
      <a
        href="https://forms.gle/3pdAaDVqbiyQSXp27"
        target="_blank"
        rel="noopener noreferrer"
        className="genericButton"
      >
        Internal Team Interest Form
      </a>
    );
  }

  const peopleContent = [
    {
      name: "Pavit Singh",
      position: "Managing Director",
      linkedinUrl: "https://www.linkedin.com/in/singhpavit/",
      calendlyUrl: "https://calendly.com/pavitsingh/coffee-chat-with-pavit",
      mailTo: "mailto:pavit@freeventures.org",
      image: pavit,
    },
    {
      name: "Ishaan Shah",
      position: "Managing Director",
      linkedinUrl: "https://www.linkedin.com/in/ishaan-shah109/",
      calendlyUrl: "https://calendly.com/ishaan_shah/freev-coffee-chat",
      mailTo: "mailto:ishaan@freeventures.org",
      image: ishaan,
    },
    {
      name: "Kelly Hong",
      position: "Director",
      linkedinUrl: "https://www.linkedin.com/in/kellyshong/",
      calendlyUrl: "",
      mailTo: "mailto:kelly@freeventures.org",
      image: kelly,
    },
    {
      name: "Hriday Sheth",
      position: "Director",
      linkedinUrl: "https://www.linkedin.com/in/hridonculous/",
      calendlyUrl: "https://calendly.com/hridaysheth/hriday-sheth-freev-coffee-chat",
      mailTo: "mailto:hriday@freeventures.org",
      image: hriday,
    },
    {
      name: "Samiha Singh",
      position: "Director",
      linkedinUrl: "https://www.linkedin.com/in/samiha-singh/",
      calendlyUrl: "https://calendly.com/samihasingh/samiha-singh",
      mailTo: "mailto:samiha@freeventures.org",
      image: samiha,
    },
    {
      name: "Hiya Shah",
      position: "Director",
      linkedinUrl: "https://www.linkedin.com/in/hiyashah/",
      calendlyUrl: "https://calendly.com/hiya-shah/free-ventures-director-coffee-chat",
      mailTo: "mailto:hiya@freeventures.org",
      image: hiya,
    },
    {
      name: "Rohan Taneja",
      position: "Senior Associate",
      linkedinUrl: "https://www.linkedin.com/in/rohan-taneja/",
      calendlyUrl: "",
      mailTo: "mailto:rohan@freeventures.org",
      image: rohan,
    },
    {
      name: "Nandu Narayanan",
      position: "Senior Associate",
      linkedinUrl: "https://www.linkedin.com/in/shrinandan-narayanan/",
      calendlyUrl: "",
      mailTo: "mailto:nandu@freeventures.org",
      image: nandu,
    },
    {
      name: "Alson Chan",
      position: "Associate",
      linkedinUrl: "https://www.linkedin.com/in/alson-chan/",
      calendlyUrl: "",
      mailTo: "mailto:alson@freeventures.org",
      image: alson,
    },
    {
      name: "Mahika Valluri",
      position: "Associate",
      linkedinUrl: "https://www.linkedin.com/in/mahika-valluri/",
      calendlyUrl: "",
      mailTo: "mailto:mahika@freeventures.org",
      image: mahika,
    },
    {
      name: "Radha Singh",
      position: "Associate",
      linkedinUrl: "https://www.linkedin.com/in/radha-singh-4527151b1/",
      calendlyUrl: "",
      mailTo: "mailto:radha@freeventures.org",
      image: radha,
    },
    {
      name: "Sanjay Adhikesaven",
      position: "Associate",
      linkedinUrl: "https://www.linkedin.com/in/sanjayadhikesaven/",
      calendlyUrl: "",
      mailTo: "mailto:sanjay@freeventures.org",
      image: sanjay,
    },
    {
      name: "Safwan Masood",
      position: "Senior Advisor, Ex-Managing Director",
      linkedinUrl: "https://www.linkedin.com/in/safwanmasood/",
      calendlyUrl: "",
      mailTo: "mailto:safwan@freeventures.org",
      image: safwan,
    },
        {
      name: "Varun Nair",
      position: "Senior Advisor, Ex-Managing Director",
      linkedinUrl: "https://www.linkedin.com/in/varun-nair-berkeley/",
      calendlyUrl: "",
      mailTo: "mailto:varun@freeventures.org",
      image: varun,
    },
    {
      name: "Aamir Hudda",
      position: "Senior Advisor, Ex-Managing Director",
      linkedinUrl: "https://www.linkedin.com/in/aamirhudda/",
      calendlyUrl: "",
      mailTo: "mailto:aamir@freeventures.org",
      image: aamir,
    },
    {
      name: "Amy Zhuang",
      position: "Senior Associate",
      linkedinUrl: "https://www.linkedin.com/in/amy-zhuang/",
      calendlyUrl: "",
      mailTo: "mailto:amy@freeventures.org",
      image: amy,
    },
  ];

  const alumniContent = [
    {
      name: "Alexander Manes",
      position: "Associate Product Manager",
      company: "Abnormal Security",
      image: alex,
    },
    {
      name: "Christina Guo",
      position: "Co-Founder",
      company: "Passage",
      image: christina,
    },
    {
      name: "Pranav Gulati",
      position: "Associate Product Manager",
      company: "Uber",
      image: pranav,
    },
    {
      name: "Omkar Salpekar",
      position: "Software Engineer",
      company: "Facebook",
      image: omkar,
    },
    {
      name: "Pratik Bhat",
      position: "Product Manager",
      company: "Drata",
      image: pratik,
    },
    {
      name: "Kathy Kong",
      position: "Product Manager",
      company: "Zoom",
      image: kathy,
    },
    {
      name: "Aashi Jawar",
      position: "Product Marketing Intern",
      company: "TikTok",
      image: aashi,
    },
    {
      name: "Alice Deng",
      position: "Co-Founder",
      company: "Slope Tech",
      image: alice,
    },
    {
      name: "Daniella Wenger",
      position: "Research Associate",
      company: "University of Cambridge",
      image: daniella,
    },
    {
      name: "Blake LaFayette",
      position: "Private Equity Senior Associate",
      company: "Alpine Investors",
      image: blake,
    },
    {
      name: "Farbod Nowzad",
      position: "Founder and CEO",
      company: "Pluto",
      image: farbod,
    },
    {
      name: "Abhay Malik",
      position: "Product Manager",
      company: "Aisera",
      image: abhay,
    },
    {
      name: "Jeff Feng",
      position: "Investor",
      company: "Coatue Management",
      image: jeff,
    },
    {
      name: "Amrit Ayalur",
      position: "Founding Engineer",
      company: "Cocoon",
      image: amrit,
    },
    {
      name: "Damini Satija",
      position: "Senior Policy Advisor",
      company: "Centre for Data Ethics & Innovation",
      image: damini,
    },
    {
      name: "Keyan Sarrafzadeh",
      position: "Head of Analytics",
      company: "The Org",
      image: keyan,
    },
    {
      name: "Kirtan Upadhyaya",
      position: "MD Candidate",
      company: "Cooper Medical School of Rowan University",
      image: kirtan,
    },
    {
      name: "Jeremy Fiance",
      position: "Managing Partner in Berkeley",
      company: "The House Fund",
      image: jeremy,
    },
    {
      name: "Cameron Baradar",
      position: "Partner",
      company: "The House Fund",
      image: cameron,
    },
    {
      name: "Sam Kirschner",
      position: "Director of Operations",
      company: "Village Global",
      image: sam,
    },
    {
      name: "Sean Linehan",
      position: "Co-Founder & CEO",
      company: "Placement.com",
      image: sean,
    },
    {
      name: "Jasmine Stoy",
      position: "Product Manager",
      company: "Facebook",
      image: jasmine,
    },
    {
      name: "Nikita Ashok",
      position: "Associate Software Engineer",
      company: "Slack",
      image: nikita,
    },
    {
      name: "Adhiv Dhar",
      position: "APM",
      company: "Twitter",
      image: adhiv,
    },
    {
      name: "Shaantam Chawla",
      position: "Master of Engineering",
      company: "UC Berkeley",
      image: shaantam,
    },
    {
      name: "Saneel Sreeni",
      position: "Investor",
      company: "Dragonfly Capital",
      image: saneel,
    },
    {
      name: "LuLu Holland",
      position: "Impact Investing Fellow",
      company: "EVCA",
      image: lulu,
    },
  ];

  let peopleComponents = peopleContent.map((person) => {
    return (
      <Person
        name={person.name}
        position={person.position}
        linkedinUrl={person.linkedinUrl}
        calendlyUrl={person.calendlyUrl}
        mailTo={person.mailTo}
        image={person.image}
      />
    );
  });

  // Magic constant for converting the window scroll position into
  // the alumni scroll position.
  const SCROLL_CONVERT = 730;

  // Magic constant to make the alumni scroll bars start at slightly
  // different lengths.
  const SCROLL_PLUS_MINUS = 1000;

  return (
    <section>
      <GenericTop header={header} description={description}>
        {button}
      </GenericTop>
      <GenericPage>
        <div className="peopleGrid">{peopleComponents}</div>
      </GenericPage>
      <div className="gray" id="internal-alumni">
        <section className="genericTop">
          <div className="container">
            <div className="purpleBorder"></div>
            <div class="topHeader">
              <h1>Internal Alumni</h1>
            </div>
          </div>
        </section>
        <div class="alumni-marquee-wrapper">
          {/* Use this to debug: */}
          {/* <p>{useScrollHandler()}</p> */}
          <AlumniCardsMarquee
            row={1}
            content={alumniContent}
            scrollPosition={useScrollHandler() + SCROLL_CONVERT}
          />
          <AlumniCardsMarquee
            row={2}
            content={alumniContent}
            scrollPosition={
              useScrollHandler() + SCROLL_CONVERT - SCROLL_PLUS_MINUS
            }
          />
          <AlumniCardsMarquee
            row={3}
            content={alumniContent}
            scrollPosition={
              useScrollHandler() + SCROLL_CONVERT + SCROLL_PLUS_MINUS
            }
          />
        </div>
      </div>
      <GenericPage>
        <h2 style={{ textAlign: "center", padding: "50px 0" }}>
          Our Advisors come from
        </h2>
        <div className="five-grid">
          <span>
            <img src={house} />
          </span>
          <span>
            <img src={skydeck} />
          </span>
          <span>
            <img src={scet} />
          </span>
          <span>
            <img src={haas} />
          </span>
          <span>
            <img src={berkeleyengineering} />
          </span>
        </div>
      </GenericPage>
    </section>
  );
}

export default Team;
