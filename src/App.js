import React from "react";
import { TodoList } from "./TodoList";
import { Home } from "./Home";

export function App(){
    return(
        <div>
           <Home/>
           <hr/>
           <TodoList/>
        </div>
    )
}