import React from 'react';

type OnOffType = {
    on: boolean
}
export function OnOff(props: OnOffType) {
    const onStyle = {
        height:"20px",
        width:"30px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"10px",
        padding:"2px",
        backgroundColor:props.on === true ? "green" : "white"
    }
    const offStyle = {
        height:"20px",
        width:"30px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"2px",
        padding:"2px",
        backgroundColor:props.on === true ? "white" : "red"
    }
    const indicatorStyle =  {
        height:"10px",
        width:"10px",
        borderRadius:"15px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"10px",
        backgroundColor:props.on === true ? "green" : "red"
    }
    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


