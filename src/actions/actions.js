export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let id = 0;
export const addTodo = (value) => {
    return {
        type: ADD_TODO,
        text: value,
        id: id++
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}