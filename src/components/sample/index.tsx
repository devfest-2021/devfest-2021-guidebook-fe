import React from 'react';
import { useGetSessions } from 'src/api/hooks/useGetArticles';
import { SampleWrapper } from './styled';

export const Sample = () => {
  // how to use swr
  // const { data } = useGetSessions();

  return <SampleWrapper>this is sample page</SampleWrapper>;
};
