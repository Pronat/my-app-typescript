import React, {useEffect, useState} from "react";

type PropsType = {}

const StringCommon = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {
    console.log("Tick")
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intId = setInterval(() => {
            setDate(new Date)
        },1000)
        return () => {
            clearInterval(intId)
        }
    }, [])


    return (
        <div>
            <span>{StringCommon(date.getHours())}</span>
            :
            <span>{StringCommon(date.getMinutes())}</span>
            :
            <span>{StringCommon(date.getSeconds())}</span>
        </div>
    )

}