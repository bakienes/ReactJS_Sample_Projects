import React, { Component } from 'react'

export default class ToDo extends Component {
    state = {
        input:"",
    }
    changeHadler=(e)=>{
        this.setState({
            input:e.target.value
        })
    }
    submitHandler=(e)=>{
        this.props.addToDo(this.state.input)
        this.setState({
            input:""
        })
        e.preventDefault()

    }
    
    render() {
        return (
            <form onSubmit={this.submitHandler} >
                <input type="text" 
                value={this.state.input}
                onChange={this.changeHadler}
                />
                <button type="submit" >Add</button>
            </form>
        )
    }
}
