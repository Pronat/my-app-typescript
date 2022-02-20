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
            <Rating/>
            <Star/>
            <Accordion />
            <Rating/>
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
        <> This is APP component </>
    )
}



export default App;
