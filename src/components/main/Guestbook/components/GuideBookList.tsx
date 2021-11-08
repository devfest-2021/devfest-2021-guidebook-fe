import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { guidebookList } from 'src/api/mock';
import { listAnimate, listItemAnimate } from 'src/styles/framer';
import { KeyedMutator } from 'swr/dist/types';
import {
  List,
  SessionCard,
  TopSection,
  Logo,
  TopTextSection,
  CardTitleSection,
  CardTitle,
  SmallLogo,
  Organizer,
  CardContent,
  BottomSection,
  ChipSection,
  LikeContainer,
  LikeButtonWrapper,
  LikeButton,
  Count,
  Chip,
} from '../../Session/styled';
import DefaultImage from 'src/assets/school/14.jpg';
import ThumbsUpImage from 'src/assets/thumbs-up.png';
import heartImage from 'src/assets/heart.png';
import githubLogo from 'src/assets/github.png';
import instagramLogo from 'src/assets/instagram.png';
import Api from 'src/api';

interface Props {
  data: typeof guidebookList | undefined;
  setEmoji: React.Dispatch<React.SetStateAction<number>>;
  setHeart: React.Dispatch<React.SetStateAction<number>>;
  mutate: any;
  heart: number;
  emoji: number;
}

export const GuideBookList = ({
  data,
  setEmoji,
  setHeart,
  mutate,
  emoji,
  heart,
}: Props) => {
  const handleImageOnClick = (id: string, type: 'github' | 'instagram') => {
    if (type === 'github') {
      window.open(`https://www.github.com/${id}`);
    }
    if (type === 'instagram') {
      window.open(`https://www.instagram.com/${id}`);
    }
  };

  const handleLikeClick = async (
    userId: number,
    emojiType: 'thumbs_up' | 'heart',
  ) => {
    if (emojiType === 'thumbs_up') {
      setEmoji(emoji + 1);
    }
    if (emojiType === 'heart') {
      setHeart(heart + 1);
    }

    mutate();
    try {
      await Api.like({ user_id: userId });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <List variants={listAnimate} initial="start" animate="end">
      {data &&
        data.map((guidebook, index) => (
          <AnimatePresence key={index}>
            <SessionCard
              key={index}
              variants={listItemAnimate}
              layoutId={String(index)}
            >
              <TopSection>
                <Logo src={guidebook.profileImageUrl || DefaultImage}></Logo>
                <TopTextSection>
                  <CardTitleSection>
                    <CardTitle>{guidebook.name}</CardTitle>
                    {guidebook.githubId && (
                      <SmallLogo
                        src={githubLogo}
                        onClick={() =>
                          handleImageOnClick(guidebook.githubId, 'github')
                        }
                      ></SmallLogo>
                    )}
                    {guidebook.instagramId && (
                      <SmallLogo
                        src={instagramLogo}
                        onClick={() =>
                          handleImageOnClick(guidebook.instagramId, 'instagram')
                        }
                      ></SmallLogo>
                    )}
                  </CardTitleSection>
                  <Organizer>{guidebook.affiliation}</Organizer>
                </TopTextSection>
              </TopSection>
              <CardContent>{guidebook.description}</CardContent>
              <BottomSection>
                {/* <ChipSection>
                  {guidebook.sessionList.map((session) => (
                    <Chip key={session.session_id}>{session.session_name}</Chip>
                  ))}
                </ChipSection> */}
              </BottomSection>
              <LikeContainer>
                <LikeButtonWrapper
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikeClick(guidebook.user_id, 'thumbs_up');
                  }}
                >
                  <LikeButton
                    src={ThumbsUpImage}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 3 }}
                  />
                </LikeButtonWrapper>
                <LikeButtonWrapper
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikeClick(guidebook.user_id, 'heart');
                  }}
                >
                  <LikeButton
                    src={heartImage}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 3 }}
                  />
                </LikeButtonWrapper>
                <Count>{guidebook.like !== 0 && guidebook.like}</Count>
              </LikeContainer>
            </SessionCard>
          </AnimatePresence>
        ))}
    </List>
  );
};
