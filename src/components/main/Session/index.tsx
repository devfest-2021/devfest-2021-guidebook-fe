import React from 'react';
import { useGetSessions } from 'src/api/hooks/useGetArticles';
import {
  BottomSection,
  CardContent,
  CardTitle,
  SessionCard,
  TopSection,
  Date,
  DateSection,
  AttendButton,
  SessionList,
  Logo,
} from './styled';
import { LayoutContainer } from 'src/styles/layout';
import { sessionList } from 'src/api/mock';
import { format } from 'date-fns';

export const Session = () => {
  // how to use swr
  // const { data } = useGetSessions();
  const data = sessionList;
  return (
    <LayoutContainer>
      <SessionList>
        {data.map((session) => (
          <SessionCard key={session.id}>
            <TopSection>
              <CardTitle>{session.title}</CardTitle>
              <Logo src={session.logoImgUrl}></Logo>
            </TopSection>
            <CardContent>{session.description}</CardContent>
            <BottomSection>
              <DateSection>
                <Date>{format(session.startAt, 'MM-dd')}</Date>
              </DateSection>
              <AttendButton>출석</AttendButton>
            </BottomSection>
          </SessionCard>
        ))}
      </SessionList>
    </LayoutContainer>
  );
};
