import React from 'react';

import ContactForm from './ContactForm';
import HomeCompany from './HomeCompany';
import logo from './../assets/free-v-square.png';
import { Link } from "react-router-dom";
import mentors from './../assets/mentors.png';
import pitch from './../assets/pitch.png';
import curriculum from './../assets/curriculum.png';

import paladin from './../assets/portfolio/paladin.png';
import distributed from './../assets/distributed.png';
import gainful from './../assets/gainful.png';

import arrow from './../assets/arrow.png';
import whitearrow from './../assets/arrow-white.png'

import tc from './../assets/press/grayscale/tc.png';
import huffpost from './../assets/press/grayscale/huffpost.png';
import forbes from './../assets/press/grayscale/forbes.png';
import mic from './../assets/press/grayscale/mic.png';
import medium from './../assets/press/grayscale/medium.png';
import recode from './../assets/press/grayscale/recode.png';
import wired from './../assets/press/grayscale/wired.png';

import accel from './../assets/partners/accel.png';
import aws from './../assets/partners/aws.png';
import cooley from './../assets/partners/cooley.png';
import fbstart from './../assets/partners/fbstart.png';
import gc from './../assets/partners/gc.png';
import github from './../assets/partners/github.png';
import greylock from './../assets/partners/greylock.jpg';
import house from './../assets/partners/house.png';
import kpcb from './../assets/partners/kpcb.png';
import lightspeed from './../assets/partners/lightspeed.png';
import pear from './../assets/partners/pear.png';
import scet from './../assets/partners/scet.png';
import spark from './../assets/partners/spark.png';
import svangel from './../assets/partners/svangle.png';
import svb from './../assets/partners/svb.png';
import ycombinator from './../assets/partners/ycombinator.png';
import freevsequoia from './../assets/freevsequoia.png';
import community from './../assets/program/group.png';
import legal from './../assets/lega.png';
import fundraising from './../assets/fundraising.png';
import funds from './../assets/funds.png';
import logofull from './../assets/logo-full.png';
import logocircle from './../assets/logo-circle.png';


import freevgroup from './../assets/program/freevgroup.jpg'


import equity from './../assets/program/business.png';
import workshops from './../assets/program/training.png';


import './../styles/App.css';
import './../styles/Home.css';

import Carousel from 'react-images';



