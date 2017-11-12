import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;

        return (
            <ul>
                {props.todos.map((todo, index) => (
                    <Todo key={index} {...todo} onClick={() => (props.onTodoClick(index))} />
                ))}
            </ul>
        )
    }
}
export default TodoList;