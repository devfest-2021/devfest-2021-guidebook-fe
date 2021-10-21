import React from 'react';
import {
  BoxSizeWrapper,
  ButtonWrapper,
  BoxElementWrapper,
  StyledBox,
} from '../../common/wrapper/Wrapper';
import { HighLightSign, MainTitle, SubTitle } from '../../common/text/Title';
import { StyledInput } from '../../common/input/InputBox';
import { StyledJoinButton } from '../../common/button/Button';

const Login = (): JSX.Element => {
  return (
    <BoxSizeWrapper>
      <StyledBox>
        <BoxElementWrapper>
          <MainTitle>이메일 입력</MainTitle>
          <SubTitle>
            이메일을 입력해주세요! <HighLightSign>*</HighLightSign>
          </SubTitle>
          <StyledInput />
          <ButtonWrapper>
            <StyledJoinButton>참석하기</StyledJoinButton>
          </ButtonWrapper>
        </BoxElementWrapper>
      </StyledBox>
    </BoxSizeWrapper>
  );
};

export default Login;
