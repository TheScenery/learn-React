import React from 'react';

class Todo extends React.Component {
    render() {
        const props = this.props;
        return (
            <li
                onClick={props.onClick}
                style={{
                    textDecoration: props.completed ? 'line-through' : 'none'
                }}
            >
                {props.text}
            </li>
        );
    }
}

export default Todo;