import React from 'react';
import { Button, Divider } from '@mui/joy';
import BioCard from '../common/BioCard';
// import '../styles/home.css'
import '../styles/homepage.css'
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home(){
    return(
        
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
                            className='intro-button' 
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
            <div className='container'>
            
            </div>
        </div>
        
        // <div style={{marginTop: '80px'}}>
        //     <div className="grid-container">
        //         <div className="grid-item item1">
        //             <div className='intro-quote1'>
                        // <Typography className='intro-quote'>
                        // Photography is the <br/> <strong className='intro-quote colored-font'> art of froz</strong>
                        // <span 
                        //     className='intro-quote' 
                        //     style={{
                        //         textDecoration: 'underline',
                        //         textUnderlineOffset: '10px',
                        //         textDecorationThickness: '4px',
                        //         color: 'var(--blue)'
                        //     }}
                        // >
                        //     <strong className='intro-quote colored-font'>en time</strong>
                        // </span>
                        // </Typography>
        //             </div>
        //         </div>
        //         <div className="grid-item item2">
        //             <img src='/images/intro-image1.jpg' alt='Jasper and Natasha' className='intro-image1'/>
        //         </div>
        //         <div className="grid-item item3">
        //             <img src='/images/intro-image2.jpg' alt='Rodney and Zyrah' className='intro-image2'/>
        //         </div>
        //         <div className="grid-item item4">
        //             <div className='intro-quote2'>
        //                 <Typography className='intro-quote'>
        //                 Where the science of light  <br/>
        //                 <span 
        //                     className='intro-quote' 
        //                     style={{
        //                         borderBottom: '4px solid var(--blue)',
        //                         textUnderlineOffset: '10px',
        //                         textDecorationThickness: '4px'
        //                     }}
        //                 >
        //                     meets t
        //                 </span>
        //                 he <strong className='intro-quote colored-font'>art of emotion</strong>
        //                 </Typography>
        //             </div>
        //             <Button className='intro-button' endDecorator={<FontAwesomeIcon icon='chevron-right'></FontAwesomeIcon>}>Learn more</Button>
        //         </div>
        //     </div>
        //     <div className='container' style={{display: 'flex', justifyContent: 'center'}}>
        //         <BioCard />
        //         {/* <div className='founder-message-box'>
        //             <img className='founder-image founder-message-box-element' src='/images/founder-image.jpg' />
        //             <div className='founder-message-div founder-message-box-element'>
        //                 <span className='founder-message-title'>
        //                     <Typography className='intro-quote'>
        //                     I am Jes Sta Isabel-Pacios  <br/>
        //                     <span 
        //                         className='intro-quote' 
        //                         style={{
        //                             textDecoration: 'underline',
        //                             textUnderlineOffset: '10px',
        //                             textDecorationThickness: '4px'
        //                         }}
        //                     >
        //                         found
        //                     </span>
        //                     er of Eyecatcher Photography
        //                     </Typography>
        //                 </span>
        //                 <span className='founder-message'>
        //                     I am Jes Sta Isabel-Pacios, the founder of Eyecatcher Photography. 
        //                     I am thrilled to welcome you to our world of creativity, visual storytelling, 
        //                     and the art of capturing moments that last a lifetime.
        //                     <br/><br/>
        //                     Photography has been my passion for as long as I can remember. 
        //                     It's not just about taking pictures; it's about preserving emotions, experiences, and memories. 
        //                     Every photograph we create at Eyecatcher is a piece of our heart and soul, 
        //                     reflecting the unique beauty and essence of every moment.
        //                 </span>
        //             </div>
        //         </div> */}
        //     </div>
        // </div>
    );
}