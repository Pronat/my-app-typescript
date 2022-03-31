import React, {useState} from 'react';

type OnOffType = {
    on: boolean
}
export function OnOff() {
   let [on, setOn] = useState(false)
    const onStyle = {
        height:"20px",
        width:"30px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"10px",
        padding:"2px",
        backgroundColor:on ? "green" : "white"
    }
    const offStyle = {
        height:"20px",
        width:"30px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"2px",
        padding:"2px",
        backgroundColor:on ? "white" : "red"
    }
    const indicatorStyle =  {
        height:"10px",
        width:"10px",
        borderRadius:"15px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"10px",
        backgroundColor:on ? "green" : "red"
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


