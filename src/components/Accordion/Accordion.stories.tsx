import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import Accordion, {AccordionPropsType} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
    }
const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")






export const CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback} />
export const UnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} items={[{title:"Dimich", value:1}, {title:"Valera", value:2}, {title:"Artem", value:3}, {title:"Evgen", value:4}]} onClick={onClickCallback} />



export const ModeChanging = () =>{
    const [change, setChange] = useState<boolean>(true)
    return(
        <Accordion titleValue={"Users"} collapsed={change} onChange={()=>setChange(!change)} items={[{title:"Dimich", value:1}, {title:"Valera", value:2}, {title:"Artem", value:3}, {title:"Evgen", value:4}]} onClick={onClickCallback} />
    )
}







