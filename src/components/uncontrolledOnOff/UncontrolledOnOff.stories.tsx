import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    }
const callback = action("accordion mode change")
export const OnMode = () => <UncontrolledOnOff defaultValue={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultValue={false} onChange={callback} />
export const DefaulInputValue = () => <input defaultValue={"yo"} onChange={()=>{alert("He")}}/>









