import App from "../../App";

function Accordion(props: any) {
    console.log("Accordion rendered");
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody title={props.title}/>
        </div>
    )
}

function AccordionTitle(props: any) {
    console.log("AccordionTitle rendered");
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody(props: any) {
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