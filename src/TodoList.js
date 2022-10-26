import React from "react";
import { useState } from "react";

export function TodoList(){
    const [newTodo, setNewTodo] = useState('')
    const [uncompletedList, setUncompletedList] = useState([])
    const [doneList, setDoneList] = useState([])

    function handleResponse(){
        fetch('http://numbersapi.com/random/math')
        .then((response)=>response.text())
        .then((text)=>setNewTodo(text))
        setNewTodo(newTodo)
        setUncompletedList(()=>{
            return [...uncompletedList, newTodo]
        })
        
    }

    function handleCompleteTodo(index){
        let list = [...uncompletedList]
        let complete = list.splice(index, 1)
        setUncompletedList(()=>{
            return [...list]
        })
        setDoneList(()=>{
            return [...doneList, complete]
        })
    }
    function handleRemoveTodo(index){
        let completeList = [...doneList]
        completeList.splice(index,1)
        setDoneList(()=>{
            return [...completeList]
        })
    }
        
        return(
            <div>
                <h2>Uncompleted</h2>
                <ul>{uncompletedList.map((uncompleted, index) => <li key={index}>{uncompleted}<button onClick={()=>handleCompleteTodo(index)}>COMPLETA</button></li>)}</ul>
                <h2>Completed</h2>
                <ul>{doneList.map((completed, index) => <li key={index}>{completed}<button onClick={()=>handleRemoveTodo(index)}>X</button></li>)}</ul>
                <button onClick={()=>handleResponse()}>Ottieni</button>
            </div>
        )
}