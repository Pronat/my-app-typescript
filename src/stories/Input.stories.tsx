import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'

export default {
  title: 'input',
  // component: input,
}

export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {
  let [value, setValue] = useState('')
  return(
      <>
      <input onChange={(e)=>{
        const actualValue = e.currentTarget.value
        setValue(actualValue)
      }}/> - {value}
      </>
  )
}

export const GetValueOfUncontrolledInput = () => {
  let [value, setValue] = useState('')
  return(
      <>
      <input onClick={()=>{setValue('Message')}}/> <button>save</button> - actual value:{value}
      </>
  )
}
export const ControlledInputWithFixedValue = () => <input value={"Some string"} />
