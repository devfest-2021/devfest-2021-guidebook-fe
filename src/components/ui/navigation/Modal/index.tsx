import React, { useState } from 'react';
import { MainTitle, SubTitle, HighLightSign } from '../../../common/text/Title';
import { StyledInput } from '../../../common/input/InputBox';
import { StyledJoinButton } from '../../../common/button/Button';
import {
  SnsWrapper,
  SnsElementWrapper,
  ButtonWrapper,
  ModalOverlay,
  ModalInner,
  ModalWrapper,
} from '../../../common/wrapper/Wrapper';
import { modalOpenProps } from '../index';

interface userInfo {
  email: string;
  github: string;
  instagram: string;
  promise: string;
  nickname: string;
  group: string;
}

const Modal = (): JSX.Element => {
  const [userInfomation, setUserInfomation] = useState<userInfo>({
    email: '',
    github: '',
    instagram: '',
    promise: '',
    nickname: '',
    group: '',
  });
  // console.log(modalOpen);
  return (
    <>
      <ModalOverlay />
      <ModalWrapper>
        <ModalInner>
          <MainTitle>프로필 입력하기</MainTitle>
          <SubTitle>
            이메일을 입력해주세요!
            <HighLightSign />
          </SubTitle>
          <StyledInput
            name={'email'}
            // onChange={(e) => {
            //   setUserInfomation({});
            // }}
          />
          <SnsWrapper>
            <SnsElementWrapper>
              <SubTitle>Github</SubTitle>
              <StyledInput name={'github'} />
            </SnsElementWrapper>
            <SnsElementWrapper>
              <SubTitle>Instagram</SubTitle>
              <StyledInput name={'instagram'} placeholder={'@OOO'} />
            </SnsElementWrapper>
          </SnsWrapper>
          <SubTitle>응원의 한마디</SubTitle>
          <StyledInput name={'promise'} />
          <SubTitle>
            참가자 이름
            <HighLightSign />
          </SubTitle>
          <StyledInput name={'nickname'} />
          <SubTitle>
            소속
            <HighLightSign />
          </SubTitle>
          <StyledInput name={'group'} />
          <ButtonWrapper>
            <StyledJoinButton>참석하기</StyledJoinButton>
          </ButtonWrapper>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;
