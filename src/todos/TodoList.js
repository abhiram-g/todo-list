import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos }) => {
    return (
        <div className='todo-list-wrapper'>
            { todos.map(todo => <TodoListItem todo={todo}/>) }
        </div>   
    );
};

export default TodoList;