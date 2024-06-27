import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ todo }) => {
    return (
        <div className="todo-item-container">
            <h3>{ todo.text }</h3>
            <div className="todo-item-button-container">
                <button className="todo-item-complete-button">Mark As complete</button>
                <button className="todo-item-delete-button">Delete The Item</button>
            </div>
        </div>
    );
};

export default TodoListItem;