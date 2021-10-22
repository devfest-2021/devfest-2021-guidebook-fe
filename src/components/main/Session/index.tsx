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
  Modal,
  ModalWrapper,
  CardContentInModal,
  TopTextSection,
  Organizer,
} from './styled';
import { LayoutContainer } from 'src/styles/layout';
import { sessionList } from 'src/api/mock';
import { format } from 'date-fns';
import { Application, DatePicker } from 'react-rainbow-components';
import './customStyle.css';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import OutsideClickHandler from 'src/utils/hooks/OutsideClickHandler';

export const Session = () => {
  // how to use swr
  // const { data } = useGetSessions();
  const [range, setRange] = useState<Date>();
  const [selectedId, setSelectedId] = useState<number | undefined>(0);
  const [selected, setSelected] = useState({
    title: '',
    description: '',
    logoImgUrl: '',
    startAt: 0,
    organizer: '',
  });
  const data = sessionList;

  useEffect(() => {
    console.log(range);
  }, [range]);

  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);

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
      <AnimateSharedLayout type="crossfade">
        <SessionList>
          {data.map((session) => (
            <SessionCard
              key={session.id}
              onClick={() => {
                setSelected(session);
                setSelectedId(session.id);
              }}
              layoutId={String(session.id)}
            >
              <TopSection>
                <Logo src={session.logoImgUrl}></Logo>
                <TopTextSection>
                  <CardTitle>{session.title}</CardTitle>
                  <Organizer>{session.organizer}</Organizer>
                </TopTextSection>
              </TopSection>
              <CardContent>{session.description}</CardContent>
              <BottomSection>
                <DateSection>
                  <DateSpan>{format(session.startAt, 'MM-dd')}</DateSpan>
                </DateSection>
                <AttendButton onClick={(e) => e.stopPropagation()}>
                  출석
                </AttendButton>
              </BottomSection>
            </SessionCard>
          ))}
        </SessionList>

        <AnimatePresence>
          {selectedId && selected && (
            <ModalWrapper>
              <OutsideClickHandler
                outsideClick={() => setSelectedId(undefined)}
              >
                <Modal layoutId={String(selectedId)}>
                  <TopSection>
                    <Logo src={selected.logoImgUrl}></Logo>
                    <TopTextSection>
                      <CardTitle>{selected.title}</CardTitle>
                      <Organizer>{selected.organizer}</Organizer>
                    </TopTextSection>
                  </TopSection>

                  <CardContentInModal>
                    {selected.description}
                  </CardContentInModal>
                  <BottomSection>
                    <DateSection>
                      <DateSpan>{format(selected.startAt, 'MM-dd')}</DateSpan>
                    </DateSection>
                    <AttendButton>출석</AttendButton>
                  </BottomSection>
                </Modal>
              </OutsideClickHandler>
            </ModalWrapper>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </LayoutContainer>
  );
};
