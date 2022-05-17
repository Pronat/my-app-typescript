import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import Accordion, {AccordionPropsType} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
    }
const callback = action("accordion mode change")
export const CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} />
export const UnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={true} onChange={callback} />


export const OnOffChanging = () =>{
    const [change, setChange] = useState<boolean>(true)
    return(
        <Accordion titleValue={"Users"} collapsed={change} onChange={()=>setChange(!change)} />
    )
}









    // export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>
// export const Emoji = () => <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//         smile-smile
//     </span>
// </Button>
