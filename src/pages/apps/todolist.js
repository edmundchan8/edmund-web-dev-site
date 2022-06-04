import React, {useState} from 'react'
// import { largeHeaders, listItems, topBottomMargin } from '../../components/layout.module.css'
import Layout from '../../components/layout'

function ToDoListPage (){

    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    function handleChange(event){
        setTodo(event.target.value);
    }

    function handleClick(){
        setList(prevValue => {return [...prevValue, todo]})
    }

    return (
        <Layout>
            <h1>To do list</h1>
            <input type="text" placeholder='Enter a todo' value={todo} onChange={handleChange}/>
            <button onClick={handleClick}>Add Todo</button>
            <ul>
                {list.map(item => <li>{item}</li>)}
            </ul>
        </Layout>
    )
}


export default ToDoListPage