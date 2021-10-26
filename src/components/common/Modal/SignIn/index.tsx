import React, { useEffect } from 'react';
import {
  ButtonWrapper,
  BoxElementWrapper,
  StyledBox,
  ModalOverlay,
} from '../../wrapper/Wrapper';
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
import { userState } from 'src/store/user';
import { getStyles } from '../modalError';

const NOT_REGISTERED = '등록되지 않은 email';

const Signin = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await Api.signIn(values);
        setUser({ ...user, ...response.data });
        setModal({ ...modal, [MODAL_KEY.SIGN_IN]: false });
      } catch (error: any) {
        if (error && error.response.data.detail === NOT_REGISTERED) {
          setModal({ [MODAL_KEY.SIGN_IN]: false, [MODAL_KEY.SIGN_UP]: true });
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
    <div>
      <ModalOverlay />
      <StyledBox>
        <BoxElementWrapper>
          <FormikProvider value={formik}>
            <Form>
              <MainTitle>이메일 입력하기</MainTitle>
              <SubTitle>
                이메일 <HighLightSign />
              </SubTitle>
              <StyledInput
                type="email"
                name="email"
                style={getStyles(formik.errors, 'email')}
              />
              <StyledErrorMessage name="email" component="div" />
              <ButtonWrapper>
                <StyledJoinButton>참석하기</StyledJoinButton>
              </ButtonWrapper>
            </Form>
          </FormikProvider>
        </BoxElementWrapper>
      </StyledBox>
    </div>
  );
};

export default Signin;
