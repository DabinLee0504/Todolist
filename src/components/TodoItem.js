import React from "react";
import {MdStar, MdStarOutline} from 'react-icons/md';
import './TodoItem.css'

const TodoItem = ({ 
    todo, 
    onCheckToggle, 
    onInsertToggle, 
    onChangeSelectedTodo 
}) => {
    const { id, text, checked } = todo;
    return (
     <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (<MdStar 
        onClick={()=> {
            onCheckToggle(id);
        }} 
        />) : ( 
        <MdStarOutline 
            onClick={()=> {
                onCheckToggle(id);
            }} 
        />
        )}
        <div className="text" 
        onClick={() =>{
            onChangeSelectedTodo(todo);
            onInsertToggle()
        }}>
            {text}
            </div>
        </div>
    </div>
    );
};

export default TodoItem;