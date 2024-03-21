export const fadeInVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export const rotateTextVariants = {
  hidden: { opacity: 0, rotateX: '180deg' },
  visible: { opacity: 1, rotateX: '0deg', transition: { delay: 0.1 } },
  exit: { opacity: 0 },
};

export const sparklingVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'backOut',
    },
  },
};
