import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FloatingReactionItemContainer,
  FloatingTrackContainer,
} from '../Session/styled';
import { LayoutContainer } from 'src/styles/layout';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import {
  useGetGuestBook,
  useGetGuestBookWithPagination,
} from 'src/api/hooks/useGetGuestBook';
import { GiantReactionMotionWrapper } from './GiantReactionMotion';
import Lottie from 'react-lottie';
import Like from 'src/assets/like.json';
import heartImage from 'src/assets/heart.png';
import { GuideBookList } from './components/GuideBookList';
import { Loader } from 'src/components/common/Loader';
import { InfiniteScroll } from 'src/components/common/InfiniteScroll';

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
  const { guideBooks, loading, mutate, size, setSize, isReachingEnd } =
    useGetGuestBookWithPagination({
      _limit: 20,
    });
  const [emoji, setEmoji] = useState(0);
  const [heart, setHeart] = useState(0);
  const handleFetch = useCallback(() => {
    setSize(size + 1);
  }, [setSize, size]);

  const hasMore = useMemo(() => {
    if (isReachingEnd) return false;
    if (loading) return true;

    return !isReachingEnd;
  }, [isReachingEnd, loading]);

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
        <InfiniteScroll
          loading={loading}
          loader={
            <Loader
              style={{ position: 'relative', margin: '20px 0px 100px' }}
            />
          }
          onFetch={handleFetch}
          hasMore={hasMore}
        >
          <GuideBookList
            data={guideBooks}
            mutate={mutate}
            setEmoji={setEmoji}
            setHeart={setHeart}
            emoji={emoji}
            heart={heart}
          />
        </InfiniteScroll>
      </AnimateSharedLayout>
    </LayoutContainer>
  );
};
