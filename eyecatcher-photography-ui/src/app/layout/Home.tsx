import React, { useEffect, useState } from 'react';
import { AspectRatio, Button, Divider } from '@mui/joy';
import '../styles/homepage.css';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadeInElement from '../common/FadeInElement';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion, { accordionClasses } from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';


export default function Home(){
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const [expandedAccordion, setExpandedAccordion] = useState(null);
    const testimonialsData = [
        {
            name: 'Katie Heng-Funa',
            quote: `Jes (EyeCatcher Photography) offers an exceptional bang for the buck. The quality of her work is matched by her reasonable pricing, 
                    making it a win-win for anyone looking for top-notch photography. I wholeheartedly recommend her to anyone in need of a skilled and 
                    personable photographer who delivers beyond expectations. We are grateful for the memories she has preserved for us and will be 
                    returning for more sessions in the future.`,
            image: 'john.jpg',
        },
        {
            name: 'Trixia Nanas Baquir',
            quote: `Grateful for this team for capturing the moments during our prenup session and wedding day. They really captured the love and how 
                    beautiful our day it was👏👏👏`,
            image: 'john.jpg',
        },
        {
            name: 'Mien Mayoralgo',
            quote: `When it comes to any events, parties, simple gatherings, and lavish gatherings. I will definitely recommend these people. They are keen 
                    on every detail, communication-wise, and work like magic. What I love about them is they make sure that your event is along with the concept 
                    and perfection.`,
            image: 'john.jpg',
        },
        {
            name: 'Khaizer Ann Angeles Potian',
            quote: `100000/10 superb!!! When it comes to any events, They will surely catch your eyes and smiles. They will surely catch those memories we will always cherish. 
                    From the photographers, videographer, editors and hmu artist. The team was so friendly and really approachable from the moment I messaged them.
                    The outputs were really amazing!!`,
            image: 'john.jpg',
        },
    ];

    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }: any) => (
        <span style={{position: 'relative'}} {...props}>{children}</span>
    );

    const SlickSettings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        speed: 500,
        nextArrow: (<SlickButtonFix>
                        <div className='circle-button'>
                            <FontAwesomeIcon 
                                icon='chevron-right' 
                                style={{
                                    color:'white',
                                    fontWeight: 600,
                                    fontSize: '25px'
                                }} 
                            />
                        </div>
                    </SlickButtonFix>),
        prevArrow: (<SlickButtonFix>
                        <div className='circle-button'>
                            <FontAwesomeIcon 
                                icon='chevron-left' 
                                style={{
                                    color:'white',
                                    fontWeight: 600,
                                    fontSize: '25px'
                                }} 
                            />
                        </div>
                    </SlickButtonFix>),
    };

    const handleAccordionEnter = (accordionId: any) => {
        setExpandedAccordion(accordionId);
    };

    const handleAccordionLeave = () => {
        setExpandedAccordion(null);
    };

    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    },[]);

    return(
        <>
        <div style={{marginTop: '80px', overflow: 'hidden'}}>
            <div className='grid-container'>
                <div className='grid-item item1'>
                    <div>
                        <Typography className='intro-quote'>
                            Photography is the <br/> <strong className='intro-quote colored-font'> art of froz</strong>
                            <span 
                                className='intro-quote' 
                                style={{
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '10px',
                                    textDecorationThickness: '4px',
                                    color: 'var(--blue)'
                                }}
                            >
                                <strong className='intro-quote colored-font'>en time</strong>
                            </span>
                        </Typography>
                        <Typography className='intro-message'>
                            We believe that remarkable photography should be accessible to all
                            whether it's a special event, a family portrait, or a personal photoshoot, 
                            our photography services are customized to meet your unique needs.
                            Explore our budget-friendly pricing options to bring your visions to life.
                        </Typography>
                        <Button 
                            className='intro-button primary-btn' 
                            endDecorator={<FontAwesomeIcon icon='chevron-right' />}
                        >
                            Learn more
                        </Button>
                    </div>
                </div>
                <div className='grid-item item2'>
                    <img src='/images/intro-image1.jpg' alt='Jasper and Natasha' className='intro-image1'/>
                </div>
            </div>

            <Divider className='custom-MUIDivider'/>

            <div className='subcontainer' style={{marginTop: '50px', transition: 'all 0.3 ease'}}>
                <img className='leaf leaf1' alt='leaf' src='/images/icons/leaf.png'/>
                <img className='leaf leaf2' alt='leaf' src='/images/icons/leaf.png'/>
                <FadeInElement>
                <Typography 
                    className='intro-quote centered-horizontal colored-font'
                    sx={{
                        padding: '10px 0px !important',
                        wordWrap: 'break-word',
                        width: '200px',
                        margin: 'auto',
                        textAlign: 'center'
                    }}
                >
                    We offer several services for you
                </Typography>
                </FadeInElement>
                <FadeInElement>
                <Typography
                    className='centered-horizontal'
                    sx={{
                        margin: 'auto',
                        fontWeight: 500,
                        width: isSmallScreen ? '80%' : '400px',
                        textAlign: 'center',
                        paddingBottom: '30px'
                    }}
                >
                    We provide a multitude of photography services tailored to capture the essence 
                    and beauty of your special moments
                </Typography>
                </FadeInElement>

                <AccordionGroup
                    size='lg'
                    sx={{
                        paddingTop: '50px',
                        paddingBottom: '20px',
                        transition: '0.2s ease',
                        margin: 'auto',
                        maxWidth: 600,
                        [`& .${accordionClasses.root}`]: {
                        marginTop: '1rem',
                        marginBottom: '1rem',
                        transition: '0.2s ease',
                        '& button:not([aria-expanded="true"])': {
                            transition: '0.2s ease',
                            paddingBottom: '2rem',
                        },
                        '& button:hover': {
                            background: 'transparent',
                        },
                        },
                        [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
                        bgcolor: 'background.level1',
                        borderRadius: 'md',
                        borderBottom: '1px solid',
                        borderColor: 'background.level2',
                        transition: '0.2s ease',
                        },
                        '& [aria-expanded="true"]': {
                        boxShadow: (theme) => `inset 0 -1px 0 ${theme.vars.palette.divider}`,
                        transition: 'all 0.2s ease',
                        },
                    }}
                >
                    <FadeInElement>
                    <Accordion onMouseEnter={() => handleAccordionEnter(1)}
                                onMouseLeave={handleAccordionLeave} expanded={expandedAccordion === 1}>
                        <AccordionSummary className='custom-accordion-summary'><div>01</div><span>Birthday Services</span></AccordionSummary>
                        <AccordionDetails className='custom-accordion-details'>
                        Capture the magic of your special day with our professional birthday photography services.
                        Our skilled photographers will work with you to create a personalized photography experience, 
                        ensuring every precious memory is beautifully documented. From cake cutting to surprise expressions, 
                        we're here to make your birthday celebration truly shine.
                        </AccordionDetails>
                    </Accordion>
                    </FadeInElement>
                    <FadeInElement>
                    <Accordion  onMouseEnter={() => handleAccordionEnter(2)}
                                onMouseLeave={handleAccordionLeave} expanded={expandedAccordion === 2}>
                        <AccordionSummary className='custom-accordion-summary'><div>02</div><span>Christening Services</span></AccordionSummary>
                        <AccordionDetails className='custom-accordion-details'>
                        At your child's christening, you want to focus on the spiritual and emotional significance of the day. 
                        Let us take care of capturing the beautiful moments with our expert christening photography services.
                        We pride ourselves on creating timeless and heartwarming photos that you'll cherish for generations to come.
                        </AccordionDetails>
                    </Accordion>
                    </FadeInElement>
                    <FadeInElement>
                    <Accordion onMouseEnter={() => handleAccordionEnter(3)}
                                onMouseLeave={handleAccordionLeave} expanded={expandedAccordion === 3}>
                        <AccordionSummary className='custom-accordion-summary'><div>03</div><span>Wedding Services</span></AccordionSummary>
                        <AccordionDetails className='custom-accordion-details'>
                        Your wedding day is one of the most important and memorable moments in your life, and our wedding photography 
                        services are designed to reflect that significance.  Our team of professional photographers is committed to delivering 
                        stunning, creative, and storytelling images that will tell your unique love story.
                        </AccordionDetails>
                    </Accordion>
                    </FadeInElement>
                    <FadeInElement>
                    <Accordion onMouseEnter={() => handleAccordionEnter(4)}
                                onMouseLeave={handleAccordionLeave} expanded={expandedAccordion === 4}>
                        <AccordionSummary className='custom-accordion-summary'><div>04</div><span>Other Services</span></AccordionSummary>
                        <AccordionDetails className='custom-accordion-details'>
                        In addition to our core photography services, we offer a wide range of other photography solutions to meet your unique needs.
                        Whether you're looking for engagement photos, family portraits, corporate events, or any other special occasions, our experienced 
                        photographers are ready to provide you with exceptional quality and artistic expertise.
                        </AccordionDetails>
                    </Accordion>
                    </FadeInElement>
                </AccordionGroup>
            </div>

            <Divider sx={{marginTop: '30px !important'}}/> 

            <div className='blue-section'>
                <div className='blue-section-container'>
                    <div style={{margin: 'auto'}}>
                        <FadeInElement>
                        <Typography 
                            className='intro-quote'
                            sx={{
                                padding: '10px 0px !important',
                                wordWrap: 'break-word',
                                width: '200px',
                                margin: 'auto',
                                textAlign: 'center',
                                color: 'white'
                            }}
                        >
                            Our Statistics
                        </Typography>
                        </FadeInElement>
                        <FadeInElement>
                        <Typography
                            className=''
                            sx={{
                                margin: 'auto',
                                fontWeight: 400,
                                width: isSmallScreen ? '80%' : '400px',
                                textAlign: 'center',
                                paddingBottom: '30px',
                                color: 'white',
                                paddingTop: '25px'
                            }}
                        >
                            We are grateful for the support from photography enthusiasts like you who 
                            appreciate our artistry. You inspire us to continue our creative journey.
                            We have shared thousand of photographs and stories with you, each capturing a unique moment 
                            in time. We look forward to sharing many more memorable moments with you in the future.
                        </Typography>
                        </FadeInElement>
                    </div>
                    <FadeInElement>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 50%)',
                        gridTemplateRows: 'repeat(2, 50%)',
                        height: '300px',
                    }}>
                        <div className='milestone-card'>
                            <Typography className='milestone-numeric'>5.0</Typography>
                            <Typography className='milestone-desc'>Rating</Typography>
                        </div>
                        <div className='milestone-card'>
                            <Typography className='milestone-numeric'>13K+</Typography>
                            <Typography className='milestone-desc'>Likes</Typography>
                        </div>
                        <div className='milestone-card'>
                            <Typography className='milestone-numeric'>15K+</Typography>
                            <Typography className='milestone-desc'>Followers</Typography>
                        </div>
                        <div className='milestone-card'>
                            <Typography className='milestone-numeric'>300+</Typography>
                            <Typography className='milestone-desc'>Reviews</Typography>
                        </div>
                    </div>
                    </FadeInElement>
                </div>
            </div>

            <div className='subcontainer'>
                <div style={{margin: '50px 0 20px 0'}}>
                    <FadeInElement>
                        <Typography 
                            className='intro-quote colored-font centered-horizontal'
                            sx={{
                                marginBottom: '10px !important'
                            }}
                        >
                            Our Recent Work
                        </Typography>
                        <Typography
                            className='centered-horizontal'
                            sx={{
                                margin: 'auto',
                                fontWeight: 500,
                                width: isSmallScreen ? '80%' : '400px',
                                textAlign: 'center',
                                padding: isSmallScreen ? '0px 10% 30px 10%' : '0px 20% 30px 20%'
                            }}
                        >
                            We showcase the latest additions to our photographic portfolio, offering a glimpse into our ongoing creative journey. 
                            These images represent the culmination of our continued dedication to the art of photography, capturing moments that 
                            have moved and inspired us.
                        </Typography>
                        <div className="gallery-wrap">
                            <div className="item item-1"></div>
                            <div className="item item-2"></div>
                            <div className="item item-3"></div>
                            <div className="item item-4"></div>
                            <div className="item item-5"></div>
                        </div>
                    </FadeInElement>
                </div>
            </div>

            <div className='subcontainer'>
            <Slider {...SlickSettings}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.quote}</p>
                    </div>
                ))}
            </Slider>
            </div>
                
            <div className='container' style={{marginTop: '50px'}}>
            </div>
            
        </div>
        </>
        
        
    );
}