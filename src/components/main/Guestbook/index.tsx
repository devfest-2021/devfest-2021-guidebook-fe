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
  List,
  Logo,
  FilterSection,
  TopTextSection,
  Organizer,
  CardTitleSection,
  SmallLogo,
} from '../Session/styled';
import { LayoutContainer } from 'src/styles/layout';
import { guidebookList } from 'src/api/mock';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import githubLogo from 'src/assets/github.png';
import instagramLogo from 'src/assets/instagram.png';

export const Guestbook = () => {
  // how to use swr
  // const { data } = useGetSessions();
  const [range, setRange] = useState<Date>();
  const data = guidebookList;

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
      <FilterSection></FilterSection>
      <AnimateSharedLayout type="crossfade">
        <List variants={listAnimate} initial="start" animate="end">
          {data.map((guidebook) => (
            <AnimatePresence key={guidebook.id}>
              <SessionCard
                key={guidebook.id}
                variants={listItemAnimate}
                layoutId={String(guidebook.id)}
              >
                <TopSection>
                  <Logo src={guidebook.profileImageUrl}></Logo>
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
                    {guidebook.List.map((session) => (
                      <Chip key={session.id}>{session.name}</Chip>
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
