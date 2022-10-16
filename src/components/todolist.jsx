import { useState } from "react"
import List from "./partlist"

export default function Todo(){

    const [title,setTitle] = useState('')

    const [todo,setTodo] = useState([])

    function noSend(e){
        e.preventDefault()
    }

    function addTask(){
        const newTask = {
            title : title,
            id : crypto.randomUUID(),
            completed:false
        }

        const temp = [...todo]
        temp.unshift(newTask)
        setTodo(temp)
        
    }

    function changeTitle(e){
        const value = e.target.value 
        setTitle(value)
    }

    function handleUpdate(id,value){
        const temp = [...todo]
        const item = temp.find(item=>item.id == id)
        item.title = value
        setTodo(temp)
    }

    function handleDelete(id) {
        const temp = todo.filter((item) => item.id !== id);
    
        setTodo([...temp]);
      }

    

    return(
        <div>
            <form onSubmit={noSend}>
                <input onChange={changeTitle} />
                <input type="submit" value = 'Add a post' onClick={addTask} />
            </form>
            <div>
                {
                    todo.map((item)=>( 
                       <List item = {item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))
                }
            </div>
        </div>
    )
}