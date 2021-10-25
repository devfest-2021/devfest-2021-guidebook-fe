import React from 'react';
import { Route, Switch } from 'react-router';
import { Guestbook } from './Guestbook';
import { Session } from './Session';

export const Main = () => {
  // how to use swr
  // const { data } = useGetSessions();
  return (
    <Switch>
      <Route exact path={'/'} component={Session} />
      <Route exact path={'/guestbook'} component={Guestbook} />
    </Switch>
  );
};
