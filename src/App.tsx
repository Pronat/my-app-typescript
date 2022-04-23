import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType, Star} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";


function App() {
    console.log("App rendered");

    let [ratingValue, setRatingValue] = useState<RatingValueType>(2)
    return (
        <div>

           <OnOff />
           <OnOff />
           <OnOff />
           <OnOff />
           {/*<OnOff on={false} />*/}
           {/*<OnOff on={true} />*/}

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
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
