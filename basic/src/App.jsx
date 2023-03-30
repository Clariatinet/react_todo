import React, { useState } from 'react';
import styled from 'styled-components';
import Template from './components/Template';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [inserToggle, setInsertToggle] = useState(false);
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue);
  let nextId = 4;
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: true,
    },
    {
      id: 2,
      text: '할일 2',
      checked: false,
    },
    {
      id: 3,
      text: '할일 3',
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };
  const onInsertTodo = (text) => {
    if (text === '') {
      return alert('할 일을 입력해주세요.');
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos([...todos, todo]);
    }
  };
  return (
    <div>
      <Template todoLength={todos.length}>
        <input
          type='text'
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button>추가</button>
        <TodoList todos={todos} />
        {inserToggle && (
          <TodoInsert
            inputValue={inputValue}
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
          />
        )}
      </Template>
    </div>
  );
};

export default App;

const StyledAddTodoButton = styled.button`
  position: fixed;
  right: 8rem;
  bottom: 0;
  z-index: 100;
  width: 3rem;
  height: 2rem;
  border-radius: 3px;
  box-shadow: 1px 2px 5px 1px #9c9c9c;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  background-color: #f67280;
  margin-bottom: 1rem;
`;
