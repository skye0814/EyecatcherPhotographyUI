import React from "react";

export default function TitlePresentation(){
    return(
    <div className='title'>
        <span>Eyecatcher Photography</span>
        <span>
            <hr style={{width: '45%', color: 'red'}} />
                Presents
            <hr style={{width: '45%', color: 'red', height: '2px'}} />
        </span>
        <span>Services</span>
    </div>
    );
}