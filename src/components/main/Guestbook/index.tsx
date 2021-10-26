import React from 'react';
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
} from '../Session/styled';
import { LayoutContainer } from 'src/styles/layout';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import githubLogo from 'src/assets/github.png';
import instagramLogo from 'src/assets/instagram.png';
import { useGetGuestBook } from 'src/api/hooks/useGetGuestBook';
import DefaultImage from 'src/assets/school/14.jpg';
import { listAnimate, listItemAnimate } from 'src/styles/framer';

export const Guestbook = () => {
  const { data } = useGetGuestBook();

  return (
    <LayoutContainer>
      <FilterSection></FilterSection>
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
                        <SmallLogo src={githubLogo}></SmallLogo>
                        <SmallLogo src={instagramLogo}></SmallLogo>
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
