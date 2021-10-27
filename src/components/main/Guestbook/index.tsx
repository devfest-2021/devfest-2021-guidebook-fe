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
  TopTextSection,
  Organizer,
  CardTitleSection,
  SmallLogo,
  FloatingReactionItemContainer,
  FloatingTrackContainer,
  LikeButtonWrapper,
  LikeButton,
  LikeContainer,
} from '../Session/styled';
import { LayoutContainer } from 'src/styles/layout';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import githubLogo from 'src/assets/github.png';
import instagramLogo from 'src/assets/instagram.png';
import { useGetGuestBook } from 'src/api/hooks/useGetGuestBook';
import DefaultImage from 'src/assets/school/14.jpg';
import { listAnimate, listItemAnimate } from 'src/styles/framer';
import { GiantReactionMotionWrapper } from './GiantReactionMotion';
import Lottie from 'react-lottie';
import Like from 'src/assets/like.json';
import ThumbsUpImage from 'src/assets/thumbs-up.png';
import heartImage from 'src/assets/heart.png';
import Api from 'src/api';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Like,
};

const bigOptions = {
  width: 300,
  heart: 300,
  loop: true,
  autoplay: true,
  animationData: Like,
};

function FloatingReactionItem({ emojiType }: { emojiType: string }) {
  const xPos = React.useMemo(() => getRandomInt(120), []);
  return (
    <FloatingReactionItemContainer xPos={xPos}>
      {emojiType === 'heart' ? (
        <img src={heartImage} width="44" height="44" />
      ) : (
        <Lottie options={defaultOptions} />
      )}
    </FloatingReactionItemContainer>
  );
}

export const Guestbook = () => {
  const { data } = useGetGuestBook();
  const [emoji, setEmoji] = useState(0);
  const [heart, setHeart] = useState(0);

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

    try {
      await Api.like({ user_id: userId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContainer>
      <FloatingTrackContainer>
        {emoji !== 0 &&
          Array.from(Array(emoji).keys()).map((item) => {
            return <FloatingReactionItem key={item} emojiType={'thumbs_up'} />;
          })}
      </FloatingTrackContainer>
      <FloatingTrackContainer>
        {heart !== 0 &&
          Array.from(Array(heart).keys()).map((item) => {
            return <FloatingReactionItem key={item} emojiType={'heart'} />;
          })}
      </FloatingTrackContainer>
      <AnimatePresence>
        {[5, 10, 15, 20, 25].some((item) => item === emoji) && (
          <GiantReactionMotionWrapper motionKey={'1'}>
            <Lottie options={bigOptions} />
          </GiantReactionMotionWrapper>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {[5, 10, 15, 20, 25].some((item) => item === heart) && (
          <GiantReactionMotionWrapper motionKey={'1'}>
            <img src={heartImage} width="300px" />
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
                  <LikeContainer>
                    <LikeButtonWrapper
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLikeClick(guidebook.user_id, 'thumbs_up');
                      }}
                    >
                      <LikeButton src={ThumbsUpImage} />
                    </LikeButtonWrapper>
                    <LikeButtonWrapper
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLikeClick(guidebook.user_id, 'heart');
                      }}
                    >
                      <LikeButton src={heartImage} />
                    </LikeButtonWrapper>
                  </LikeContainer>
                </SessionCard>
              </AnimatePresence>
            ))}
        </List>
      </AnimateSharedLayout>
    </LayoutContainer>
  );
};
