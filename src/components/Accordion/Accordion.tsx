import App from "../../App";
import {Dispatch, SetStateAction} from "react";

export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: ()=>void
    items: Array<string>
}

export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange} />
                {!props.collapsed && <AccordionBody items={items} />}
            </div>
        )
    }


type AccordionTitlePropsType = {
    title: string;
    onChange: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered");
    return (
        <h3 onClick={(e) =>props.onChange()}>--{props.title}--</h3>
    )
}

type AccordionBodyPropsType = {
    items: Array<string>
}

function AccordionBody(props:AccordionBodyPropsType) {
    console.log("AccordionBody rendered");
    return (
        <ul>
            {
                props.items.map(i=><li>{i}</li>)
            }
        </ul>
    )

}

export default Accordion;