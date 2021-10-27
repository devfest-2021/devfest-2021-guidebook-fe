import React, { useEffect, useState } from 'react';
import {
  BottomSection,
  CardContent,
  CardTitle,
  SessionCard,
  TopSection,
  Chip,
  ChipSection,
  List,
  Logo,
  FilterSection,
  TopTextSection,
  Organizer,
  CardTitleSection,
  SmallLogo,
  LottieWrapper,
} from '../Session/styled';
import { LayoutContainer } from 'src/styles/layout';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import githubLogo from 'src/assets/github.png';
import instagramLogo from 'src/assets/instagram.png';
import { useGetGuestBook } from 'src/api/hooks/useGetGuestBook';
import DefaultImage from 'src/assets/school/14.jpg';
import { listAnimate, listItemAnimate } from 'src/styles/framer';
import { GiantReactionMotionWrapper } from './GiantReactionMotion';
import Emoji from 'src/assets/heart.json';
import Lottie from 'react-lottie';

export const Guestbook = () => {
  const { data } = useGetGuestBook();
  const [showEmoji, setShowEmoji] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Emoji,
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowEmoji(false);
  //   }, 3000);
  // }, []);

  const handleImageOnClick = (id: string, type: 'github' | 'instagram') => {
    if (type === 'github') {
      window.open(`https://www.github.com/${id}`);
    }
    if (type === 'instagram') {
      window.open(`https://www.instagram.com/${id}`);
    }
  };

  return (
    <LayoutContainer>
      <AnimatePresence>
        {showEmoji && (
          <GiantReactionMotionWrapper motionKey={'1'}>
            <div>
              <Lottie options={defaultOptions} />
            </div>
          </GiantReactionMotionWrapper>
        )}
      </AnimatePresence>
      <AnimateSharedLayout type="crossfade">
        <List variants={listAnimate} initial="start" animate="end">
          {data &&
            data.map((guidebook) => (
              <AnimatePresence key={guidebook.user_id}>
                <SessionCard
                  key={guidebook.user_id}
                  variants={listItemAnimate}
                  layoutId={String(guidebook.user_id)}
                >
                  <TopSection>
                    <Logo
                      src={guidebook.profileImageUrl || DefaultImage}
                    ></Logo>
                    <TopTextSection>
                      <CardTitleSection>
                        <CardTitle>{guidebook.name}</CardTitle>
                        <SmallLogo
                          src={githubLogo}
                          onClick={() =>
                            handleImageOnClick(guidebook.githubId, 'github')
                          }
                        ></SmallLogo>
                        <SmallLogo
                          src={instagramLogo}
                          onClick={() =>
                            handleImageOnClick(
                              guidebook.instagramId,
                              'instagram',
                            )
                          }
                        ></SmallLogo>
                      </CardTitleSection>
                      <Organizer>{guidebook.affiliation}</Organizer>
                    </TopTextSection>
                  </TopSection>
                  <CardContent>{guidebook.description}</CardContent>
                  <BottomSection>
                    <ChipSection>
                      {guidebook.sessionList.map((session) => (
                        <Chip key={session.session_id}>
                          {session.session_name}
                        </Chip>
                      ))}
                    </ChipSection>
                  </BottomSection>
                </SessionCard>
              </AnimatePresence>
            ))}
        </List>
      </AnimateSharedLayout>
    </LayoutContainer>
  );
};
