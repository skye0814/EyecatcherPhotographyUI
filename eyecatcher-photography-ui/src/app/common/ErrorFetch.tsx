import React from 'react';
import '../styles/errorfetch.css';

interface Props {
    errorMessage: string
}

export default function ErrorFetch({errorMessage}: Props){
    return(
        <div className='error-content'>
            <img src='/images/icons/error.png' alt='Fetch Error'/>
            Error fetching data: {errorMessage}
        </div>
    );
}