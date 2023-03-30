import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <StyledTodoListDiv>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </StyledTodoListDiv>
  );
};

export default TodoList;

const StyledTodoListDiv = styled.div`
  margin: auto;
`;
