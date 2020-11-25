import './App.css';
import TodoList from './components/TodoList'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out rubish',
        completed: false
      },
      {
        id: 2,
        title: 'Cook dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Play StarCraft',
        completed: false
      },
      {
        id: 4,
        title: 'Watch Teletubbies then shoot myself',
        completed: false
      },
      {
        id: 5,
        title: 'Watch another state and props tutorial and hope for the best',
        completed: false
      }

    ]
  }


  // Toggle checklist
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => {
        return todo.id !== id
      })]
    })
  }

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <h1>Todo list:</h1>
        <TodoList 
          thingsToDo={this.state.todos} 
          markComplete={this.markComplete}
          delTodo={this.delTodo} 
        />      
      </div>
    )
  }
}


