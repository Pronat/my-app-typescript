import React, {useMemo} from 'react';
import {useState} from "react";

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
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
    },[a])


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

const UsersSecret = (props:{users: Array<string>}) => {
    console.log("USERS")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Alex", "Anton", "Ornald", "Bold"])
    const newArray = useMemo(()=> {
        return users.filter(el=>el.toLowerCase().indexOf("a") > -1)}, [users])
    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    // users.push('Sveta' + new Date().getTime())
    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        <button onClick={() => {addUser()}}>addUser</button>
        {counter}
        <Users users={newArray} />
    </>

}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])
    // const newArray = useMemo(()=> {
    //     return books.filter(el=>el.toLowerCase().indexOf("a") > -1)}, [books])
    const addBook = () => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }
    // users.push('Sveta' + new Date().getTime())
    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>

        {counter}
        <Book addBook={addBook}/>
        {/*<Book books={newArray} addBook={addBook}/>*/}
    </>
}
type BooksSecretPropsType = {
    // books: Array<string>;
    addBook: ()=>void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={() => props.addBook()}>addBook</button>
        {
        // props.books.map((book, i) => <div key={i}>{book}</div>)
    }
    </div>
}

const Book = React.memo(BooksSecret)