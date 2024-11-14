export const imageAnimation = {
  initial: {
    y: 50,
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: `0em`,
    transition: {
      delay: 6.5,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};
