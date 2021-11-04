import React from 'react';
import Navigation from 'src/components/common/navigation';
import { Route, Switch } from 'react-router';
import { Main } from 'src/components/main';
import Admin from 'src/components/admin';
import SignUp from 'src/components/common/Modal/SignUp';
import { useRecoilState } from 'recoil';
import { modalState } from 'src/store/modal';
import SignIn from '../Modal/SignIn';
import UserInfomation from '../Modal/UserInformation';
import Alert from '../alert';
import EditUser from '../Modal/EditUser';

import {
  Footer,
  FooterContent,
  FooterLogo,
  FooterSubTitle,
  FooterTitle,
} from 'src/styles/layout';
import gdsc from 'src/assets/gdsc.png';
import campus from 'src/assets/campus.png';

export const Layout = () => {
  const [modal, _] = useRecoilState(modalState);

  return (
    <>
      <Navigation />
      <Alert />
      {modal.signUp && <SignUp />}
      {modal.signIn && <SignIn />}
      {modal.userInformation && <UserInfomation />}
      {modal.editUser && <EditUser />}
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path={''} component={Main} />
      </Switch>
      <Footer>
        <FooterContent>
          <FooterTitle>주최</FooterTitle>
          <FooterLogo src={campus}></FooterLogo>
          <FooterTitle>주관</FooterTitle>
          <FooterLogo src={campus}></FooterLogo>
          <FooterLogo src={gdsc}></FooterLogo>

          <FooterTitle>제작</FooterTitle>
          <FooterSubTitle>
            박상은, 이정윤, 정준혁, 김현균, 오인규, 김민영
          </FooterSubTitle>
        </FooterContent>
      </Footer>
    </>
  );
};
