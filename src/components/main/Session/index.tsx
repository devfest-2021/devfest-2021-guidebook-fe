import React, { useEffect, useState } from 'react';
import { useGetSessions } from 'src/api/hooks/useGetArticles';
import {
  BottomSection,
  CardContent,
  CardTitle,
  SessionCard,
  TopSection,
  Chip,
  ChipSection,
  AttendButton,
  List,
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

  const listItemAnimate = {
    start: {
      scale: 0,
    },
    end: {
      scale: 1,
    },
    exit: {
      scale: 0,
    },
  };

  const listAnimate = {
    start: {
      scale: 0,
    },
    end: {
      scale: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.3,
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
        <List variants={listAnimate} initial="start" animate="end">
          {data.map((session) => (
            <AnimatePresence key={session.id}>
              <SessionCard
                key={session.id}
                onClick={() => {
                  setSelected(session);
                  setSelectedId(session.id);
                }}
                variants={listItemAnimate}
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
                  <ChipSection>
                    <Chip>{format(session.startAt, 'MM-dd')}</Chip>
                  </ChipSection>
                  <AttendButton
                    onClick={(e) => e.stopPropagation()}
                    whileTap={{ scale: 3 }}
                  >
                    출석
                  </AttendButton>
                </BottomSection>
              </SessionCard>
            </AnimatePresence>
          ))}
        </List>

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
                    <ChipSection>
                      <Chip>{format(selected.startAt, 'MM-dd')}</Chip>
                    </ChipSection>
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
