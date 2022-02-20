import App from "../../App";

function Accordion() {
    console.log("Accordion rendered");
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log("AccordionTitle rendered");
    return (
        <h3>Меню</h3>
    )
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

export default Accordion;