function Home() {

    let companiesContent = [{
        logo: paladin,
        companyName: "Paladin Drones",
        description: "Paladin Drones deploys drones to 911 calls to give first responders instant access to critical information.",
        raised: "$1.3m raised",
        link: "https://techcrunch.com/2019/05/28/paladin-drones-picks-up-1-3m-to-give-first-responders-a-live-feed-of-emergencies/",
        linkTitle: "Read more on TechCrunch",
        tags: [
            {
                content: "FreeV SP17",
                backgroundColor: "#67379A"
            },
            {
                content: "YC S2018",
                backgroundColor: "#EC8641"
            }
        ]
    },
    {
        logo: distributed,
        companyName: "Distributed Systems",
        description: "Distributed Systems builds a decentralized identity platform. Acquired by Coinbase.",
        raised: "$1.7m raised",
        link: "https://techcrunch.com/2018/08/15/login-with-coinbase/",
        linkTitle: "Learn about the acquisition",
        tags: [
            {
                content: "FreeV SP16",
                backgroundColor: "#67379A"
            },
            {
                content: "Acquired",
                backgroundColor: "#424242"
            }
        ]
    },
    {
        logo: gainful,
        companyName: "Gainful",
        description: "Personalized protein powder, delivered directly to your doorstep.",
        raised: "$120k raised",
        link: "https://www.gainful.com",
        linkTitle: "Check out their website",
        tags: [
            {
                content: "FreeV SP18",
                backgroundColor: "#67379A"
            },
            {
                content: "YC W2018",
                backgroundColor: "#EC8641"
            }
        ]
    }];

    let pressContent = [
        {
            address: "https://www.wired.com/story/the-college-kids-doing-what-twitter-wont/",
            image: wired,
        },
        {
            address: "https://techcrunch.com/2015/06/29/yc-backed-instant-esports-is-espn-for-competitive-gaming/",
            image: tc,
        },
        {
            address: "http://www.huffingtonpost.com/rawan-abushaban/wildfire-app-alerts-users_b_9287408.html",
            image: huffpost,
        },
        {
            address: "https://www.forbes.com/pictures/lmh45edlmk/30-under-30-education/#12b818c11c3d",
            image: forbes,
        },
        {
            address: "https://www.mic.com/articles/112886/a-pair-of-entrepreneurs-want-to-make-sure-every-woman-gets-the-pleasure-she-deserves#.oWYar7k3v",
            image: mic,
        },
        {
            address: "https://medium.com/@robhat/identifying-propaganda-bots-on-twitter-5240e7cb81a9",
            image: medium,
        },
        {
            address: "https://www.vox.com/2015/5/7/11562380/searching-for-the-next-stanford-silicon-valley-turns-its-eyes-to",
            image: recode,
        },

]

    let investorsContent = [
            {
                logo: ycombinator,
                name: 'YCombinator',
                website: "http://www.ycombinator.com/"
            },
            {
                logo: kpcb,
                name: 'KPCB',
                website: "http://www.kpcb.com/"
            },
            {
                logo: greylock,
                name: 'Greylock Partners',
                website: "http://www.greylock.com/"
            },
            {
                logo: pear,
                name: 'Pear VC',
                website: "http://www.pear.vc/"
            },
            {
                logo: accel,
                name: 'Accel',
                website: "https://www.accel.com/"
            },
            {
                logo: lightspeed,
                name: 'Lightspeed Ventures',
                website: "http://lsvp.com/"
            },
            {
                logo: spark,
                name: 'Spark Capital',
                website: "http://sparkcapital.com/"
            },
            {
                logo: svangel,
                name: 'SV Angel',
                website: "http://svangel.com/"
            },
        ];

        let partnersContent = [
                {
                    logo: kpcb,
                    name: 'KPCB',
                    website: "http://www.kpcb.com/"
                },
                {
                    logo: greylock,
                    name: 'Greylock Partners',
                    website: "http://www.greylock.com/"
                },
                {
                    logo: pear,
                    name: 'Pear VC',
                    website: "http://www.pear.vc/"
                },
                {
                    logo: accel,
                    name: 'Accel',
                    website: "https://www.accel.com/"
                },
                {
                    logo: cooley,
                    name: 'Cooley',
                    website: "https://www.cooley.com"
                },
                {
                    logo: house,
                    name: 'The House Fund',
                    website: "http://thehouse.fund/"
                },
                {
                    logo: svb,
                    name: 'Silicon Valley Bank',
                    website: "https://www.svb.com/"
                },
                {
                    logo: gc,
                    name: 'General Catalyst',
                    website: "https://www.generalcatalyst.com/"
                },
                {
                    logo: scet,
                    name: 'Stardja Center for Entreprenuership and Technology',
                    website: "https://scet.berkeley.edu/"
                },
                {
                    logo: fbstart,
                    name: 'FB Start',
                    website: "https://fbstart.com/"
                },
                {
                    logo: github,
                    name: 'Github',
                    website: "http://github.com"
                },
                {
                    logo: aws,
                    name: 'AWS Activate',
                    website: "https://aws.amazon.com/activate/"
                },
            ];

    let companies = companiesContent.map((company) => {
        return <HomeCompany
                logo={company.logo}
                companyName={company.companyName}
                description={company.description}
                raised={company.raised}
                link={company.link}
                linkTitle={company.linkTitle}
                tags={company.tags}
            />
    })

    let investors = investorsContent.map((investor) => {
        return (<a href={investor.website}><img src={investor.logo} alt={investor.name} /></a>);
    });

    let partners = partnersContent.map((partner) => {
        return (<a href={partner.website}><img src={partner.logo} alt={partner.name} /></a>);
    });

    let press = pressContent.map((link) => {
        return <li><a href={link.address} target="_blank"><img src={link.image} /></a></li>;
    });

    const images = [{ src: './slider1.png' }, { src: './slider2.JPG' },
    { src: './slider3.jpg' }, { src: './slider4.jpg' }, { src: './slider5.jpg' }];


  return (
    <section>
        <div className="splash">
            <div className="container">
                <span>
                    <h1>Empowering the brightest founders in Berkeley</h1>
                    <h2>Free Ventures is Cal’s leading pre-seed startup accelerator</h2>
                    <Link to="/apply" className="apply">Recruiting Spring 2021 Startups</Link>
                </span>
                <span>
                    <img src={freevgroup} alt="" />
                </span>

            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="blueWaveTop" viewBox="0 0 1440 320"><path fill="#eeeeee" fill-opacity="1" d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className="overview">
            <div className="container overviewLayout">
                <div className="mini-header">
                    <h2>The Free Ventures Accelerator</h2>
                    <p>Free Ventures is a semester long program that runs both in the fall and spring academic semesters. We connect founders to experienced mentors who can help think strategically about how to grow their businesses and provide a host of personalized resources to help startups scale into the future.</p>
                    <Link to="/program" className="genericButton">Learn more about the program </Link>

                </div>
                <div className="numbers">
                    <h3><span className="bigNumber">62</span> alumni companies</h3>
                    <h3><span className="bigNumber">$55m</span> of follow-on capital</h3>
                    <h3><span className="bigNumber">14</span> batches hosted</h3>
                </div>
            </div>
            <div className="pressHome" >
                <hr />
                <ul>
                    {press}
                </ul>
            </div>
        </div>
        <div className="tiers homeSection">
            <div className="container">
                <h2>What we offer</h2>
                <div className="three-grid">
                    <article>
                        <span>
                            <img src={funds} alt="" />
                        </span>

                        <span>
                            <h3>Equity-free Funds</h3>
                            <p>We provide equity free funds to reimburse costs associated with growing your company on campus.</p>
                        </span>
                    </article>
                    <article>
                        <span>
                            <img src={mentors} alt="" />
                        </span>

                        <span>
                            <h3>Mentorship</h3>
                            <p>Each week, we bring in founders, investors, and industry experts to help guide our teams. </p>
                        </span>

                    </article>
                    <article>
                        <span>
                            <img src={workshops} alt="" />
                        </span>
                        <span>
                            <h3>Curriculum</h3>
                            <p>We host workshops including sales, product, and design, to help founders learn quickly and scale.</p>
                        </span>
                    </article>
                    <article>
                        <span>
                            <img src={community} alt="" />
                        </span>

                        <span>
                            <h3>Community</h3>
                            <p>Our campus network provides access to Berkeley’s growing entrepreneurship ecosystem.</p>
                        </span>
                    </article>
                    <article>
                        <span>
                            <img src={legal} alt="" />
                        </span>

                        <span>
                            <h3>Legal / Banking</h3>
                            <p>We partner with top firms SVB and Cooley to provide founder-friendly legal and banking services. </p>
                        </span>

                    </article>
                    <article>
                        <span>
                            <img src={fundraising} alt="" />
                        </span>
                        <span>
                            <h3>Fundraising Guidance</h3>
                            <p>We help our companies fundraise from top investors in the valley during and after the batch.</p>
                        </span>
                    </article>
                </div>
            </div>
        </div>
        <svg className="grayWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,64L60,64C120,64,240,64,360,80C480,96,600,128,720,165.3C840,203,960,245,1080,256C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <div className="portfolioHome homeSection">
            <div className="container">
                <h2>Selected portfolio</h2>
                <div className="three-grid">
                    {companies}
                </div>
                <Link to="/portfolio" className="genericButton">See all our portfolio companies</Link>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" d="M0,128L60,138.7C120,149,240,171,360,176C480,181,600,171,720,149.3C840,128,960,96,1080,85.3C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <div className="sponsors homeSection">
            <div className="container">
                <h2 className="pratik">Our companies are funded by leading investors</h2>
                <div className="four-grid">
                    {investors}
                </div>
                <br />
                <Link to="/partners" className="genericButton">Learn more about our partnerships</Link>
            </div>
        </div>
        <div className="contactSection homeSection">
            <div className="container">
                <h2>Looking to get involved?</h2>
                <p>We believe a university ecosystem is the ideal place to start up, and Cal is one of the best. But there's still a huge need for a strengthened community on campus to bring students together to tackle meaningful challenges. Join us in our quest to build a better community.</p>
                <ContactForm />
            </div>
        </div>
    </section>
    );
}

export default Home;
