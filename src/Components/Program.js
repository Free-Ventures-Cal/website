import React from 'react';
import GenericTop from './GenericTop';
import SpotLightArticle from './SpotlightArticle';

import './../styles/App.css';
import './../styles/Program.css';

import thiel from './../assets/program/thiel.png';
import forbes from './../assets/program/forbes.png';
import yc from './../assets/program/yc.png';
import greylock from './../assets/program/greylock.png';
import accel from './../assets/program/accel.png';
import kp from './../assets/program/kp.png';

import mentors from './../assets/program/mentorship.png';
import workshops from './../assets/program/training.png';
import community from './../assets/program/group.png';

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
                        <div className="program-grid-mobile">
                            <article id="program-top">
                                <span>
                                    <img src={community} alt="" />
                                </span>

                                <span>
                                    <h3>Point Person Structure</h3>
                                    <p>Often cited as our biggest value-add by batch companies, each batch company will be assigned one or two internal team members who will be there for you throughout the entire batch and way beyond that. We’ll give honest feedback, idea jam on new solutions, hear your dilemmas out, and always try to set you on the right path. More importantly, we pride ourselves on bending over backwards to serve you. You’ll find us fielding 1 AM panic texts, cold-DMing people on LinkedIn to get you personalized mentor intros, building out an angel investor database for your space, showing up at your events early to set up chairs if you need us to - you get the idea. We accept small batches because this startup stuff is hard and you should have someone as invested as you are.</p>
                                </span>
                            </article>
                        </div>
                        <div className="program-grid">
                            {/* <article>
                                <span>
                                    <img src={equity} alt="" />
                                </span>
                                <span>
                                    <h3>Equity-free Funds</h3>
                                    <p>Because Berkeley is probably expensive enough, we provide student startups with financial support for their project without taking any equity - and this sets us apart from most accelerators. Thanks to the generosity of our <a href="/partners">sponsors</a>, accelerator teams get $1000 microgrants to bring their startup to the next level, no strings attached. If you’re interested in becoming a sponsor or donating (we’re a nonprofit!), please email <a href="mailto:aamir@freeventures.org">aamir@freeventures.org</a>.</p>
                                </span>
                            </article> */}
                            <article>
                                <span>
                                    <img src={mentors} alt="" />
                                </span>

                                <span>
                                    <h3>Mentorship</h3>
                                    <p>What are you doing on your Monday evenings? If you’re part of FreeV’s batch, you’ll get to have one-on-one time with four to five incredible mentors every single week in a round-robin session, and our network runs deep. They’ve sold companies to Coinbase, served as partners at leading VC firms, brought companies public, raised millions of venture capital, and so much more. Most importantly, they care a lot about FreeV companies.</p>
                                </span>

                            </article>

                            <article>
                                <span>
                                    <img src={workshops} alt="" />
                                </span>
                                <span>
                                    <h3>Curriculum</h3>
                                    <p>On Wednesdays, we host leading experts to run curriculum sessions about whatever that specific batch needs: specific topical areas such as design, product development, user interviews, sales, etc. We also bring in partners SVB and Cooley to give legal and banking assistance, which can range from opening a corporate banking account, incorporating your company, as well as the complexity of dividing up equity between founders.</p>
                                </span>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="trackRecord">
                    <div className="container">
                        <h2>Our Track Record</h2>
                        <div className="track-record-top tr-container">
                            <h3>Unwavering Support</h3>
                            <p className="track-info">Since 2013, Free Ventures has been Cal's leading pre-seed accelerator, combining the power of our mentor network, sponsor-led curriculum, and unique personalized point person structure to elevate student startups at Cal to the next level. Despite only accepting 4-5 startups a semester, we've helped teams raise over $85 million in venture capital, watched them get acquired by leading companies, and sent numerous startups to YC every year.</p>
                            <a href="/portfolio" className="tr-button button"><p>See all our companies</p></a>
                        </div>
                        <div className="track-record-bottom tr-container">
                            <div className="tr-bottom-section">
                                <h3>Founders</h3>
                                <div className="founders-flex">
                                    <img src={thiel} />
                                    <img src={forbes} />
                                </div>
                            </div>
                            <svg className="no-show-mobile" id="tr-line" />
                            <div className="tr-bottom-section">
                                <h3>Teams</h3>
                                <div className="teams-flex">
                                    <img src={yc} />
                                    <img src={accel} />
                                    <img id="tr-img-greylock" src={greylock} />
                                    <img id="tr-img-kp" src={kp} />
                                </div>
                            </div>
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
