export default {
    title: 'React.memo demo',
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}
type UsersType =  {users: Array<string>}
const Users = (props:UsersType) => {
    return <div>{
        {props.users.map((u,i)=> <div>{u}</div>)
    }</div>
}

export const Example1 = () => {


}