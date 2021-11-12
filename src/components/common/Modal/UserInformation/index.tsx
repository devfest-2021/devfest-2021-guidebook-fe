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
                  {/*<CountText>출석 횟수</CountText>*/}
                </StyledElementWrapper>
                <StyledElementWrapper>
                  {/*<Count>{count}</Count>*/}
                </StyledElementWrapper>
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
              <UserModalTaskWrapper>
                {count > 7 && count < 10 ? (
                  <StyledJoinButton
                    onClick={() => {
                      window.location.href =
                        'https://forms.gle/wkZLWWofKZRczg127';
                    }}
                  >
                    8회 출석 상품 신청하기
                  </StyledJoinButton>
                ) : null}
                {count > 9 && count < 12 ? (
                  <StyledJoinButton
                    onClick={() => {
                      window.location.href =
                        'https://forms.gle/Sf9GddStqf7jC7gQ9';
                    }}
                  >
                    10회 출석 상품 신청하기
                  </StyledJoinButton>
                ) : null}
                {count > 11 ? (
                  <StyledJoinButton
                    onClick={() => {
                      window.location.href =
                        'https://forms.gle/E2T6oqUs5romQZYG7';
                    }}
                  >
                    12회 출석 상품 신청하기
                  </StyledJoinButton>
                ) : null}
              </UserModalTaskWrapper>
            </UserModalUserInfoWrapper>
          </UserModalInnerWrapper>
        </UserModalWrapper>
      </StyledModal>
    </>
  );
};

export default Index;
