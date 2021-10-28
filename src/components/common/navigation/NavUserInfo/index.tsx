import { MODAL_KEY, modalState } from '../../../../store/modal';
import { NavTask, NavUserProfileImg } from '../styled';
import { UserNameWrapper } from '../../wrapper/Wrapper';
import { NavUserEmail, NavUserName } from '../../text/Title';
import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../../../../store/user';

const NavUserInfomation = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [user, setUser] = useRecoilState(userState);
  return (
    <>
      <NavTask
        onClick={() => {
          setModal({ ...modal, [MODAL_KEY.USER_INFORMATION]: true });
        }}
      >
        <NavUserProfileImg src={user.avaterURL}></NavUserProfileImg>
        <UserNameWrapper>
          <NavUserName>{user.nickname}</NavUserName>
          <NavUserEmail>{user.email}</NavUserEmail>
        </UserNameWrapper>
      </NavTask>
    </>
  );
};

export default NavUserInfomation;
