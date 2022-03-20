import App from "../../App";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered");
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                {false && <AccordionBody/>}
            </div>
        )
    }
// }function Accordion(props: AccordionPropsType) {
//     console.log("Accordion rendered");
//     if (props.collapsed === false) {
//         debugger
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 {true}
//                 {1}
//                 {'edgrgdfg'}
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     }
// }

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