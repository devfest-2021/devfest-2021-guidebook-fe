import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../../../../store/user';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import {
  ButtonWrapper,
  Count,
  CountText,
  CountWrapper,
  StyledElementWrapper,
  UserImageWrapper,
  UserInfoWrapper,
  UserModalInnerWrapper,
  UserModalStyledImg,
  UserModalSubTitle,
  UserModalTaskWrapper,
  UserModalTitle,
  UserModalUserInfoWrapper,
  UserModalWrapper,
} from './styled';
import { StyledModal } from '../styled';
import { StyledJoinButton } from '../../button/Button';
import Api from '../../../../api';

const Index = () => {
  const [user, setUser] = useRecoilState(userState);
  const [modal, setModal] = useRecoilState(modalState);
  // const UserSessionList = {data.map( (userInfo)=> userInfo.name)? null : null}
  const [count, setCount] = useState(0);
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
                <StyledElementWrapper>
                  <CountText>출석 횟수</CountText>
                </StyledElementWrapper>
                <StyledElementWrapper>
                  <Count>{count}</Count>
                </StyledElementWrapper>
                {count > 11 && count < 14 ? (
                  <StyledJoinButton
                    onClick={() => {
                      window.location.href =
                        'https://docs.google.com/forms/d/e/1FAIpQLSecS-iNMmBcqlfeVBtmzokW35b-ixjmRakdJD-oPBgz5R6_Ig/viewform?usp=sf_link';
                    }}
                  >
                    출석 상품 신청하기
                  </StyledJoinButton>
                ) : null}
                {count === 14 ? (
                  <StyledJoinButton
                    onClick={() => {
                      window.location.href =
                        'https://docs.google.com/forms/d/e/1FAIpQLScb5Yw6DcuobhRHI-urVqB-rTEhmEbS4yOHbhSsutb0qb97hQ/viewform?usp=sf_link';
                    }}
                  >
                    Full 출석 상품 신청하기
                  </StyledJoinButton>
                ) : null}
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
