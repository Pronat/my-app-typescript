import React, {useState} from "react";


type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating() {

    let [value, setValue]=useState(0)
    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    )
}
type StarPropsType = {
    selected: true | false;
}

export function Star(props: StarPropsType) {
    console.log("Star rendered");

    if ( props.selected === true) {
        return <span><b>star </b></span>
    }   else {
        <span>star </span>
    }

// return props.selected ? <span><b>star </b></span> : <span>star </span>
//     return
}