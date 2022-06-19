import React, {useState} from 'react';

export type OnOffType = {
    on: boolean
    onChange: (on: boolean)=>void
}

export function OnOff(props: OnOffType) {

    const onStyle = {
        height:"20px",
        width:"30px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"10px",
        padding:"2px",
        backgroundColor:props.on ? "green" : "white"
    }
    const offStyle = {
        height:"20px",
        width:"30px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"2px",
        padding:"2px",
        backgroundColor:props.on ? "white" : "red"
    }
    const indicatorStyle =  {
        height:"10px",
        width:"10px",
        borderRadius:"15px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"10px",
        backgroundColor:props.on ? "green" : "red"
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>{props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={()=>{props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


