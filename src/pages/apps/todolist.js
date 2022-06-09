import React, {useState, useEffect} from 'react'
// import { largeHeaders, listItems, topBottomMargin } from '../../components/layout.module.css'
import Layout from '../../components/layout'

function ToDoListPage (){

    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);
    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem('list'));
        if(storageTodos){
            setList(storageTodos);
        }
    }, []);

    // When todo changes, set the todo list
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    function handleChange(event){
        setTodo(event.target.value);
        
    }

    function handleClick(){
        setList(prevValue => {return [...prevValue, todo]});
        localStorage.setItem("list", JSON.stringify(list));
        setTodo('');
    }

    function handleSave(){
       
    }

    function handleDelete(){
        localStorage.clear("list");
    }

    console.log(localStorage.getItem('list'));

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