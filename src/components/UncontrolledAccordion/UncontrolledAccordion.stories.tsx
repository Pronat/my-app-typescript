import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    }
const callback = action("uncontrolledAccordion")
export const CollapsedMode = () => <UncontrolledAccordion titleValue={"Menu"} collapsed={true} onChange={callback} />
export const UnCollapsedMode = () => <UncontrolledAccordion titleValue={"Users"} collapsed={false} onChange={callback} />


export const ModeChanging = () =>{
    const [change, setChange] = useState<boolean>(true)
    return(
        <UncontrolledAccordion titleValue={"Users"} collapsed={change} onChange={()=>setChange(!change)} />
    )
}









    // export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>
// export const Emoji = () => <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//         smile-smile
//     </span>
// </Button>
