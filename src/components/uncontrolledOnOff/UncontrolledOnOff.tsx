import React, {useState} from 'react';

type OnOffType = {
    onChange: (on: boolean) => void
}
export function UncontrolledOnOff(props:OnOffType) {
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
    const onClicked = ()=>{setOn(true)
        props.onChange(true)}
    const ofClicked = ()=>{setOn(false)
        props.onChange(false)}
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={ofClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


