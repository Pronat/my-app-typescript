import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import Accordion, {AccordionPropsType} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
    }
const callback = action("accordion mode change")
export const CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} />
export const UnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} />


export const ModeChanging = () =>{
    const [change, setChange] = useState<boolean>(true)
    return(
        <Accordion titleValue={"Users"} collapsed={change} onChange={()=>setChange(!change)} />
    )
}







