import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import Accordion, {AccordionPropsType} from "./Accordion";
import {ComponentStory} from "@storybook/react";
import {Button} from "../../stories/Button";

export default {
    title: 'Accordion',
    component: Accordion,
    }
const callback = action("accordion mode change")
const onClickCallback = action("some item was clicked")

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;



export const CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} onClick={onClickCallback} />
export const UnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} />



export const ModeChanging = () =>{
    const [change, setChange] = useState<boolean>(true)
    return(
        <Accordion titleValue={"Users"} collapsed={change} onChange={()=>setChange(!change)} />
    )
}







