import React, { useState } from 'react';
import {
  MainTitle,
  SubTitle,
  HighLightSign,
  Close,
  StyledErrorMessage,
} from '../../../common/text/Title';
import { StyledInput } from '../../../common/input/InputBox';
import { StyledJoinButton } from '../../../common/button/Button';
import { Form, useFormik, FormikProvider } from 'formik';

import * as Yup from 'yup';

import {
  SnsWrapper,
  SnsElementWrapper,
  ButtonWrapper,
  ModalOverlay,
  ModalInner,
  ModalWrapper,
} from '../../../common/wrapper/Wrapper';
type NavigationInterface = {
  modalHandle: () => void;
};
const SignUp: React.FC<NavigationInterface> = ({ modalHandle }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      github: '',
      instagram: '',
      promise: '',
      nickname: '',
      group: '',
    },
    //교체예정
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 5));
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          '이메일 형식에 맞게 작성해주세요',
        )
        .required('필수입력란입니다.'),
      name: Yup.string()
        .min(2, '2글자이상 작성해주세요')
        .max(15, '2~15사이의 길이로 입력해주세요')
        .required('필수입력란입니다.'),
    }),
  });
  return (
    <div>
      <ModalOverlay />
      <ModalWrapper>
        <ModalInner>
          <FormikProvider value={formik}>
            <Form>
              <SnsWrapper>
                <MainTitle>프로필 입력하기</MainTitle>
                <Close
                  onClick={() => {
                    modalHandle();
                  }}
                />
              </SnsWrapper>
              <SubTitle>
                이메일
                <HighLightSign />
              </SubTitle>
              <StyledInput name={'email'} type={'email'} />
              <StyledErrorMessage name="email" component="div" />
              <SubTitle>
                참가자 이름
                <HighLightSign />
              </SubTitle>
              <StyledInput name={'name'} type={'name'} />
              <StyledErrorMessage name="name" component="div" />
              <SnsWrapper>
                <SnsElementWrapper>
                  <SubTitle>github</SubTitle>
                  <StyledInput name={'github'} type={'github'} />
                </SnsElementWrapper>
                <SnsElementWrapper>
                  <SubTitle>instagram</SubTitle>
                  <StyledInput
                    name={'instagram'}
                    type={'github'}
                    placeholder={'@OOO'}
                  />
                </SnsElementWrapper>
              </SnsWrapper>
              <SubTitle>
                응원의 한마디
                <HighLightSign />
              </SubTitle>
              <StyledInput name={'promise'} type={'promise'} />
              <SubTitle>소속</SubTitle>
              <StyledInput name={'group'} type={'group'} />

              <ButtonWrapper>
                <StyledJoinButton name={'submit'} type={'submit'}>
                  참석하기
                </StyledJoinButton>
              </ButtonWrapper>
            </Form>
          </FormikProvider>
        </ModalInner>
      </ModalWrapper>
    </div>
  );
};

export default SignUp;
