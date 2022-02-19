import React from 'react';
import logo from './logo.svg';
import './App.css';

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
            <Star/>
            <Star/>
            <Accordion/>
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

function Star() {
    console.log("Star rendered");
    return (
        <div>
            star
        </div>
    )
}

function Rating() {
    console.log("Rating rendered");
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
        </>
    );
}

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

export default App;
