import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo',
}

function generateData() {
    console.log('generateData')
    return 1
}

// const initValue = useMemo(generateData, [])

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(generateData)


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>

}