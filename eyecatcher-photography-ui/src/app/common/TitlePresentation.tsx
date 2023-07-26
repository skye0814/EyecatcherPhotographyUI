import React from "react";

interface Props {
    titleName: string
}

export default function TitlePresentation({titleName}: Props){
    return(
    <div className='title'>
        <span>Eyecatcher Photography</span>
        <span>
            <hr style={{width: '45%', color: 'red'}} />
                Presents
            <hr style={{width: '45%', color: 'red', height: '2px'}} />
        </span>
        <span>{titleName}</span>
    </div>
    );
}