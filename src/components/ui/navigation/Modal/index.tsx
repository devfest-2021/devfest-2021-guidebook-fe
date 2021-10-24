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
import { Formik, Form, useFormik, FormikProvider } from 'formik';

import * as Yup from 'yup';

import {
  SnsWrapper,
  SnsElementWrapper,
  ButtonWrapper,
  ModalOverlay,
  ModalInner,
  ModalWrapper,
} from '../../../common/wrapper/Wrapper';
import { Button } from 'react-rainbow-components';

// interface userInfo {
//   email: string;
//   github: string;
//   instagram: string;
//   promise: string;
//   nickname: string;
//   group: string;
// }
// const [userInfomation, setUserInfomation] = useState<userInfo>({
//   email: '',
//   github: '',
//   instagram: '',
//   promise: '',
//   nickname: '',
//   group: '',
// });

type NavigationInterface = {
  modalHandle: () => void;
};
const Modal: React.FC<NavigationInterface> = ({ modalHandle }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      github: '',
      instagram: '',
      promise: '',
      nickname: '',
      group: '',
    },
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
      group: Yup.string()
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
                이메일을 입력해주세요!
                <HighLightSign />
              </SubTitle>
              <StyledInput name={'email'} type={'email'} />
              <StyledErrorMessage name="email" component="div" />
              <SnsWrapper>
                <SnsElementWrapper>
                  <SubTitle>Github</SubTitle>
                  <StyledInput name={'github'} type={'github'} />
                </SnsElementWrapper>
                <SnsElementWrapper>
                  <SubTitle>Instagram</SubTitle>
                  <StyledInput
                    name={'instagram'}
                    type={'github'}
                    placeholder={'@OOO'}
                  />
                </SnsElementWrapper>
              </SnsWrapper>
              <SubTitle>응원의 한마디</SubTitle>
              <StyledInput name={'promise'} type={'promise'} />
              <SubTitle>
                참가자 이름
                <HighLightSign />
              </SubTitle>
              <StyledInput name={'name'} type={'name'} />
              <StyledErrorMessage name="name" component="div" />
              <SubTitle>
                소속
                <HighLightSign />
              </SubTitle>
              <StyledInput name={'group'} type={'group'} />
              <StyledErrorMessage name={'group'} component={'div'} />
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

export default Modal;
