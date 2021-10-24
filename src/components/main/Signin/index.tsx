import React from 'react';
import {
  BoxSizeWrapper,
  ButtonWrapper,
  BoxElementWrapper,
  StyledBox,
} from '../../common/wrapper/Wrapper';
import {
  HighLightSign,
  MainTitle,
  StyledErrorMessage,
  SubTitle,
} from '../../common/text/Title';
import { StyledInput } from '../../common/input/InputBox';
import { StyledJoinButton } from '../../common/button/Button';
import { Formik, FormikHelpers, Form, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';

const Signin = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      email: '',
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
    }),
  });
  return (
    <BoxSizeWrapper>
      <FormikProvider value={formik}>
        <Form>
          <StyledBox>
            <BoxElementWrapper>
              <MainTitle>이메일 입력</MainTitle>
              <SubTitle>
                이메일을 입력해주세요! <HighLightSign />
              </SubTitle>
              <StyledInput type="email" name="email" />
              <StyledErrorMessage name="email" component="div" />
              <ButtonWrapper>
                <StyledJoinButton>참석하기</StyledJoinButton>
              </ButtonWrapper>
            </BoxElementWrapper>
          </StyledBox>
        </Form>
      </FormikProvider>
    </BoxSizeWrapper>
  );
};

export default Signin;
