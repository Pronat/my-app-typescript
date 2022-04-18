import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string;
    //collapsed: boolean;
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    // const collapsed = true
let [collapsed, setCollapsed] = useState(true)
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
                {/*<button onClick={()=>setCollapsed(!collapsed)}>TOGGLE</button>*/}
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
