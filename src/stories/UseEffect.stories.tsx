import React, {useEffect, useMemo, useState} from "react";
import setSystemTime = jest.setSystemTime;

export default {
    title: 'useEffect demo',
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })
 useEffect(() => {
        console.log("useEffect only first render")
        document.title = counter.toString()
    }, [])
 useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    // api.getUsers().then('')
    // setInterval
    // indexedDB
    // document.getElementById
    // document.title = "Users"

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>

}
export const SimpleTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    // useEffect(() => {
    //     console.log("useEffect every render")
    //     document.title = counter.toString()
    // })

    setTimeout(() => {
        document.title = counter.toString();
    }, 1000);

    // api.getUsers().then('')
    // setInterval
    // indexedDB
    // document.getElementById
    // document.title = "Users"

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>

}