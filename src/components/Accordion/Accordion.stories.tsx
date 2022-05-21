import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import Accordion, {AccordionPropsType} from "./Accordion";
import {ComponentStory} from "@storybook/react";
import {Button} from "../../stories/Button";

export default {
    title: 'Accordion',
    component: Accordion,
    }
const callback = action("accordion mode change event fired")






export const CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} />
export const UnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} items={["Dimich", "Valera", "Artem", "Evgen"]} />



export const ModeChanging = () =>{
    const [change, setChange] = useState<boolean>(true)
    return(
        <Accordion titleValue={"Users"} collapsed={change} onChange={()=>setChange(!change)} items={["Dimich", "Valera", "Artem", "Evgen"]} />
    )
}







