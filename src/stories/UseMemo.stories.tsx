import React, {useMemo} from 'react';
import {useState} from "react";

export default {
    title: 'useMemo',
}

export const Example1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=>{
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return resultA
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr />
        <div>
            result for a: {resultA}
        </div><div>
            result for b: {resultB}
        </div>

    </>
}