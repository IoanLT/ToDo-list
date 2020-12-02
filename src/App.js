import './App.css';
import Header from './components/layout/Header'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out rubish',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Cook dinner',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Play StarCraft',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Watch Teletubbies then shoot myself',
        completed: false
      },
      {
        id: uuidv4(),
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

  // Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({      
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {    
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <TodoList 
            thingsToDo={this.state.todos} 
            markComplete={this.markComplete}
            delTodo={this.delTodo} 
          />   
        </div>
           
      </div>
    )
  }
}

