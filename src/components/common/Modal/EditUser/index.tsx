import React, { useState } from 'react';
import { StyledModal } from '../styled';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import {
  HighLightSign,
  MainTitle,
  StyledErrorMessage,
  SubTitle,
} from '../../text/Title';
import { ButtonWrapper } from '../../wrapper/Wrapper';
import { StyledJoinButton } from '../../button/Button';
import { useRecoilState } from 'recoil';
import { EditStyledInput } from './styled';
import { userState } from '../../../../store/user';
import {
  Field,
  Form,
  Formik,
  FormikProps,
  FormikProvider,
  useFormik,
} from 'formik';
import Api from '../../../../api';
import * as Yup from 'yup';
import userEvent from '@testing-library/user-event';
import { getStyles } from '../modalError';
import { StyledInput } from '../../input/InputBox';

interface userInfo {
  email: string;
  github: string;
  instagram: string;
  promise: string;
  nickname: string;
  group: string;
}

const EditUser = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [user, setUser] = useRecoilState(userState);

  const formik = useFormik({
    initialValues: {
      email: user.email,
      github: user.github,
      instagram: user.instagram,
      promise: user.promise,
      nickname: user.nickname,
      group: user.group,
    },
    //교체예정
    onSubmit: async (values) => {
      try {
        const response = await Api.editUser(values);
        setUser({ ...user, ...response.data });
        setModal({ ...modal, [MODAL_KEY.EDIT_USER]: false });
      } catch (error: any) {
        setModal({ ...modal, [MODAL_KEY.EDIT_USER]: false });
        // 에러 얼럿 띄우기
        console.log(error);
      }
    },

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

  return (
    <>
      <StyledModal
        isOpen={modal.editUser}
        onRequestClose={() =>
          setModal({ ...modal, [MODAL_KEY.EDIT_USER]: false })
        }
      >
        <FormikProvider value={formik}>
          <Form>
            <MainTitle>프로필 수정</MainTitle>
            <SubTitle>
              참가자 이름
              <HighLightSign />
            </SubTitle>
            <StyledInput
              name={'nickname'}
              type={'nickname'}
              value={formik.values.nickname}
              onChange={formik.handleChange}
              style={getStyles(formik.errors, 'nickname')}
            />
            <StyledErrorMessage name="nickname" component="div" />
            <SubTitle>Github</SubTitle>
            <EditStyledInput
              name={'Github'}
              type={'Github'}
              value={formik.values.github}
              onChange={formik.handleChange}
            />
            <SubTitle>Instagram</SubTitle>
            <EditStyledInput
              name={'Instagram'}
              type={'Instagram'}
              value={formik.values.instagram}
              onChange={formik.handleChange}
            />
            <SubTitle>
              응원의 한마디
              <HighLightSign />
            </SubTitle>
            <StyledInput
              name={'promise'}
              type={'promise'}
              value={formik.values.promise}
              onChange={formik.handleChange}
              style={getStyles(formik.errors, 'promise')}
            />
            <StyledErrorMessage name="promise" component="div" />
            <SubTitle>소속</SubTitle>
            <EditStyledInput
              name={'group'}
              type={'group'}
              value={formik.values.group}
              onChange={formik.handleChange}
            />
            <ButtonWrapper>
              <StyledJoinButton name={'submit'} type={'submit'}>
                설정하기
              </StyledJoinButton>
            </ButtonWrapper>
          </Form>
        </FormikProvider>
      </StyledModal>
    </>
  );
};

export default EditUser;
