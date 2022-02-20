import React from "react";



export function Rating() {
    console.log("Rating rendered");
    return (
        <div>
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
        </div>
    );
}

export function Star(props: any) {
    console.log("Star rendered");
    return (
        <span><b>star </b></span>
    )
}