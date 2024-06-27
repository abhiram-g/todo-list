import React, {useState} from "react";
import './NewItemForm.css'

const NewItemForm = () => {
    const [inputText, setInputText] = useState('');
    return (
        <div className="new-item-form">
            <div className="new-item-input-wrapper">
            <input 
                className="new-item-input"
                type="text"
                placeholder="Type your new todo item here"
                onChange={e => setInputText(e.target.value)}
                />
                <button className="create-new-item-button">Create Todo Item</button>
            </div>
        </div>
    );
};

export default NewItemForm;