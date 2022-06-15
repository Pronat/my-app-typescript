import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string;
}

type ActionType = {
    type: "NameFunction",
    n: boolean
}

const reducer = (state: boolean, action:) => {
    //dfdf rgrgr
    return state
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

let [collapsed, setCollapsed] = useState(true)
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
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
