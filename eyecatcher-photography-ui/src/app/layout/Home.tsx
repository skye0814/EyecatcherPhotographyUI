import '../styles/home.css'
import { Typography } from '@mui/material';

export default function Home(){
    return(
        <div style={{marginTop: '80px'}}>
            <div className="grid-container">
                <div className="grid-item item1">
                    <div className='intro-quote1'>
                        <Typography className='intro-quote'>
                        Photography is the <br/> <strong className='intro-quote'> art of froz</strong>
                        <span 
                            className='intro-quote' 
                            style={{
                                textDecoration: 'underline',
                                textUnderlineOffset: '10px',
                                textDecorationThickness: '4px'
                            }}
                        >
                            <strong className='intro-quote'>en time</strong>
                        </span>
                        </Typography>
                    </div>
                </div>
                <div className="grid-item item2">
                    <img src='/images/intro-image1.jpg' alt='Jasper and Natasha' className='intro-image1'/>
                </div>
                <div className="grid-item item3">
                    <img src='/images/intro-image2.jpg' alt='Rodney and Zyrah' className='intro-image2'/>
                </div>
                <div className="grid-item item4">
                    <div className='intro-quote2'>
                        <Typography className='intro-quote'>
                        where the science of light  <br/>
                        <span 
                            className='intro-quote' 
                            style={{
                                textDecoration: 'underline',
                                textUnderlineOffset: '10px',
                                textDecorationThickness: '4px'
                            }}
                        >
                            meets t
                        </span>
                        he <strong className='intro-quote'>art of emotion</strong>
                        </Typography>
                    </div>
                    <button className='intro-button'>Learn more</button>
                </div>
            </div>
            <div className='container'>

            </div>
        </div>
    );
}