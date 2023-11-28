import React from "react";
import '../styles/titlepresentation.css';

interface Props {
    titleName: string | undefined
}

export default function TitlePresentation({titleName}: Props){
    return(
    <div className='title'>
        <span>Eyecatcher Photography</span>
        <span>
            <hr style={{width: '45%', color: 'red'}} />
                Presents
            <hr style={{width: '45%', color: 'red'}} />
        </span>
        <span>{titleName}</span>
    </div>
    );
}