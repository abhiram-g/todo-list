import {React} from 'react';
import TodoList from './todos/TodoList';
import NewItemForm from './todos/NewItemForm';
import './App.css';

const App = () => {
    return (
        <div className="App">
            To Do App
            <NewItemForm />
            <TodoList todos={[{ "text": "Get this app developed" }]}/>
        </div>
    )
}

export default App;