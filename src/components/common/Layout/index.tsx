import React from 'react';
import Navigation from 'src/components/common/navigation';
import { Route, Switch } from 'react-router';
import { Main } from 'src/components/main';
import SignUp from 'src/components/common/Modal/SignUp';
import { useRecoilState } from 'recoil';
import { modalState } from 'src/store/modal';
import SignIn from '../Modal/SignIn';
import UserInfomation from '../Modal/UserInformation';

export const Layout = () => {
  const [modal, _] = useRecoilState(modalState);
  return (
    <>
      <Navigation />
      {modal.signUp && <SignUp />}
      {modal.signIn && <SignIn />}
      {modal.userInformation && <UserInfomation />}
      <Switch>
        <Route path={''} component={Main} />
      </Switch>
    </>
  );
};
