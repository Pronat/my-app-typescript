import React, {useReducer, useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string;
}

type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

const reducer = (state:boolean, action:ActionType) => {
    console.log("REDUCER START")
    console.log(state)
    console.log(action)
    console.log("REDUCER END")
    if (action.type === TOGGLE_CONSTANT) {
        return (!state)
    }
    return state
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
// let [collapsed, setCollapsed] = useState(true)
let [collapsed, dispatch] = useReducer(reducer,false)
        return (
            <div>
                {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
                <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_CONSTANT})}}/>
                {!collapsed && <AccordionBody/>}
            </div>
        )
    }


type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered");
    return (
        <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    title: string;
}

function AccordionBody() {
    console.log("AccordionBody rendered");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )

}
