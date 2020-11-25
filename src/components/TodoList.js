import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default class TodoList extends Component {
    render() {
        // console.log(this.props.thingsToDo);
        return (
            <div>
                {
                    this.props.thingsToDo.map(todo => (
                        <TodoItem 
                            todo={todo} 
                            key={todo.id}
                            markComplete={this.props.markComplete}
                            delTodo={this.props.delTodo}
                        />
                    ))
                }
            </div>
        )
    }
}

// Prop types
TodoList.propTypes = {
    thingsToDo: PropTypes.array.isRequired
}
