import React, {useState} from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Alex", "Anton", "Ornald", "Bold"])
    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {
            setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>addUser</button>
        <NewMessagesCounter count={counter} />
        <Users users={users} />
    </>

}