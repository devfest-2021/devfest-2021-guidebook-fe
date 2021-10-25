import React, { useEffect } from 'react';
import {
  BoxSizeWrapper,
  ButtonWrapper,
  BoxElementWrapper,
  StyledBox,
  ModalOverlay,
} from '../../../../common/wrapper/Wrapper';
import {
  HighLightSign,
  MainTitle,
  StyledErrorMessage,
  SubTitle,
} from '../../../../common/text/Title';
import { StyledInput } from '../../../../common/input/InputBox';
import { StyledJoinButton } from '../../../../common/button/Button';
import { Formik, FormikHelpers, Form, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
type NavigationInterface = {
  modalHandle: () => void;
  visible: string;
};
const Signin: React.FC<NavigationInterface> = ({ modalHandle, visible }) => {
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

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);
  return (
    <div>
      <ModalOverlay
        onClick={() => {
          modalHandle();
        }}
        visible={visible}
      />
      <StyledBox visible={visible}>
        <BoxElementWrapper>
          <FormikProvider value={formik}>
            <Form>
              <MainTitle>이메일 입력하기</MainTitle>
              <SubTitle>
                이메일 <HighLightSign />
              </SubTitle>
              <StyledInput type="email" name="email" />
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
