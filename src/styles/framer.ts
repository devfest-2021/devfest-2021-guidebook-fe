export const listItemAnimate = {
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

export const listAnimate = {
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
