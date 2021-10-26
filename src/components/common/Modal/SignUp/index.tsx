import React, { useEffect } from 'react';
import {
  MainTitle,
  SubTitle,
  HighLightSign,
  StyledErrorMessage,
} from '../../text/Title';
import { StyledInput } from '../../input/InputBox';
import { StyledJoinButton } from '../../button/Button';
import { Form, useFormik, FormikProvider, getIn } from 'formik';
import * as Yup from 'yup';

import {
  SnsWrapper,
  SnsElementWrapper,
  ButtonWrapper,
} from '../../wrapper/Wrapper';
import { useRecoilState } from 'recoil';
import { modalState, MODAL_KEY } from 'src/store/modal';

import Api from 'src/api/index';
import { userState } from 'src/store/user';
import { Simulate } from 'react-dom/test-utils';
import { getStyles } from '../modalError';
import { Modal, Button } from 'react-rainbow-components';
const error = Simulate.error;

const SignUp = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [user, setUser] = useRecoilState(userState);

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
      try {
        const response = await Api.signUp(values);
        setUser({ ...user, ...response.data });
        setModal({ ...modal, [MODAL_KEY.SIGN_UP]: false });
      } catch (error: any) {
        setModal({ ...modal, [MODAL_KEY.SIGN_UP]: false });
        // 에러 얼럿 띄우기
      }
    },
    // validate: (values) => {
    //   const errors = {};
    //   if (!values.email) errors.email = 'Required';
    //   return errors;
    // },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          '이메일 형식에 맞게 작성해주세요',
        )
        .required('필수입력란입니다.'),
      nickname: Yup.string()
        .min(2, '2글자이상 작성해주세요')
        .max(15, '2~15사이의 길이로 입력해주세요')
        .required('필수입력란입니다.'),
      promise: Yup.string()
        .min(10, '10글자 이상 작성해주세요')
        .required('필수입력란입니다.'),
    }),
  });
  useEffect(() => {
    document.body.style.cssText = `top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return (
    <>
      <Modal
        isOpen={modal.signUp}
        onRequestClose={() =>
          setModal({ ...modal, [MODAL_KEY.SIGN_UP]: false })
        }
      >
        <FormikProvider value={formik}>
          <Form>
            <MainTitle>프로필 입력하기</MainTitle>
            <SubTitle>
              이메일
              <HighLightSign />
            </SubTitle>
            <StyledInput
              name={'email'}
              type={'email'}
              style={getStyles(formik.errors, 'email')}
            />
            <StyledErrorMessage name="email" component="div" />
            <SubTitle>
              참가자 이름
              <HighLightSign />
            </SubTitle>
            <StyledInput
              name={'nickname'}
              type={'nickname'}
              style={getStyles(formik.errors, 'nickname')}
            />
            <StyledErrorMessage name="nickname" component="div" />
            <SnsWrapper>
              <SnsElementWrapper>
                <SubTitle>github</SubTitle>
                <StyledInput name={'github'} type={'github'} />
              </SnsElementWrapper>
              <SnsElementWrapper>
                <SubTitle>instagram</SubTitle>
                <StyledInput name={'instagram'} type={'instagram'} />
              </SnsElementWrapper>
            </SnsWrapper>
            <SubTitle>
              응원의 한마디
              <HighLightSign />
            </SubTitle>
            <StyledInput
              name={'promise'}
              type={'promise'}
              style={getStyles(formik.errors, 'promise')}
            />
            <StyledErrorMessage name="promise" component="div" />
            <SubTitle>소속</SubTitle>
            <StyledInput name={'group'} type={'group'} />

            <ButtonWrapper>
              <StyledJoinButton name={'submit'} type={'submit'}>
                참석하기
              </StyledJoinButton>
            </ButtonWrapper>
          </Form>
        </FormikProvider>
      </Modal>
    </>
    // <div>
    //   <ModalOverlay />
    //   <ModalWrapper>
    //     <ModalInner>

    //     </ModalInner>
    //   </ModalWrapper>
    // </div>
  );
};

export default SignUp;
