import React from 'react';
import { Modal } from 'react-rainbow-components';
import { useRecoilState } from 'recoil';
import { userState } from '../../../../store/user';
import { MainTitle, SubTitle } from 'src/components/common/text/Title';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import {
  UserModalTaskWrapper,
  UserModalUserInfoWrapper,
  UserModalSubTitle,
  UserModalTitle,
  UserModalStyledImg,
  UserModalWrapper,
} from './styled';
import { useGetGuestBook } from '../../../../api/hooks/useGetGuestBook';

const Index = () => {
  const { data } = useGetGuestBook();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [modal, setModal] = useRecoilState(modalState);
  // const UserSessionList = {data.map( (userInfo)=> userInfo.name)? null : null}
  console.log(data);
  return (
    <>
      <Modal
        style={{ padding: '10px' }}
        isOpen={modal.userInformation}
        size={'small'}
        onRequestClose={() =>
          setModal({ ...modal, [MODAL_KEY.USER_INFORMATION]: false })
        }
      >
        <UserModalTitle>프로필</UserModalTitle>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <UserModalWrapper>
            <UserModalStyledImg src={userInfo.avaterURL} />
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
          </UserModalWrapper>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {/*<UserModalTitle>응원의 한마디</UserModalTitle>*/}
        </div>
      </Modal>
    </>
  );
};

export default Index;
