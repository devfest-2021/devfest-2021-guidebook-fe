import React from 'react';
import { StyledModal } from '../styled';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import { Form, FormikProvider } from 'formik';
import {
  HighLightSign,
  MainTitle,
  StyledErrorMessage,
  SubTitle,
} from '../../text/Title';
import { StyledInput } from '../../input/InputBox';
import {
  ButtonWrapper,
  SnsElementWrapper,
  SnsWrapper,
} from '../../wrapper/Wrapper';
import { StyledJoinButton } from '../../button/Button';
import { useRecoilState } from 'recoil';
import { getStyles } from '../modalError';
import { EditStyledInput } from './styled';

const EditUser = () => {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <>
      <StyledModal
        isOpen={modal.editUser}
        onRequestClose={() =>
          setModal({ ...modal, [MODAL_KEY.EDIT_USER]: false })
        }
      >
        <MainTitle>프로필 수정</MainTitle>
        <SubTitle>
          참가자 이름
          <HighLightSign />
        </SubTitle>
        <EditStyledInput name={'nickname'} type={'nickname'} />
        <SubTitle>Github</SubTitle>
        <EditStyledInput name={'Github'} type={'Github'} />
        <SubTitle>Instagram</SubTitle>
        <EditStyledInput name={'Instagram'} type={'Instagram'} />
        <SubTitle>
          응원의 한마디
          <HighLightSign />
        </SubTitle>
        <EditStyledInput name={'promise'} type={'promise'} />
        <ButtonWrapper>
          <StyledJoinButton name={'submit'} type={'submit'}>
            설정하기
          </StyledJoinButton>
        </ButtonWrapper>
      </StyledModal>
    </>
  );
};

export default EditUser;
