import App from "../../App";

type AccordionPropsType = {
    titleValue: string;
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered");
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody title={props.titleValue}/>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered");
    return (
        <h3>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    title: string;
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendered");
    return (
        <ul>
            <li>{props.title}</li>
            <li>{props.title}</li>
            <li>{props.title}</li>
        </ul>
    )

}

export default Accordion;