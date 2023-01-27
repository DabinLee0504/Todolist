import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

//app.js에서 todos 인자 불러올 것
const TodoList = ({ 
    todos, 
    onCheckToggle, 
    onInsertToggle,  
    onChangeSelectedTodo 
 })  => {
    return( 
    <div className='TodoList'>
        {todos.map(todo => (
         <TodoItem 
         todo={todo} 
         key={todo.id} 
         onCheckToggle={onCheckToggle} 
         onInsertToggle={onInsertToggle}
         onChangeSelectedTodo={onChangeSelectedTodo}
         />
        ))}
        </div>
    );
};

export default TodoList;