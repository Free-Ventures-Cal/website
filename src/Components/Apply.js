import React, { useEffect } from 'react';
import './../styles/App.css';
import './../styles/Apply.css';

import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import FAQHolder from './FAQHolder.js';

import rocket from './../assets/rocket-white.png';
import application from './../assets/application.png';
import interview from './../assets/interview.png';
import arrow from './../assets/arrow.png';


import Typography from '@material-ui/core/Typography';

function Apply(props) {

    const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  tabStyle: {
    backgroundColor: theme.palette.background.paper,
  }
}));

const classes = useStyles();

// change .useState value for either 0 - batch recruitment, 1 - internal recruitment

const [value, setValue] = React.useState(1);

function handleChange(event, newValue) {
    setValue(newValue);
}

useEffect(() => {
    console.log(value);
}, [value])

let airtableLink = "https://airtable.com/shr7f5m0KGJ9SwoC7";


let batchFAQContent = [
    {
            question: "What’s the time commitment during the batch?",
            answer: "5 hours per week for program sessions. We require founders to be present at all sessions 6-8pm PST every Monday and Wednesday.",
    },
    {
            question: "How long is the batch?",
            answer: "10-12 weeks",
    },
    {
            question: "What resources do alumni companies receive?",
            answer: "We provide help with fundraising, hiring, introductions to people in our network, advise, etc. to our alumni companies. Alumni companies still get access to the benefits provided by our sponsors and partners.",
    },
    ]

    let internalFAQContent = [
        {
                question: "What type of work does the Internal team do? ",
                answer: "We spend the beginning of each semester recruiting batch companies and setting up the program. Internal team members organize the mentor sessions, plan the curriculum workshops, and coordinate with our sponsors. We also advise our batch companies on topics ranging from product to fundraising.",
        },
        {
                question: "Is prior experience working with startups required?",
                answer: "It is preferred, but not a requirement.",
        },
        {
                question: "What types of companies do we work with?",
                answer: "Our companies tackle problems in Neuroscience, Drones, IoT, VR, AI/ML, Blockchain, Bioengineering, FinTech, and Renewable Energy, to name a few.",
        },
        {
          question: "Are you looking for a particular major or background?",
          answer: "We don't have a required major and/or background, just an interest in working with startups and bringing new perspectives to our team.",
  },

        ]

    return (
        <section>
            <GenericTop
                header={'Join the FreeV Family'}
                description={'Internal Team applications are now open! Please apply below.'}
            >
                <a href={airtableLink} className="genericButton" target="_blank">Spring 2021 Internal Application</a>
            </GenericTop>
            <GenericPage>
                <div className={classes.root}>
                  <div className={classes.tabStyle}>
                    <AntTabs value={value} onChange={handleChange} aria-label="ant example">

                      <AntTab label="Batch Recruitment" />
                      <AntTab label="Internal Recruitment" />
                    </AntTabs>

                    {/* BATCH TAB */}

                    <TabPanel value={value} index={0}>
                        <h2>Spring 2021 Applications for startups are now closed. Please apply for our Fall 2021 batch in the future.</h2>
                        <a href={airtableLink} className="genericButtonGray" target="_blank">Spring 2021 Batch Application</a>
                        <a href="https://www.facebook.com/events/415880429743413" className="genericButtonGray" target="_blank">Infosession RSVP</a>

                        <ul>
                            {/* <li>
                                <p>
                                    <strong>Coffee chats: </strong>sign up for a informational coffee chat to learn more about our program and ask any questions you have. Coffee chats are non-evaluative and not necessary to be admitted to the program.
                                </p>
                            </li> */}
                            <li>
                                <p>
                                    <strong>Infosession: </strong> Come to our infosession on Tuesday, February 2nd from 6-7:30pm. Check the FB event linked above to RSVP!
                                </p>
                            </li>

                        </ul>

                        <p>Here are some details about our recruiting timeline and frequently asked questions</p>
                        <h2>Spring 2021 Timeline</h2>
                        <div className="timeline">
                            <article>
                                <div>
                                    <img src={application} alt="" />
                                </div>
                                <h2>February 5th, 11:59pm</h2>
                                <p>Applications close</p>
                            </article>
                            <span>
                                <img src={arrow} />
                            </span>
                            <article>
                                <div>
                                    <img src={interview} alt="" />
                                </div>
                                <h2>February 10th-12th</h2>
                                <p>Interviews</p>
                            </article>
                            <span>
                                <img src={arrow} />
                            </span>
                            <article>
                                <div>
                                    <img src={rocket} alt="" />
                                </div>
                                <h2>February 22nd</h2>
                                <p>Spring 2021 Batch Starts</p>
                            </article>
                        </div>
                        <h2>What we look for</h2>
                        <ul>
                            <li><p>
                                One founder to be a student at UC Berkeley.
                            </p></li>
                            <li><p>
                                Founders that have experience building things and coming up with creative solutions for real problems.
                            </p></li>
                            <li><p>
                                Tangible commitment to your idea, whether that’s an MVP, a prototype, or some initial traction with customers.
                            </p></li>
                            <li><p>
                                A founding team that’s deeply passionate about the company they’re growing and the space they’re working in.

                            </p></li>
                            <li><p>
                                We are industry and stage agnostic.
                            </p></li>
                        </ul>
                    <h2>Frequently asked questions</h2>
                    <FAQHolder
                        faq={batchFAQContent}
                    />
                <p>More questions? Fill out this <a href="/contact">contact form</a> and we'll get back to you!</p>
                    <br />
                    </TabPanel>

                {/* INTERNAL TAB */}

                <TabPanel value={value} index={1}>
                    {/* <a href={airtableLink} className="genericButtonGray" target="_blank">Fall 2020 Internal Application</a>
                    <a href="https://www.facebook.com/events/871131273419831/" className="genericButtonGray" target="_blank">Infosession RSVP</a>
                    <ul>
                            <li>
                                <p>
                                    <strong>Infosession: </strong> Come to our virtual infosession on Tuesday, October 20th from 6-7pm PST to learn more about what internal team members do and what we look for in applicants. We'll post the Zoom link on our Facebook event linked above.
                                </p>
                            </li>

                        </ul> */}


                    <h2>Spring 2021 Recruitment Timeline</h2>
                    <div className="timeline">
                            <article>
                                <div>
                                    <img src={application} alt="" />
                                </div>
                                <h2>11:59pm, March 12th</h2>
                                <p>Applications close</p>
                            </article>
                            <span>
                                <img src={arrow} />
                            </span>
                            <article>
                                <div>
                                    <img src={interview} alt="" />
                                </div>
                                <h2>March 30th - April 1st</h2>
                                <p>1st Round Interviews</p>
                            </article>
                            <span>
                                <img src={arrow} />
                            </span>
                            <article>
                                <div>
                                    <img src={rocket} alt="" />
                                </div>
                                <h2>April 5th - 11th</h2>
                                <p>Coffee Chats + 2nd Round</p>
                            </article>
                        </div>
                        <h2>What we look for</h2>
                        <ul>
                            <li><p>
                              Currently enrolled student at UC Berkeley.
                            </p></li>
                            <li><p>
                              Passionate about working with early stage startups.
                            </p></li>
                            <li><p>
                              Brings a new perspective to our team
                            </p></li>
                            <li><p>
                            Experienced leading teams and taking initiative
                            </p></li>
                            <li><p>
                                Ready to commit 8-10 hours per week and free Mondays and Wednesdays 6-8pm.
                            </p></li>
                        </ul>

                        <h2>Frequently asked questions</h2>
                    <FAQHolder
                        faq={internalFAQContent}
                    />
                    </TabPanel>
                  </div>
                </div>
            </GenericPage>
        </section>
    );
}

export default Apply;
