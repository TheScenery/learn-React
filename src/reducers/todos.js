import {ADD_TODO, TOGGLE_TODO} from '../actions/actions'

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    let newTodo = Object.assign({}, todo);
                    newTodo.completed = !newTodo.completed;
                    return newTodo;
                }
                return todo;
            })
        default:
            return state;
    }
}

export default todos;