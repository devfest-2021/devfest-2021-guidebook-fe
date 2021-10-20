import React from 'react';
import styled from 'styled-components';

const StyledJoinButton = styled.button`
  background: #55af7a;
  color: #fff;
  font-size: 21px;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color: #676c72;
  padding: 0px 10px;
  height: 45px;
  &:hover {
    border-width: 2px;
    cursor: pointer;
  }
`;

const JoinButton = () => {
  return (
    <div>
      <StyledJoinButton>참석하기</StyledJoinButton>
    </div>
  );
};

export default JoinButton;
