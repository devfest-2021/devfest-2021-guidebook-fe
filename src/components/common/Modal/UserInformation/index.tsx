import React from 'react';
import { Modal } from 'react-rainbow-components';
import { useRecoilState } from 'recoil';
import { userState } from '../../../../store/user';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import {
  UserModalStyledImg,
  UserModalSubTitle,
  UserModalTaskWrapper,
  UserModalTitle,
  UserModalUserInfoWrapper,
  UserModalInnerWrapper,
  UserModalWrapper,
} from './styled';
import { useGetGuestBook } from '../../../../api/hooks/useGetGuestBook';
import { StyledModal } from '../styled';

const Index = () => {
  const { data } = useGetGuestBook();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [modal, setModal] = useRecoilState(modalState);
  // const UserSessionList = {data.map( (userInfo)=> userInfo.name)? null : null}
  return (
    <>
      <StyledModal
        isOpen={modal.userInformation}
        size={'small'}
        onRequestClose={() =>
          setModal({ ...modal, [MODAL_KEY.USER_INFORMATION]: false })
        }
      >
        <UserModalTitle>프로필</UserModalTitle>
        <UserModalWrapper>
          <UserModalInnerWrapper>
            <UserModalTaskWrapper>
              <UserModalStyledImg src={userInfo.avaterURL} />
            </UserModalTaskWrapper>
            <UserModalUserInfoWrapper>
              <UserModalTaskWrapper>
                <UserModalTitle>{userInfo.nickname}</UserModalTitle>
              </UserModalTaskWrapper>
              <UserModalTaskWrapper>
                <UserModalSubTitle>{userInfo.group}</UserModalSubTitle>
              </UserModalTaskWrapper>
              <UserModalTaskWrapper>
                <UserModalSubTitle>{userInfo.email}</UserModalSubTitle>
              </UserModalTaskWrapper>
              <UserModalTaskWrapper>
                <UserModalSubTitle>{userInfo.promise}</UserModalSubTitle>
              </UserModalTaskWrapper>
            </UserModalUserInfoWrapper>
          </UserModalInnerWrapper>
        </UserModalWrapper>
      </StyledModal>
    </>
  );
};

export default Index;
