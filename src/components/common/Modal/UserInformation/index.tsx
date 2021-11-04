import React, { useEffect, useState } from 'react';
import { Modal } from 'react-rainbow-components';
import { useRecoilState } from 'recoil';
import { userState } from '../../../../store/user';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import {
  UserModalStyledImg,
  UserModalSubTitle,
  UserModalTaskWrapper,
  ButtonWrapper,
  UserModalTitle,
  UserInfoWrapper,
  UserModalUserInfoWrapper,
  UserModalInnerWrapper,
  UserModalWrapper,
  UserImageWrapper,
  CountWrapper,
  CountText,
  Count,
} from './styled';
import { useGetGuestBook } from '../../../../api/hooks/useGetGuestBook';
import { StyledModal } from '../styled';
import { StyledJoinButton } from '../../button/Button';
import Api from '../../../../api';

const Index = () => {
  const [user, setUser] = useRecoilState(userState);
  const [modal, setModal] = useRecoilState(modalState);
  // const UserSessionList = {data.map( (userInfo)=> userInfo.name)? null : null}
  const [count, setCount] = useState();
  const getCount = async () => {
    const { data }: any = await Api.getCheckUser(user.user_id);
    setCount(data.count);
  };
  useEffect(() => {
    getCount();
  });

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
            <UserInfoWrapper>
              <UserImageWrapper>
                <UserModalStyledImg src={user.avaterURL} />
              </UserImageWrapper>
              <CountWrapper>
                <CountText>출석 횟수</CountText>
                <Count>추후 업데이트</Count>
              </CountWrapper>
            </UserInfoWrapper>
            <UserModalUserInfoWrapper>
              <UserModalTaskWrapper>
                <UserModalTitle>{user.nickname}</UserModalTitle>
              </UserModalTaskWrapper>
              <UserModalTaskWrapper>
                <UserModalSubTitle>{user.group}</UserModalSubTitle>
              </UserModalTaskWrapper>
              <UserModalTaskWrapper>
                <UserModalSubTitle>{user.email}</UserModalSubTitle>
              </UserModalTaskWrapper>
              <UserModalTaskWrapper>
                <UserModalSubTitle>{user.promise}</UserModalSubTitle>
              </UserModalTaskWrapper>
              <UserModalTaskWrapper>
                <ButtonWrapper>
                  <StyledJoinButton
                    onClick={() => {
                      setModal({ ...modal, [MODAL_KEY.EDIT_USER]: true });
                    }}
                  >
                    프로필 수정
                  </StyledJoinButton>
                </ButtonWrapper>
              </UserModalTaskWrapper>
            </UserModalUserInfoWrapper>
          </UserModalInnerWrapper>
        </UserModalWrapper>
      </StyledModal>
    </>
  );
};

export default Index;
