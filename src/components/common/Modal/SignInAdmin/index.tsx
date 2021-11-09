import React, { useEffect, useState } from 'react';
import { ButtonWrapper } from '../../wrapper/Wrapper';
import {
  HighLightSign,
  MainTitle,
  StyledErrorMessage,
  SubTitle,
} from '../../text/Title';
import { StyledInput } from '../../input/InputBox';
import { StyledJoinButton } from '../../button/Button';
import { Form, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import Api from 'src/api/index';
import { useRecoilState } from 'recoil';
import { modalState, MODAL_KEY } from 'src/store/modal';
import { adminState } from 'src/store/admin';
import { getStyles } from '../modalError';
import '../customStyle.css';
import { StyledModal } from '../styled';
import { ALERT_KEY, alertState } from '../../../../store/alert';

const NOT_REGISTERED = '등록되지 않은 email';

const SigninAdmin = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [admin, setAdmin] = useRecoilState(adminState);
  const [alert, setAlert] = useRecoilState(alertState);
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await Api.signInAdmin(values);
        setAdmin({ ...admin, auth: response.data });
        setModal({ ...modal, [MODAL_KEY.SIGN_IN_ADMIN]: false });
        setAlert({ ...alert, [ALERT_KEY.SUCCESS_KEY]: true });
      } catch (error: any) {
        if (error && error.response.data.detail === NOT_REGISTERED) {
          setErrorMessage(NOT_REGISTERED);
        }
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          '이메일 형식에 맞게 작성해주세요',
        )
        .required('필수입력란입니다.'),
    }),
  });

  useEffect(() => {
    document.body.style.cssText = ` top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);
  return (
    <>
      <StyledModal
        isOpen={modal.signInAdmin}
        onRequestClose={() =>
          setModal({ ...modal, [MODAL_KEY.SIGN_IN_ADMIN]: false })
        }
        // style={}
      >
        <FormikProvider value={formik}>
          <Form>
            <MainTitle>이메일 입력하기</MainTitle>
            <SubTitle>
              이메일 <HighLightSign />
            </SubTitle>
            <StyledInput
              type="email"
              name="email"
              value={formik.values.email}
              style={getStyles(formik.errors, 'email')}
            />
            <StyledErrorMessage name="email" component="div" />
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <ButtonWrapper>
              <StyledJoinButton>관리자 로그인</StyledJoinButton>
            </ButtonWrapper>
          </Form>
        </FormikProvider>
      </StyledModal>
    </>
  );
};

export default SigninAdmin;
