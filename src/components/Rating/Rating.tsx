import React from "react";


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendered");
    return (
        <div>
            <Star selected={props.value > 0}/><button></button>
            <Star selected={props.value > 1}/><button></button>
            <Star selected={props.value > 2}/><button></button>
            <Star selected={props.value > 3}/><button></button>
            <Star selected={props.value > 4}/><button></button>
        </div>
    )
}
type StarPropsType = {
    selected: true | false;
}

export function Star(props: StarPropsType) {
    console.log("Star rendered");
    if (props.selected === true) {
        return (<span><b>star </b></span>);
    } else {
        return (<span>star </span>);
    }
}