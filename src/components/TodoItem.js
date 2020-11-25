import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px solid #ccc',
            textDecoration: this.props.todo.completed 
            ? 'line-through' 
            : 'none'
        }
    }

    markComplete = (e) => {

    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>                
                <p>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: 'red',
    color: '#fff',
    border: 'none', 
    padding: '5px 9px', 
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// Prop types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

