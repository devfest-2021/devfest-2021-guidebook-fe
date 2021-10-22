import React from 'react';
import { useGetSessions } from 'src/api/hooks/useGetArticles';
import { SampleWrapper } from './styled';
import { Route, Switch } from 'react-router';

export const Guestbook = () => {
  // how to use swr
  // const { data } = useGetSessions();
  console.log('a');
  return <div>guestbook</div>;
};
