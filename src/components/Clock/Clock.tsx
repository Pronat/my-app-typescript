import React, {useEffect, useState} from "react";

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    const StringCommon = (num: number) => num < 10 ? "0" + num : num

    const stringWithSecons = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    const stringWithMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const stringWithHours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()

    return (
        <div>
            <span>{stringWithHours}</span>
            :
            <span>{stringWithMinutes}</span>
            :
            <span>{stringWithSecons}</span>
        </div>
    )

}