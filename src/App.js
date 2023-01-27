import React, { useState } from 'react';
import { MdAddComment } from 'react-icons/md';
import './App.css';
import Template from './components/Template';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

let nextId = 4;
const App = () => { // eslint-disable-next-line 
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([ 
    {
      id: 1,
      text: "첫번째 할 일은 무엇인가요?",
      checked: false
    },
    {
      id: 2,
      text: "두번째 할 일은 무엇인가요?",
      checked: false
    },
    {
      id: 3,
      text: "세번째 할 일은 무엇인가요?",
      checked: false
    }
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => 
      todos.map(todo => (todo.id === id ? {...todo, text} : todo))
    );
  };

  const onInsertTodo = text => {
    if (text === "") {
      return alert('무엇을 하실 예정인가요?')
    } else {
      const todo ={
        id: nextId,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos(todos => 
      todos.map(todo => 
        todo.id ===id ? {...todo, checked: !todo.checked} : todo
        )
        );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  return( 
    <Template todoLength={todos.length}>
      <TodoList 
      todos={todos} 
      onCheckToggle={onCheckToggle} 
      onInsertToggle={onInsertToggle}
      onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className='add-todo-button' onClick={onInsertToggle}>
        <MdAddComment />
      </div>
      {insertToggle &&  (
      <TodoInsert 
        selectedTodo={selectedTodo}
        onInsertToggle={onInsertToggle} 
        onInsertTodo={onInsertTodo}
        onRemove={onRemove}
        onUpdate={onUpdate}
        /> 
      )}
    </Template>
  );
};

export default App;
