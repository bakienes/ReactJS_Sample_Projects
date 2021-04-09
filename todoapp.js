import React, { Component } from 'react'
import ToDo from './ToDo'
import ToDoList from './ToDoList'
import { v4 as uuidv4 } from 'uuid';

export default class ToDoApp extends Component {
    state = {
        tasks : [
            {id:1, name:"task1", done:false},
            {id:2, name:"task2", done:false}
        ]
    }

    addToDo = (newInput)=>{
       if(newInput === ""){
           alert("You forgot to enter a task!")
       } else if(this.state.tasks.find(task=>task.name ===newInput)){
           alert("You entered this before")
       }else{
           const newTask = {
               id:uuidv4(),
               name: newInput,
               done:false
           }
           this.setState({
               tasks:[...this.state.tasks,newTask]
           })
       }
    }

    removeTodo = (name)=>{
        const filtered = this.state.tasks.filter(task=>task.name!==name)
        this.setState({
            tasks:filtered
        })
    }
    
    cizToDo = (name)=>{
        const yeni = this.state.tasks.map(task=>{
            if(task.name === name){
                task.done=!task.done
            }
            return task
        })
        this.setState({
            tasks:yeni,
        })
    }
    render() {
        return (
            <div>
                <ToDo addToDo={this.addToDo}/>
              <ToDoList cizToDo={this.cizToDo}
              removeToDo={this.removeTodo}
              tasks = {this.state.tasks} />  
            </div>
        )
    }
}
