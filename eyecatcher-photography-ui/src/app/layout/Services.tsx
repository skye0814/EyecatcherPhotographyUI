import React, {useEffect, useState} from 'react';
import '../styles/services.css';
import { Breadcrumb, Grid, Segment } from 'semantic-ui-react';
import TitlePresentation from '../common/TitlePresentation';

const sections = [
    { key: 'Home', content: 'Home', link: true, href:'/' },
    { key: 'Services', content: 'Services', active: true, href:'/services' },
  ];

export default function Services(){
    return(
    <div className='container'>
        <Breadcrumb icon='right angle' sections={sections} style={{marginBottom: '18px'}} />
        <TitlePresentation titleName="Services" />
        
        <VariableGridView />
        
    </div>
    );
}

export function VariableGridView(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
    setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);

    if (windowWidth < 768) {
        return(
            <Grid columns={1}>
                <Grid.Row stretched>
                    <Grid.Column>
                        <div className='img-hover-zoom img-hover-zoom--colorize'>
                            <img src='assets/images/services/birthday1.jpg' alt='Debutant' />
                            <span>Birthday Services</span>
                            <span>EyeCatch your birthday with wonderful shots</span>
                        </div>
                        <div className='img-hover-zoom img-hover-zoom--colorize'>
                            <img src='assets/images/services/christening1.jpg' alt='Father holding a baby' />
                            <span>Christening Services</span>
                            <span>EyeCatch your beautiful kid of joy</span>
                        </div>
                        <div className='img-hover-zoom img-hover-zoom--colorize'>
                            <img src='assets/images/services/wedding1.jpg' alt='Groom and bride' />
                            <span>Wedding Services</span>
                            <span>EyeCatch your wedding memories with your lifetime partner</span>
                        </div>
                        <div className='img-hover-zoom img-hover-zoom--colorize'>
                            <img src='assets/images/services/others1.jpg' alt='Opening of an establishment' />
                            <span>Other Services</span>
                            <span>Want to see more? Click here for other EyeCatcher services</span>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
    else {
        return(
            <Grid columns={4}>
                <Grid.Row stretched>
                    <Grid.Column>
                        <div className='img-hover-zoom img-hover-zoom--colorize'>
                            <img src='assets/images/services/birthday1.jpg' alt='Debutant' />
                            <span>Birthday Services</span>
                            <span>EyeCatch your birthday with wonderful shots</span>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                        <div className='img-hover-zoom img-hover-zoom--colorize'>
                            <img src='assets/images/services/christening1.jpg' alt='Father holding a baby' />
                            <span>Christening Services</span>
                            <span>EyeCatch your beautiful kid of joy</span>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                        <div className='img-hover-zoom img-hover-zoom--colorize'>
                            <img src='assets/images/services/wedding1.jpg' alt='Groom and bride' />
                            <span>Wedding Services</span>
                            <span>EyeCatch your wedding memories with your lifetime partner</span>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                        <div className='img-hover-zoom img-hover-zoom--colorize'>
                            <img src='assets/images/services/others1.jpg' alt='Opening of an establishment' />
                            <span>Other Services</span>
                            <span>Want to see more? Click here for other EyeCatcher services</span>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}