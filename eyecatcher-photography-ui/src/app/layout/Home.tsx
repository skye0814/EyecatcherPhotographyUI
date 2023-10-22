import React from 'react';
import { AspectRatio, Button, Card, CardContent, Chip, Divider, Link } from '@mui/joy';
import BioCard from '../common/BioCard';
// import '../styles/home.css'
import '../styles/homepage.css'
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadeInElement from '../common/FadeInElement';

export default function Home(){
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
            
            <div className='container' style={{marginTop: '50px'}}>
                <FadeInElement>
                    <Card
                        variant="soft"
                        orientation="horizontal"
                        size='lg'
                        sx={{
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
                </FadeInElement>
            </div>
            
        </div>
        </>
        
        
    );
}