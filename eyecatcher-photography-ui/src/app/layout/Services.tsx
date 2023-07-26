import React from 'react';
import '../styles/services.css';

export default function Services(){
    return(
    <div className='container'>
        <div className='title'>
            <span>Eyecatcher Photography</span>
            <span>
                <hr style={{width: '45%', color: 'red'}} />
                    Presents
                <hr style={{width: '45%', color: 'red', height: '2px'}} />
            </span>
            <span>Services</span>
        </div>
    </div>
    );
}