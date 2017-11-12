import React, { Component } from 'react';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';
import AddTodo from './AddTodo'

class App extends Component {

    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}

export default App;