import React from 'react';

type OnOffPropsType = {
    message: string
    active: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div  className="circle">
            <button onClick={onGreen} className="colorGreen">ON</button>
            <button onClick={onRed}>OFF</button>
        </div>
    );
};

const onGreen = () => {
    return(
        <div className="circle">
                Hello green!
        </div>
    )
}

const onRed = () => {
    return(
        <div className="circle">
                Hello red!
        </div>
    )
}