import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, Star} from "./Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

// function hello() {
//     console.log("hello rendered");
//     alert("Hello IT-KAMASUTRA")
// }

// hello();

function App() {
    console.log("App rendered");
    return (
        <div>

           <OnOff on={true} />

            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
            debugger
    console.log("PageTitle rendered");
    return (
        <h1>{ props.title }</h1>
    )
}



export default App;
