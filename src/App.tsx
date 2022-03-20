import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, Star} from "./Rating/Rating";

function hello() {
    console.log("hello rendered");
    alert("Hello IT-KAMASUTRA")
}

hello();

function App() {
    console.log("App rendered");
    return (
        <div>

            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>

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
