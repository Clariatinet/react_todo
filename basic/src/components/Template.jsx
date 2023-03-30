import React from 'react';
import styled from 'styled-components';

const Template = ({ children, todoLength }) => {
  return (
    <StyledTemplateDiv>
      <StyledTitle>오늘의 할 일 ({todoLength})</StyledTitle>
      <div>{children}</div>
    </StyledTemplateDiv>
  );
};

export default Template;

const StyledTemplateDiv = styled.div`
  padding-top: 3rem;
  width: 30rem;
  margin: auto;
`;

const StyledTitle = styled.div`
  width: 10rem;
  margin: auto;
  padding-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #6c567b;
`;
