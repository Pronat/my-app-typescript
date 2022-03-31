import React from 'react';

type OnOffType = {
    on: true | false
}

export function OnOff(props: OnOffType) {
    const onStyle = {
        height:"20px",
        width:"30px",
        border:"1px solid black",
        display:"inline-block",
    }
    const offStyle = {
        height:"20px",
        width:"30px",
        border:"1px solid black",
        display:"inline-block",
    }
    const indicatorStyle =  {
        height:"10px",
        width:"10px",
        borderRadius:"15px",
        border:"1px solid black",
        display:"inline-block",
    }
    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


