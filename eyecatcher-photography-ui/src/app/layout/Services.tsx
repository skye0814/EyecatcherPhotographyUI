import React from 'react';
import '../styles/services.css';
import { Breadcrumb, Grid, Segment } from 'semantic-ui-react';
import TitlePresentation from '../common/TitlePresentation';

const sections = [
    { key: 'Home', content: 'Home', link: true, href:'/' },
    { key: 'Services', content: 'Services', active: true, href:'/services' },
  ]

export default function Services(){
    return(
    <div className='container'>
        <Breadcrumb icon='right angle' sections={sections} style={{marginBottom: '18px'}} />
        <TitlePresentation titleName="Services" />
        
                <Grid columns={4}>
            <Grid.Row stretched>
            <Grid.Column>
                <div>1</div>
            </Grid.Column>
            <Grid.Column>
                <Segment>1</Segment>
                <Segment>2</Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>1</Segment>
                <Segment>2</Segment>
                <Segment>3</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
    );
}