import React, { useEffect, useState } from 'react';
import { useGetSessions } from 'src/api/hooks/useGetArticles';
import {
  BottomSection,
  CardContent,
  CardTitle,
  SessionCard,
  TopSection,
  DateSpan,
  DateSection,
  AttendButton,
  SessionList,
  Logo,
  FilterSection,
} from './styled';
import { LayoutContainer } from 'src/styles/layout';
import { sessionList } from 'src/api/mock';
import { format } from 'date-fns';
import { Application, DatePicker } from 'react-rainbow-components';
import './customStyle.css';

export const Session = () => {
  // how to use swr
  // const { data } = useGetSessions();
  const [range, setRange] = useState<Date>();
  const data = sessionList;

  useEffect(() => {
    console.log(range);
  }, [range]);

  const theme = {
    rainbow: {
      palette: {
        brand: '#55af7a',
      },
    },
  };

  return (
    <LayoutContainer>
      <FilterSection>
        <Application
          className="rainbow-align-content_center rainbow-m-vertical_large  rainbow-m_auto"
          style={{ maxWidth: '300px', marginLeft: '30px' }}
          theme={theme}
        >
          <DatePicker
            id="datePicker-15"
            placeholder="날짜를 선택해주세요"
            selectionType="range"
            formatStyle="large"
            variant="single"
            minDate={new Date('2021-10-30')}
            maxDate={new Date('2021-11-12')}
            value={range}
            onChange={(value) => setRange(value)}
            style={{ borderRadius: '8px' }}
          />
        </Application>
      </FilterSection>
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
                <DateSpan>{format(session.startAt, 'MM-dd')}</DateSpan>
              </DateSection>
              <AttendButton>출석</AttendButton>
            </BottomSection>
          </SessionCard>
        ))}
      </SessionList>
    </LayoutContainer>
  );
};
