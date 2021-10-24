import React from 'react';
import { useGetSessions } from 'src/api/hooks/useGetArticles';
import { SampleWrapper } from './styled';
import { Route, Switch } from 'react-router';
import { Guestbook } from './Guestbook';
import { Session } from './Session';
import Login from './Signin';

export const Main = () => {
  // how to use swr
  // const { data } = useGetSessions();
  return (
    <Switch>
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/main/session'} component={Session} />
      <Route exact path={'/main/guestbook'} component={Guestbook} />
    </Switch>
  );
};
