import React from 'react';
import EmailInput from './functions/EmailInput';
import styled from 'styled-components';

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20%;
  flex-direction: row;
  justify-content: center;
`;

const Login = (): JSX.Element => {
  return (
    <StyledLogin>
      <EmailInput />
    </StyledLogin>
  );
};

export default Login;
