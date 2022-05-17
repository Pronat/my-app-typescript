import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {OnOff, OnOffType} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
    }
const callback = action("on or off clicked")
export const OnMode = () => <OnOff on={true} onChange={callback} />
export const OffMode = () => <OnOff on={false} onChange={callback} />


export const OnOffChanging = () =>{
    const [change, setChange] = useState<boolean>(true)
    return(
    <OnOff on={change} onChange={setChange} />
    )
}









    // export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>
// export const Emoji = () => <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//         smile-smile
//     </span>
// </Button>
