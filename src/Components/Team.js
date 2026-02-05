// Test comment for git tracking
import React from "react";
import { Link } from "react-router-dom";
import useScrollHandler from "../hooks/useScrollHandler";
import "./../styles/App.css";
import "./../styles/Team.css";

import aamir from "./../assets/team/aamir.png";
import aadith from './../assets/team/aadith.jpeg';
import arissa from './../assets/team/arissa.jpg';
import hy from './../assets/team/hy.jpeg';
import wesley from './../assets/team/wesley.jpeg';
import alex from "./../assets/team/alex.png";
import alson from "./../assets/team/alson_chan.jpg";
import aashi from "./../assets/team/alumni/aashi_jawar.png";
import abhay from "./../assets/team/alumni/abhay_malik.jpeg";
import adhiv from "./../assets/team/alumni/adhiv_dhar.png";
import adithya from "./../assets/team/alumni/adithya_paramasivam.jpeg";
import anjan from "./../assets/team/alumni/anjan_bharadwaj.jpeg";
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
import maanav from "./../assets/team/alumni/maanav_khaitan.jpeg";
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
import mahika from "./../assets/team/mahika_valluri.jpeg";
import nandu from "./../assets/team/nandu.png";
import pavit from "./../assets/team/pavit.png";
import radha from "./../assets/team/radha_singh.jpg";
import rohan from "./../assets/team/rohan.jpg";
import safwan from "./../assets/team/safwan.png";
import samiha from "./../assets/team/samiha.png";
import sanjay from "./../assets/team/sanjay_adhikesaven.jpeg";
import shlok from "./../assets/team/shlok.png";
import varun from "./../assets/team/varun.png";
import aathma from "./../assets/team/aathma.jpeg";
import ashni from "./../assets/team/ashni.jpeg";
import gatik from "./../assets/team/gatik.png";
import nidhi from "./../assets/team/nidhi.jpeg";
import om from "./../assets/team/om.jpeg";
import swara from "./../assets/team/swara.jpeg";
import alexhan from "./../assets/team/alex_han.jpeg";
import amelia from "./../assets/team/amelia.jpeg";
import shivansh from "./../assets/team/shivansh.jpeg";
import shreyash from "./../assets/team/shreyash.jpeg";
import aryan from "./../assets/team/aryan.jpeg";
import aryan2 from "./../assets/team/aryan2.jpeg";
import carlos from "./../assets/team/carlos.jpeg";
import divij from "./../assets/team/divij.jpeg";
import juhi from "./../assets/team/juhi.jpeg";
import leo from "./../assets/team/leo.jpeg";
import nathan from "./../assets/team/nathan.jpeg";
import swara2 from "./../assets/team/swara2.jpeg";

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
  // var header = "Meet the Team";
  var header = "Coffee Chats Now Open!";
  var internalRecruitment = false;
  var description =
    "Interested in joining the Free Ventures internal team? Use the calendar icon to schedule a coffee chat with other Free Ventures members! Fill out the form below to apply.";

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
    // description +=
    //   " Click below to fill out our interest form! We'll email you once we begin recruitment in October.";
    button = (
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeZsHAkNTVGD9B-Ue6kPwLuRNeZVcsm_uUhnyCNAF3f5_UPOA/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="genericButton"
      >
        Internal Application
      </a>
    );
  }

  const peopleContent = [
    {
      name: "Aathma Muruganathan",
      position: "Managing Director",
      linkedinUrl: "https://www.linkedin.com/in/aathma/",
      calendlyUrl: "https://calendly.com/aathma-freeventures/free-venture-coffee-chats?month=2025-02",
      mailTo: "mailto:aathma@freeventures.org",
      image: aathma,
    },  
    {
      name: "Nidhi Gaonkar",
      position: "Director of Sponsorship",
      linkedinUrl: "https://www.linkedin.com/in/nidhi-gaonkar/",
      calendlyUrl: "https://calendly.com/nidhi-freeventures",
      mailTo: "mailto:nidhi@freeventures.org",
      image: nidhi,
    },
    {
      name: "Om Gole",
      position: "Director of Community and DEI",
      linkedinUrl: "https://www.linkedin.com/in/omgole/",
      calendlyUrl: "https://calendly.com/omgole-berkeley/ubg-coffee-chats",
      mailTo: "mailto:om@freeventures.org",
      image: om,
    },
    {
      name: "Shreyash Goli",
      position: "Director of Batch",
      linkedinUrl: "https://www.linkedin.com/in/shreyash-goli/",
      calendlyUrl: "https://calendly.com/shreyash_goli-berkeley/free-ventures-coffee-chats?month=2025-09",
      mailTo: "mailto:shreyash@freeventures.org",
      image: shreyash,
    },
    {
      name: "Swara Agarwal",
      position: "Senior Associate",
      linkedinUrl: "https://www.linkedin.com/in/swara-agarwal/",
      calendlyUrl: "https://calendly.com/swara-agarwal-sca/freev-20-min-coffee-chat",
      mailTo: "mailto:swara@freeventures.org",
      image: swara2,
    },
    {
      name: "Alex Han",
      position: "Senior Associate",
      linkedinUrl: "https://www.linkedin.com/in/alexqhan/",
      calendlyUrl: "https://calendly.com/alexhan-berkeley/new-meeting",
      mailTo: "mailto:alex@freeventures.org",
      image: alexhan,
    },
    {
      name: "Amelia Khor",
      position: "Senior Associate",
      linkedinUrl: "https://www.linkedin.com/in/ameliakhor/",
      calendlyUrl: "https://calendly.com/amelia-freeventures/15min?month=2025-09&date=2025-09-06",
      mailTo: "mailto:amelia@freeventures.org",
      image: amelia,
    },
    {
      name: "Shivansh Soni",
      position: "Senior Associate",
      linkedinUrl: "https://www.linkedin.com/in/shivanshsonii/",
      calendlyUrl: "https://calendly.com/shivanshmsoni/free-ventures-coffee-chats",
      mailTo: "mailto:shivansh@freeventures.org",
      image: shivansh,
    },
    {
      name: "Aryan Nangia",
      position: "Associate",
      linkedinUrl: "https://www.linkedin.com/in/aryan-nangia/",
      calendlyUrl: "https://calendly.com/aryan-nangia-berkeley/30min",
      mailTo: "mailto:aryan@freeventures.org",
      image: aryan2,
    },
    {
      name: "Carlos Ramirez",
      position: "Associate",
      linkedinUrl: "https://www.linkedin.com/in/carlos-ramirez-ucbmet/",
      calendlyUrl: "https://calendly.com/carlos-freeventures/30min",
      mailTo: "mailto:carlos@freeventures.org",
      image: carlos,
    },
    {
      name: "Divij Motwani",
      position: "Associate",
      linkedinUrl: "https://www.linkedin.com/in/divijmotwani/",
      calendlyUrl: "https://calendly.com/divijmotwani/divij-motwani-coffee-chat?month=2026-02",
      mailTo: "mailto:divij@freeventures.org",
      image: divij,
    },
    {
      name: "Juhi Mathur",
      position: "Associate",
      linkedinUrl: "https://www.linkedin.com/in/juhi-mathur1/",
      calendlyUrl: "https://calendly.com/juhi-freeventures/30min",
      mailTo: "mailto:juhi@freeventures.org",
      image: juhi,
    },
    {
      name: "Leo Xu",
      position: "Associate",
      linkedinUrl: "https://www.linkedin.com/in/liyuanleoxu/",
      calendlyUrl: "https://calendly.com/leoxuliyuan-berkeley/freev-leo-xu",
      mailTo: "mailto:leo@freeventures.org",
      image: leo,
    },
    {
      name: "Nathan Guan",
      position: "Associate",
      linkedinUrl: "https://www.linkedin.com/in/nathanrguan/",
      calendlyUrl: "https://calendly.com/nathanguan-berkeley/30min",
      mailTo: "mailto:nathan@freeventures.org",
      image: nathan,
    },
    {
      name: "Arissa Zheng",
      position: "Senior Advisor, Ex-Managing Director",
      linkedinUrl: "https://www.linkedin.com/in/arissazheng/",
      calendlyUrl: "https://calendly.com/arissa-zheng/free-ventures-coffee-chats",
      mailTo: "mailto:arissa.zheng@berkeley.edu",
      image: arissa,
    },
    {
      name: "Sanjay Adhikesaven",
      position: "Senior Advisor, Ex-Managing Director",
      linkedinUrl: "https://www.linkedin.com/in/sanjayadhikesaven/",
      calendlyUrl: "https://calendly.com/sanjayadhikesaven/free-ventures-coffee-chats",
      mailTo: "mailto:sanjay@freeventures.org",
      image: sanjay,
    },
    {
      name: "Aadith Kannan",
      position: "Senior Advisor, Ex-Director",
      linkedinUrl: "https://www.linkedin.com/in/aadithkannan/",
      calendlyUrl: "https://calendly.com/aadithkannan-hkq/free-venture-coffee-chats",
      mailTo: "mailto:aadith@freeventures.org",
      image: aadith,
    },
    /*
    {
      name: "Hy Nguyen",
      position: "Senior Advisor, Ex-Director",
      linkedinUrl: "https://www.linkedin.com/in/mrpronoun/",
      calendlyUrl: "https://calendly.com/hy-freeventures/free-venture-coffee-chats?month=2025-02",
      mailTo: "mailto:hy@freeventures.org",
      image: hy,
    },
    */
    {
      name: "Gatik Trivedi",
      position: "Senior Advisor, Ex-Director",
      linkedinUrl: "https://www.linkedin.com/in/gatik-trivedi/",
      calendlyUrl: "https://calendly.com/gatiktrivedi-berkeley/freev",
      mailTo: "mailto:gatik@freeventures.org",
      image: gatik,
    },
    {
      name: "Kelly Hong",
      position: "Senior Advisor, Ex-Director",
      linkedinUrl: "https://www.linkedin.com/in/kellyshong/",
      calendlyUrl: "https://calendly.com/kellyhongsn/free-ventures-coffee-chats",
      mailTo: "mailto:kelly@freeventures.org",
      image: kelly,
    },
    {
      name: "Shrinandan Narayanan",
      position: "Senior Advisor, Ex-Director",
      linkedinUrl: "https://www.linkedin.com/in/shrinandan-narayanan/",
      calendlyUrl: "https://calendar.app.google/roDFGAEXrqiLs1187",
      mailTo: "mailto:nandu@freeventures.org",
      image: nandu,
    },
    {
      name: "Wesley Perronne",
      position: "Senior Advisor, Ex-Director",
      linkedinUrl: "https://www.linkedin.com/in/wesley-perronne/",
      calendlyUrl: "https://calendly.com/wesley-perronne-berkeley/free-ventures-1",
      mailTo: "mailto:wesley@freeventures.org",
      image: wesley,
    },
    {
      name: "Hiya Shah",
      position: "Senior Advisor",
      linkedinUrl: "https://www.linkedin.com/in/hiyashah/",
      calendlyUrl: "https://calendly.com/hiya-shah/free-ventures-director-coffee-chat",
      mailTo: "mailto:hiya@freeventures.org",
      image: hiya,
    },
    {
      name: "Ashni Sheth",
      position: "Senior Advisor",
      linkedinUrl: "https://www.linkedin.com/in/ashnisheth/",
      calendlyUrl: "https://calendly.com/ashni_sheth/nib-coffee-chats",
      mailTo: "mailto:ashni@freeventures.org",
      image: ashni,
    }
  ];

  const alumniContent = [
    {
      name: "Alexander Manes",
      position: "Product Manager",
      company: "Abnormal Security",
      image: alex,
    },
    {
      name: "Christina Guo",
      position: "Co-Founder",
      company: "Lookbk",
      image: christina,
    },
    {
      name: "Pranav Gulati",
      position: "Product Manager",
      company: "Uber ",
      image: pranav,
    },
    {
      name: "Omkar Salpekar",
      position: "Staff Software Engineer",
      company: "Facebook",
      image: omkar,
    },
    {
      name: "Pratik Bhat",
      position: "AI Product Lead",
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
      position: "Law Clerk",
      company: "Kirkland & Ellis",
      image: daniella,
    },
    {
      name: "Blake LaFayette",
      position: "Principal",
      company: "Alpine Investors",
      image: blake,
    },
    {
      name: "Farbod Nowzad",
      position: "Co-Founder and CEO",
      company: "Cashmere",
      image: farbod,
    },
    {
      name: "Abhay Malik",
      position: "Founding PM",
      company: "Predibase",
      image: abhay,
    },
    {
      name: "Jeff Feng",
      position: "Partner",
      company: "Sierrawood",
      image: jeff,
    },
    {
      name: "Amrit Ayalur",
      position: "Senior Product Engineer",
      company: "Ellipsis Labs",
      image: amrit,
    },
    {
      name: "Damini Satija",
      position: "Director",
      company: "Amnesty Tech",
      image: damini,
    },
    {
      name: "Keyan Sarrafzadeh",
      position: "Growth Product Manager",
      company: "Ramp",
      image: keyan,
    },
    {
      name: "Kirtan Upadhyaya",
      position: "Resident Physician",
      company: "UCI Health",
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
      position: "Advisor",
      company: "BAIR",
      image: cameron,
    },
    {
      name: "Sam Kirschner",
      position: "Vice President",
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
      position: "Staff Product Manager",
      company: "Figma",
      image: jasmine,
    },
    {
      name: "Nikita Ashok",
      position: "Senior Software Engineer",
      company: "Nourish",
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
      position: "Engineering Lead",
      company: "Privateer Space",
      image: shaantam,
    },
    {
      name: "Saneel Sreeni",
      position: "Head of Special Projects",
      company: "Ritual Foundation",
      image: saneel,
    },
    {
      name: "LuLu Holland",
      position: "Head of Community & Marketing",
      company: "The House Fund",
      image: lulu,
    },
    {
      name: "Maanav Khaitan",
      position: "Building",
      company: "Infinity",
      image: maanav,
    },
    {
      name: "Anjan Bharadwaj",
      position: "Member of Technical Staff",
      company: "OpenAI",
      image: anjan,
    },
    {
      name: "Adithya Paramasivam",
      position: "ML Scientist",
      company: "Nabla Bio",
      image: adithya,
    },
    {
      name: "Safwan Masood",
      position: "Analyst",
      company: "Blackstone",
      image: safwan,
    },
    {
      name: "Varun Nair",
      position: "Growth Engineer",
      company: "Conversion",
      image: varun
    },
    {
      name: "Aamir Hudda",
      position: "Co-Founder & CEO",
      company: "Attain (YC W22)",
      image: aamir
    },
    
    {
      name: "Samiha Singh",
      position: "Business Analyst",
      company: "McKinsey & Co.",
      image: samiha
    },
    
    {
      name: "Shlok Singh",
      position: "Growth",
      company: "Doorstep AI",
      image: shlok
    },
    {
      name: "Radha Singh",
      position: "Private Equity Analyst",
      company: "GI Partners",
      image: radha
    },
    {
      name: "Mahika Valluri",
      position: "Chief of Staff - Engineering",
      company: "Mercor",
      image: mahika
    },
    {
      name: "Hriday Sheth",
      position: "Software Engineer",
      company: "Zip",
      image: hriday
    },
    {
      name: "Ishaan Shah",
      position: "Associate",
      company: "Bain & Co.",
      image: ishaan
    },
    {
      name: "Pavit Singh",
      position: "Strategic Projects",
      company: "Scale AI",
      image: pavit
    },
    {
      name: "Alson Chan",
      position: "Investment Banker",
      company: "Bank of America",
      image: alson
    },
    {
      name: "Rohan Taneja",
      position: "Software Engineer",
      company: "Vercel",
      image: rohan
    },
    {
      name: "Amy Zhuang",
      position: "Private Equity",
      company: "Ardian",
      image: amy
    }

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
          <AlumniCardsMarquee
            row={4}
            content={alumniContent}
            scrollPosition={
              useScrollHandler() + SCROLL_CONVERT - (2 * SCROLL_PLUS_MINUS)
            }
          />
          <AlumniCardsMarquee
            row={5}
            content={alumniContent}
            scrollPosition={
              useScrollHandler() + SCROLL_CONVERT - (3 * SCROLL_PLUS_MINUS)
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
