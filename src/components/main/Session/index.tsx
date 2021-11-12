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
  FilterSection,
  Modal,
  ModalWrapper,
  CardContentInModal,
  TopTextSection,
  Organizer,
  LottieWrapper,
  LottieContainer,
} from './styled';
import { LayoutContainer } from 'src/styles/layout';
import { add, format } from 'date-fns';
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
import { SchoolLogo } from './components/Logo';
import Lottie from 'react-lottie';
import animationData from 'src/assets/sample.json';
import { ALERT_KEY, alertState } from '../../../store/alert';

export const Session = () => {
  const [range, setRange] = useState<any>([]);
  const [selectedId, setSelectedId] = useState<number | undefined>(0);
  const [user, setUser] = useRecoilState(userState);
  const [modal, setModal] = useRecoilState(modalState);
  const [lottiePause, setLottiePause] = useState(true);
  const [alert, setAlert] = useRecoilState(alertState);

  const { data } = useGetSessions({
    startAt: range[0]?.getTime(),
    endAt: range[1]?.getTime(),
  });

  const [selected, setSelected] = useState({
    title: '',
    description: '',
    logoImgUrl: '',
    start_at: '',
    organizer: '',
    running_time: 60,
  });

  const theme = {
    rainbow: {
      palette: {
        brand: '#55af7a',
      },
    },
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const handleOnClick = async (sessionId: number) => {
    if (!user.user_id) {
      setModal({ ...modal, [MODAL_KEY.SIGN_IN]: true });
      return;
    }
    try {
      await Api.attend({ userId: user.user_id, sessionId: sessionId });
      setLottiePause(false);
      setTimeout(() => {
        setLottiePause(true);
      }, 4000);
    } catch (error) {
      setAlert({ ...alert, [ALERT_KEY.FAIL_KEY]: true });
    }
  };

  return (
    <LayoutContainer>
      <LottieContainer>
        {!lottiePause && (
          <LottieWrapper>
            <Lottie options={defaultOptions} isPaused={lottiePause} />
          </LottieWrapper>
        )}
      </LottieContainer>
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
        {data && (
          <List variants={listAnimate} initial="start" animate="end">
            {data.map((session) => (
              <AnimatePresence key={session.session_id}>
                <SessionCard
                  key={session.session_id}
                  onClick={() => {
                    setSelected(session);
                    setSelectedId(session.session_id);
                  }}
                  variants={listItemAnimate}
                  layoutId={String(session.session_id)}
                >
                  <TopSection>
                    <SchoolLogo
                      layoutId={`logo-section-${session.session_id}`}
                      name={session.organizer}
                    ></SchoolLogo>
                    <TopTextSection
                      layoutId={`top-text-section-${session.session_id}`}
                    >
                      <CardTitle>{session.title}</CardTitle>
                      <Organizer>{session.organizer}</Organizer>
                    </TopTextSection>
                  </TopSection>
                  <CardContent layoutId={`content-${session.session_id}`}>
                    {session.description}
                  </CardContent>
                  <BottomSection>
                    <ChipSection layoutId={`chip-${session.session_id}`}>
                      <Chip>
                        {format(
                          new Date(session.start_at.replace('.000Z', '')),
                          'MM-dd',
                        )}
                      </Chip>
                      <Chip>
                        {format(
                          new Date(session.start_at.replace('.000Z', '')),
                          'HH:mm',
                        )}
                        ~
                        {format(
                          add(new Date(session.start_at.replace('.000Z', '')), {
                            minutes: session.running_time,
                          }),
                          'HH:mm',
                        )}
                      </Chip>
                    </ChipSection>
                  </BottomSection>
                </SessionCard>
              </AnimatePresence>
            ))}
          </List>
        )}

        <AnimatePresence>
          {selectedId && selected && (
            <ModalWrapper>
              <OutsideClickHandler
                outsideClick={() => setSelectedId(undefined)}
              >
                <Modal layoutId={String(selectedId)}>
                  <TopSection>
                    <SchoolLogo
                      name={selected.organizer}
                      layoutId={`logo-section-${String(selectedId)}`}
                    ></SchoolLogo>
                    <TopTextSection
                      layoutId={`top-text-section-${String(selectedId)}`}
                    >
                      <CardTitle>{selected.title}</CardTitle>
                      <Organizer>{selected.organizer}</Organizer>
                    </TopTextSection>
                  </TopSection>

                  <CardContentInModal
                    layoutId={`content-${String(selectedId)}`}
                  >
                    {selected.description}
                  </CardContentInModal>
                  <BottomSection>
                    <ChipSection layoutId={`chip-${String(selectedId)}`}>
                      <Chip>
                        {format(
                          new Date(selected.start_at.replace('.000Z', '')),
                          'MM-dd',
                        )}
                      </Chip>
                      <Chip>
                        {format(
                          new Date(selected.start_at.replace('.000Z', '')),
                          'HH:mm',
                        )}
                        ~
                        {format(
                          add(
                            new Date(selected.start_at.replace('.000Z', '')),
                            {
                              minutes: selected.running_time,
                            },
                          ),
                          'HH:mm',
                        )}
                      </Chip>
                    </ChipSection>
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
