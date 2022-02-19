import React from 'react';
import logo from './logo.svg';
import './App.css';

function hello() {
    debugger;
    alert("Hello IT-KAMASUTRA")
}
hello();

function App() {
    debugger
  return (
      <div>
        This is APP component
          <Star />
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
function Star() {
    return (
        <div>
            Star
            Star
            Star

        </div>
    )
}

function Rating() {
    debugger
    return (
        <div>
        <div>start</div>
        <div>start</div>
        <div>start</div>
        <div>start</div>
        <div>start</div>
        </div>
    );
}

function Accordion() {
    debugger
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
