import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ todo, inputValue }) => {
  const { id, text, checked } = todo;

  return (
    <StyledTodoItemDiv>
      <StyledTodoItemListDiv className={`content ${checked ? 'checked' : ''}`}>
        {checked ? (
          <StyledTodoItemCheckImg src='img/check.png' alt='' />
        ) : (
          <StyledTodoItemCheckNoneImg src='img/check_none.png' alt='' />
        )}
        {checked ? (
          <StyledTodoItemCheckh3>{text}</StyledTodoItemCheckh3>
        ) : (
          <h3>{text}</h3>
        )}
      </StyledTodoItemListDiv>
    </StyledTodoItemDiv>
  );
};

export default TodoItem;

const StyledTodoItemDiv = styled.div`
  margin: auto;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px #f67280;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
`;

const StyledTodoItemListDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTodoItemCheckImg = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const StyledTodoItemCheckNoneImg = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const StyledTodoItemCheckh3 = styled.h3`
  color: gray;
  text-decoration: line-through;
  cursor: pointer;
  opacity: 0.6;
`;
