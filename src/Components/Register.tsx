import React from 'react';
import RegisterInput from './RegisterInput';
import styled from 'styled-components';

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10%;
  flex-direction: row;
  justify-content: center;
`;

const Register = () => {
  return (
    <StyledLogin>
      <RegisterInput />
    </StyledLogin>
  );
};

export default Register;
