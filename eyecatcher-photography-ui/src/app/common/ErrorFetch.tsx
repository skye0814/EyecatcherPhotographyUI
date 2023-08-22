import React, { useEffect } from 'react';
import '../styles/errorfetch.css';
import { Button } from '@chakra-ui/react';


export default function ErrorFetch(){

    useEffect(()=>{
        var bodyElement = document.getElementsByTagName("body")[0];
        if(bodyElement){
            bodyElement.style.minHeight = '100px';
            bodyElement.style.maxHeight = '100px';
        }

        var containerElement = document.getElementById("container");
        if(containerElement){
            containerElement.style.position = 'relative';
            containerElement.style.height = '650px';
        }
    },[]);

    return(
        <div className='error-content'>
            <img className='error-image' src='/images/icons/error.png' alt='Fetch Error'/>
            <span>Something went wrong</span>
            <span>We are unable to connect. Please try again later.</span>
            <Button className='primary-btn' size='lg' onClick={()=> window.location.reload()} style={{margin: 'auto'}}>Try again</Button>
        </div>
    );
}