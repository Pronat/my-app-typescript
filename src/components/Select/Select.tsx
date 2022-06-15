import React, {useState} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const selectedItem = props.items.find(i => i.value === props.value)
    const [active, setActive] = useState(true)
    return (
        <>
        <select>
            <option value="">Minsk</option>
            <option value="">Moscow</option>
            <option value="">Kiev</option>
        </select>
        <div className={s.select + " " + (active ? s.active : "")}>

            <h3>{selectedItem && selectedItem.title}</h3>
            <div className={s.items}>
                {props.items.map(i => <div key={i.value}>{i.title}</div>)}
            </div>
            </div>
        </>
    )
}