import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo',
}


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect")
        document.title = counter.toString()
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = "Users"
    })


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>

}