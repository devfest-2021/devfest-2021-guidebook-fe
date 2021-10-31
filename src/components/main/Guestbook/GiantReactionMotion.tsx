import React from 'react';
import { BigFloatingReactionItemContainer } from '../Session/styled';

interface Props {
  motionKey: string;
  children: any;
}

const initialAnimationObj = { opacity: 0, y: 0, scale: 0.3 };
const enterAnimationObj = {
  opacity: [0, 0, 1, 1],
  y: ['0vh', '-35vh', '-40vh', '-55vh'],
  scale: [0.3, 0.3, 1, 1],
  transition: {
    type: 'spring',
    duration: 1.5,
    ease: [0.5, 0.5, 0.4, 0.5],
    delay: 0,
    times: [0, 0.1, 0.3, 0.8],
  },
};
const exitAnimationObj = {
  opacity: 0,
  y: 0,
  scale: 0.6,
  transition: {
    duration: 0.25,
  },
};

export const GiantReactionMotionWrapper = ({ motionKey, children }: Props) => {
  return (
    <BigFloatingReactionItemContainer
      initial={initialAnimationObj}
      animate={enterAnimationObj}
      exit={exitAnimationObj}
      key={motionKey}
      role="img"
    >
      {children}
    </BigFloatingReactionItemContainer>
  );
};
