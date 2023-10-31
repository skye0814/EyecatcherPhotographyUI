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


export default function Home(){
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const [expandedAccordion, setExpandedAccordion] = useState(null);

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
        <div style={{marginTop: '80px'}}>
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
                        <Typography>
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
                <Typography 
                    className='intro-quote centered-horizontal colored-font'
                    sx={{
                        padding: '10px 0px !important',
                        wordWrap: 'break-word',
                        width: '200px',
                        margin: 'auto'
                    }}
                >
                    We offer several services for you
                </Typography>
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

                <AccordionGroup
                    size='lg'
                    sx={{
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
                    <Accordion  onMouseEnter={() => handleAccordionEnter(2)}
                                onMouseLeave={handleAccordionLeave} expanded={expandedAccordion === 2}>
                        <AccordionSummary className='custom-accordion-summary'><div>02</div><span>Christening Services</span></AccordionSummary>
                        <AccordionDetails className='custom-accordion-details'>
                        At your child's christening, you want to focus on the spiritual and emotional significance of the day. 
                        Let us take care of capturing the beautiful moments with our expert christening photography services.
                        We pride ourselves on creating timeless and heartwarming photos that you'll cherish for generations to come.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion onMouseEnter={() => handleAccordionEnter(3)}
                                onMouseLeave={handleAccordionLeave} expanded={expandedAccordion === 3}>
                        <AccordionSummary className='custom-accordion-summary'><div>03</div><span>Wedding Services</span></AccordionSummary>
                        <AccordionDetails className='custom-accordion-details'>
                        Your wedding day is one of the most important and memorable moments in your life, and our wedding photography 
                        services are designed to reflect that significance.  Our team of professional photographers is committed to delivering 
                        stunning, creative, and storytelling images that will tell your unique love story.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion onMouseEnter={() => handleAccordionEnter(4)}
                                onMouseLeave={handleAccordionLeave} expanded={expandedAccordion === 4}>
                        <AccordionSummary className='custom-accordion-summary'><div>04</div><span>Other Services</span></AccordionSummary>
                        <AccordionDetails className='custom-accordion-details'>
                        In addition to our core photography services, we offer a wide range of other photography solutions to meet your unique needs.
                        Whether you're looking for engagement photos, family portraits, corporate events, or any other special occasions, our experienced 
                        photographers are ready to provide you with exceptional quality and artistic expertise.
                        </AccordionDetails>
                    </Accordion>
                </AccordionGroup> 
            </div>

            <div className='blue-section'>
                <FadeInElement>
                    <Typography 
                        className='intro-quote centered-horizontal'
                        sx={{
                            padding: '30px 0px !important',
                            color: 'white'
                        }}
                    >
                        About Eyecatcher Photography
                    </Typography>
                </FadeInElement>
                <div className='blue-section-container'>
                    <AspectRatio ratio='1' sx={{ width: 300, margin: 'auto'}}>
                        <img
                        src="/images/founder-image.jpg"
                        loading="lazy"
                        alt=""
                        />
                    </AspectRatio>
                    <Typography sx={{ 
                        textAlign: 'justify', 
                        fontFamily: 'General Sans',
                        width: '85%',
                        color: 'white', 
                        }}
                        style={{margin: 'auto'}}
                    >
                            I am Jes Sta Isabel-Pacios, the founder of Eyecatcher Photography. 
                            I am thrilled to welcome you to our world of creativity, visual storytelling, 
                            and the art of capturing moments that last a lifetime.
                            <br/><br/>
                            Photography has been my passion for as long as I can remember. 
                            It's not just about taking pictures; it's about preserving emotions, experiences, and memories. 
                            Every photograph we create at Eyecatcher is a piece of our heart and soul, 
                            reflecting the unique beauty and essence of every moment.
                            <br/><br/>
                            Through the lens of Eyecatcher, we aim to transform every occasion into a timeless 
                            work of art. We cherish every opportunity to be a part of your story. 
                            Our commitment to excellence and the relentless pursuit of creativity is at the heart of everything we do.
                    </Typography>
                </div>
            </div>
            
            <div className='container' style={{marginTop: '50px'}}>
                {/* <FadeInElement>
                    <Card
                        className='founder-message'
                        variant="soft"
                        orientation="horizontal"
                        size='lg'
                        sx={{
                            marginBottom: '50px !important',
                            transition: 'fade 1s ease',
                            margin: 'auto',
                            width: '80%',
                            '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                        }}
                        >
                        <AspectRatio ratio='1' sx={{ width: 300, margin: 'auto'}}>
                            <img
                            src="/images/founder-image.jpg"
                            loading="lazy"
                            alt=""
                            />
                        </AspectRatio>
                        <CardContent sx={{alignItems: 'center'}}>
                            <Typography sx={{
                                fontWeight: '500', 
                                fontSize: '18px', 
                                marginBottom: '7px', 
                                color: 'var(--blue)'}}
                            >
                                Jes Sta Isabel-Pacios
                            </Typography>
                            <Typography sx={{ 
                                textAlign: 'justify', 
                                fontFamily: 'General Sans',
                                width: '85%',
                                color: 'black'
                                }}
                            >
                                    I am Jes Sta Isabel-Pacios, the founder of Eyecatcher Photography. 
                                    I am thrilled to welcome you to our world of creativity, visual storytelling, 
                                    and the art of capturing moments that last a lifetime.
                                    <br/><br/>
                                    Photography has been my passion for as long as I can remember. 
                                    It's not just about taking pictures; it's about preserving emotions, experiences, and memories. 
                                    Every photograph we create at Eyecatcher is a piece of our heart and soul, 
                                    reflecting the unique beauty and essence of every moment.
                                    <br/><br/>
                                    Through the lens of Eyecatcher, we aim to transform every occasion into a timeless 
                                    work of art. We cherish every opportunity to be a part of your story. 
                                    Our commitment to excellence and the relentless pursuit of creativity is at the heart of everything we do.
                            </Typography>
                        </CardContent>
                    </Card>
                </FadeInElement> */}

                <Divider className='custom-MUIDivider' sx={{width: '300%', left: -1000}}/>

                <div style={{margin: '50px 0 20px 0'}}>
                    <FadeInElement>
                        <Typography 
                            className='intro-quote colored-font centered-horizontal'
                            sx={{
                                marginBottom: '30px !important'
                            }}
                        >
                            Our Recent Work
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
            
        </div>
        </>
        
        
    );
}