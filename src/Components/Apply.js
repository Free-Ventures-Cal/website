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

function Apply(props) {

    // Content

    let airtableLink = "https://airtable.com/shrXM7D33quotGcoj";


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
    ];

    let timelineContent = [
        {
            date: "October 14",
            description: "Application Released",
            image: application
        },
        {
            date: "October 20",
            description: "Infosession",
            image: interview
        },
        {
            date: "October 30",
            description: "Application Due",
            image: application
        },
        {
            date: "November 1-14",
            description: "First & Second Round Interviews",
            image: interview
        },
        // {
        //     date: "November 8-14",
        //     description: "Final Round Interviews",
        //     image: rocket
        // },
    ];

    let timelineWithArrows = timelineContent.map((event, i) => {
        const isLastOne = (timelineContent.length === i + 1);
        const result = (
            <article>
                <div>
                    <img src={event.image} alt="" />
                </div>
                <h2>{event.date}</h2>
                <p>{event.description}</p>
            </article>
        );
        return isLastOne ? result : [result, (
            <span>
                <img src={arrow} alt="" />
            </span>
        )];
    });

    // Tab Functionality

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
    }, [value]);

    return (
        <section>
            <GenericTop
                header={'Join the FreeV Family'}
                description={'Internal Team applications are now open! Please apply below.'}
            >
                <a href={airtableLink} className="genericButton" target="_blank" rel="noopener noreferrer">Apply for Fall 2021 Internal Team</a>
                &nbsp;
                &nbsp;
                <a href="https://forms.gle/47YUmy5eXgaotm169" className="genericButton" target="_blank" rel="noopener noreferrer">Batch Recruitment Interest Form</a>
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
                            <br/>
                            <a href="https://forms.gle/47YUmy5eXgaotm169" className="genericButtonGray" target="_blank" rel="noopener noreferrer">Batch Recruitment Interest Form</a>

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
                            <h2>Fall 2021 Applications are now open!</h2>
                            <a href={airtableLink} className="genericButtonGray" target="_blank" rel="noopener noreferrer">Apply for Fall 2021 Internal</a>
                            <p>Here are some details about our recruiting timeline and frequently asked questions</p>

                            <h2>Fall 2021 Timeline</h2>
                            <div className="timeline">
                                {timelineWithArrows}
                            </div>
                            <p>If you’re interested in startups and don’t know where to start, you’ve come to the right place!</p>
                            <p>Free Ventures is the absolute best way you can dive into the startups at Cal and beyond. As an internal team member, you will have unparalleled exposure to the entrepreneurship ecosystem. </p>
                            <p>All internal team members serve as point people for our batch startups, meaning you’ll get to work one-on-one with incredible startup founders from your very first semester - helping them problem-solve, think of crazy solutions, deep dive into a unique problem space, and so much more. Our founders are everyone from Berkeley undergrads with a love of machine learning to PhD students with biomedical expertise, and you get to have a very real and tangible impact on their startup journeys. If everything goes to plan, they’ll be changing the world completely as they do this for years, and you were there from the beginning. </p>
                            <p>Outside of being a point person, you’ll also be taking on a lot of operating roles since there’s a great deal of behind-the-scenes work that goes into running Free Ventures. Scout and interview potential batch companies, create an innovative marketing plan to increase diversity, develop an incubator track for earlier-stage companies in nascent spaces, organize mentor sessions and network with some incredible mentors while you’re at it, write a Medium article about Cal’s coolest startup pitch competitions - whatever you want to do, we’ll give you it and you can run with it. </p>

                            <h2>What We Look For</h2>
                            <p>If you’re a student currently enrolled at Berkeley, ready to devote 8-10 hours/week with 6-8 pm PST on Mon/Wed in-person, incredibly passionate about startups, and ready to take crazy initiative and work really hard, we’d love to talk to you. Experience is absolutely not needed and we don’t have a single major or profile in mind. If you’re in doubt, apply anyway - let’s chat.</p>
                        </TabPanel>
                    </div>
                </div>
            </GenericPage>
        </section>
    );
}

export default Apply;
