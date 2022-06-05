import React, {useState} from 'react'
// import { largeHeaders, listItems, topBottomMargin } from '../../components/layout.module.css'
import Layout from '../../components/layout'

function ToDoListPage (){

    const [todo, setTodo] = useState("");
    let savedList = [];
    if (JSON.parse(localStorage.getItem('list')) !== null){
        savedList = JSON.parse(localStorage.getItem('list'));
    }
    const [list, setList] = useState(savedList);
    
//    localStorage.setItem("list", []);

    function handleChange(event){
        setTodo(event.target.value);
    }

    function handleClick(){
        setList(prevValue => {return [...prevValue, todo]});
        setTodo('');
    }

    function handleSave(){
        localStorage.setItem("list", JSON.stringify(list));
    }

    function handleDelete(){
        localStorage.clear("list");
    }

    return (
        <Layout>
            <h1>To do list</h1>
            <input type="text" placeholder='Enter a todo' value={todo} onChange={handleChange}/>
            <button onClick={handleClick}>Add Todo</button>
            <ul>
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <button onClick={handleSave}>Save Data to Local Storage</button>
            <button onClick={handleDelete}>Delete Local Storage Data</button>
            
        </Layout>
    )
}


export default ToDoListPage