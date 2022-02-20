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
            <AppTitle/>
            Article 1
            <Rating value={3} />
            <Star/>
            <Accordion />
            Article 2
            <Rating value={4}/>
            {/*<div className="App">*/}
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendered");
    return (
        <div> This is APP component </div>
    )
}



export default App;
