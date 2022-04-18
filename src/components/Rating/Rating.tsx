import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType = {
    value: RatingValueType
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
    return <span>
        {props.selected ? <b>star </b> : "star"}
    </span>
}