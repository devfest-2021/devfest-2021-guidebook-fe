import React from 'react';
import { Route, Switch } from 'react-router';
import { Guestbook } from './Guestbook';
import { Session } from './Session';

export const Main = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Session} />
      <Route exact path={'/guestbook'} component={Guestbook} />
    </Switch>
  );
};
