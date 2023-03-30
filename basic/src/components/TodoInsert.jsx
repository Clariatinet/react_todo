import React, { useState } from 'react';
import styled from 'styled-components';

const TodoInsert = ({ onInsertToggle, onInsertTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onInsertTodo(inputValue);
    setInputValue('');
    onInsertToggle();
  };
  return (
    <div>
      <StyledTodoInsertDiv onClick={onInsertToggle}></StyledTodoInsertDiv>
      <StyledTodoInsertForm>
        <StyledTodoInsertInput
          type='text'
          placeholder='please type'
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <StyledTodoInsertButton type='submit' onClick={onSubmit}>
          추가
        </StyledTodoInsertButton>
      </StyledTodoInsertForm>
    </div>
  );
};

export default TodoInsert;

const StyledTodoInsertDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #adadad;
  opacity: 0.8;
`;

const StyledTodoInsertForm = styled.form`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20rem;
  height: 20rem;
  background-color: white;
  border-radius: 5px;
  z-index: 999;
  top: 25%;
  left: 39%;
`;

const StyledTodoInsertInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
`;

const StyledTodoInsertButton = styled.button`
  padding: 1rem;
  background-color: #f67280;
  outline: none;
  border: none;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
`;
