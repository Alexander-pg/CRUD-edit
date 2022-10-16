import React from "react";
import { useState } from "react";

export default function List({item,onUpdate,onDelete}){

    
 const [isEdit,setisEdit] = useState(false)
    
    
 function TaskWithEditing(){

   
        const [newValue,setNewValue] = useState(item.title)

        function handleClickUpdateTodo(){
            onUpdate(item.id,newValue)
            setisEdit(false)
        }

        function handleChange(e){
            const value = e.target.value
            setNewValue(value)
        }

        return(
            <div>
                <input  className="todoInput" onChange={handleChange} value={newValue} /> 
                <button  onClick={handleClickUpdateTodo}>Update post</button> 
            </div>
        )
    }
    

    

     function TaskWithNoEditing(){
        function editing(){
        setisEdit(true)
        }

       

        return(
             <div key={item.id}><h1>{item.title}</h1>
                       <button onClick={editing}>Edit your post</button>
                       <button onClick={(e)=>onDelete(item.id)}>Delete</button>
            </div>
        )

     }

     
     
    
   
    return(

        <div>
            {
                 isEdit?(<TaskWithEditing />) :(<TaskWithNoEditing />)
            }
        </div>
       
    )}
