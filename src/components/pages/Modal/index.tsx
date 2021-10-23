import React from 'react';
import { MainTitle, SubTitle, HighLightSign } from '../../common/text/Title';
import { StyledInput } from '../../common/input/InputBox';
import { StyledJoinButton } from '../../common/button/Button';
import {
  SnsWrapper,
  SnsElementWrapper,
  ButtonWrapper,
  ModalOverlay,
  ModalInner,
  ModalWrapper,
} from '../../common/wrapper/Wrapper';

const Modal = () => {
  return (
    <>
      <ModalOverlay />
      <ModalWrapper>
        <ModalInner>
          <MainTitle>프로필 입력하기</MainTitle>
          <SubTitle>
            이메일을 입력해주세요!<HighLightSign>*</HighLightSign>
          </SubTitle>
          <StyledInput />
          <SnsWrapper>
            <SnsElementWrapper>
              <SubTitle>Github</SubTitle>
              <StyledInput />
            </SnsElementWrapper>
            <SnsElementWrapper>
              <SubTitle>Instagram</SubTitle>
              <StyledInput placeholder={'@OOO'} />
            </SnsElementWrapper>
          </SnsWrapper>
          <SubTitle>응원의 한마디</SubTitle>
          <StyledInput />
          <SubTitle>참가자 이름</SubTitle>
          <StyledInput />
          <SubTitle>소속</SubTitle>
          <StyledInput />
          <ButtonWrapper>
            <StyledJoinButton>참석하기</StyledJoinButton>
          </ButtonWrapper>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;
