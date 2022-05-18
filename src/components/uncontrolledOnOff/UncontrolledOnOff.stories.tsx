import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    }
const callback = action("accordion mode change")
export const OnMode = () => <UncontrolledOnOff  onChange={true}/>
export const UnCollapsedMode = () => <UncontrolledOnOff titleValue={"Users"} collapsed={false} onChange={callback} />


export const ModeChanging = () =>{
    const [change, setChange] = useState<boolean>(true)
    return(
        <UncontrolledOnOff  collapsed={change} onChange={()=>setChange(!change)} />
    )
}







