import React from 'react';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import { Link } from "react-router-dom";
import SpotLightArticle from './SpotlightArticle';

import './../styles/App.css';
import './../styles/Program.css';

import freevgroup from './../assets/program/freevgroup.jpg'
import thiel from './../assets/program/thiel.png';
import forbes from './../assets/program/forbes.png';
import yc from './../assets/program/yc.png';
import greylock from './../assets/program/greylock.png';
import accel from './../assets/program/accel.png';
import kp from './../assets/program/kp.png';

import equity from './../assets/program/business.png';
import mentors from './../assets/program/mentorship.png';
import workshops from './../assets/program/training.png';
import community from './../assets/program/group.png';
import legal from './../assets/program/banking.png';
import fundraising from './../assets/program/fundraise.png';

import method from './../assets/program/method.jpeg';
import intro from './../assets/program/method.png';
import spotlight from './../assets/program/spotlight.jpeg';

function Program() {

    let articles = [{
        image: intro,
        headline: "Introducing Free Ventures’ Batch XII",
        date: "May 3, 2019",
        url: "https://medium.com/@FreeVentures/introducing-free-ventures-batch-xii-c9dd2fd3d25a"
    },
    {
        image: method,
        headline: "Introducing Free Ventures’ Batch XI",
        date: "November 30, 2018",
        url: "https://medium.com/@FreeVentures/introducing-free-ventures-batch-xi-49e8fe433386"
    },
    {
        image: spotlight,
        headline: "Introducing COBA — The Coffee Bar",
        date: "October 31, 2018",
        url: "https://medium.com/@FreeVentures/introducing-coba-the-coffee-bar-4a02a4be5472"
    }
    ];

    let spotarticles = articles.map((art) => {
        return <SpotLightArticle
                image={art.image}
                headline={art.headline}
                date={art.date}
                url={art.url}
                />
    })

    return (
        <section>
            <GenericTop
                header={'Program'}
                description={'Each semester the brightest UC Berkeley student founders apply to Free Ventures to bring their dissertation research, side projects, or innovative products to market.'}
            />
            <div>
                <div className="tiers-program">
                    <div className="container">
                        <h2>What we provide</h2>
                        <div className="program-grid">
                        <article>
                            <span>
                                <img src={equity} alt="" />
                            </span>
                            <span>
                                <h3>Equity-free Funds</h3>
                                <p>We fund our teams to provide student startups with financial support for their project. We call them micro grants, made to alleviate students' financial concerns during the development of their startup with no strings attached.</p>
                            </span>
                        </article>
                        <article>
                            <span>
                                <img src={mentors} alt="" />
                            </span>

                            <span>
                                <h3>Mentorship</h3>
                                <p>We connect founders with a handful of thought-leaders (e.g. founders, investors, or executives) within each company's space to provide guidance and build a lasting relationship. Our Monday Mentor Sessions also provide feedback from 40+ individual mentors over the course of the batch. </p>
                            </span>

                        </article>
                        <article>
                            <span>
                                <img src={workshops} alt="" />
                            </span>
                            <span>
                                <h3>Curriculum</h3>
                                <p>Our workshops are lead by industry or academic experts and they are designed to provide information that tracks the development of each team's progress and premptively answers any questions that may arise. Topics range broadly and include design, product managment, funding, and legal incorporation. </p>
                            </span>
                        </article>
                        <article>
                            <span>
                                <img src={community} alt="" />
                            </span>

                            <span>
                                <h3>Community</h3>
                                <p>Free Ventures provides students access to a variety of contacts from industry, academia, and the student community. This network can be tapped to provide technical expertise, funding advice, legal services, amongst other wisdom and help. Get plugged in to the network you need to succeed.</p>
                            </span>
                        </article>
                        <article>
                            <span>
                                <img src={legal} alt="" />
                            </span>

                            <span>
                                <h3>Legal/Banking Information</h3>
                                <p>We partner with SVB and Cooley to provide deals on legal and banking assistance, which can range from opening a corporate banking account, incorporating your company, as well as the complexity of dividing up equity between founders. We host multiple sessions with Cooley and SVB to provide you with the best resources at the right time and at founder friendly costs.  </p>
                            </span>

                        </article>
                        <article>
                            <span>
                                <img src={fundraising} alt="" />
                            </span>
                            <span>
                                <h3>Fundraising Guidance</h3>
                                <p>At the end of each semester we organize VC trips with top firms for founders to pitch in front of notable investors. We also leverage our network of angel investors and pre-seed firms to connect our batch companies while they are in the process of fundraising. We help our founders refine their pitch to guarantee best results.  </p>
                            </span>
                        </article>
                        </div>
                    </div>
                </div>
                <div className="trackRecord">
                    <div className="container trackRecord">
                        <h2>Our Track Record</h2>
                        <div className="trackInfo">
                            <div className="trackFounders">
                                <h1>FOUNDERS</h1>
                                <div className="foundersPics">
                                    <img src ={thiel}/>
                                    <img src ={forbes}/>
                                </div>
                            </div>
                            <div className="trackTeams">
                                <h1>TEAMS</h1>
                                <h3>over $55 million raised from:</h3>
                                <div className="teamsVCPics">
                                    <img src={yc}/>
                                    <img className= "greylock" src={greylock}/>
                                    <img src={kp}/>
                                    <img src={accel}/>
                                </div>
                                <Link to="/portfolio" className="genericButton">See all our companies</Link>
                            </div>
                        </div>
                        <div className="trackImage">
                            <img src={freevgroup}/>
                        </div>
                    </div>
                </div>

                <div className="spotlightArticles">
                    <div className="container">
                        <h2>FreeV Spotlight</h2>
                        <h3>Keep up to date on our insights, obervations, and updates about the community!</h3>
                        <div className="three-grid">
                            {spotarticles}
                        </div>
                        <a href="https://medium.com/@FreeVentures" className="genericButton">See all our articles</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Program;
