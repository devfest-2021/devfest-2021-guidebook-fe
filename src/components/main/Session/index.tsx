import React, { useEffect, useState } from 'react';
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
import { useGetSessions } from 'src/api/hooks/useGetArticles';
import { listAnimate, listItemAnimate } from 'src/styles/framer';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, userState } from 'src/store/user';
import { modalState } from 'src/store/modal';
import Api from 'src/api';
export const Session = () => {
  // how to use swr
  // const { data } = useGetSessions();
  // console.log(data);
  const [range, setRange] = useState<Date>();
  const [selectedId, setSelectedId] = useState<number | undefined>(0);
  const [user, setUser] = useRecoilState(userState);
  const [modal, setModal] = useRecoilState(modalState);

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

  const theme = {
    rainbow: {
      palette: {
        brand: '#55af7a',
      },
    },
  };

  useEffect(() => {
    if (!user.user_id) {
      setModal({ ...modal, [MODAL_KEY.SIGN_IN]: true });
    }
  }, [user]);

  const handleOnClick = async (sessionId: number) => {
    try {
      await Api.attend({ userId: user.user_id, sessionId: sessionId });
    } catch (error) {
      console.log(error);
    }
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
          {data &&
            data.map((session) => (
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
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOnClick(session.id);
                      }}
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
                    <AttendButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOnClick(selectedId);
                      }}
                    >
                      출석
                    </AttendButton>
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
