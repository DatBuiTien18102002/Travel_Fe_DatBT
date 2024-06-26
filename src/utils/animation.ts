export const fadeIn = (duration = 0, opacity = 1, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: opacity,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
      },
    },
  };
};

export const sideBarAnimate = (delay = 0) => {
  return {
    show: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        delay: delay,
      },
    },
    hidden: {
      clipPath: "circle(15px at 35px 30px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        delay: delay,
      },
    },
  };
};

export const delayItemAnimate = (delay = 0.1) => {
  return {
    show: {
      transition: {
        staggerChildren: delay, // Giãn cách giữa các phần tử con khi mở
      },
    },
    hidden: {
      transition: {
        staggerChildren: delay, // Giãn cách giữa các phần tử con khi đóng
      },
    },
  };
};

export const slideToRight = (duration = 0, delay = 0) => {
  return {
    show: {
      x: 0,
      opacity: 1,
      duration: duration,
      delay: delay,
    },
    hidden: {
      x: -50,
      opacity: 0,
      duration: duration,
      delay: delay,
    },
  };
};

export const fadeInTest = () => {
  return {
    show: {
      opacity: 1,
      zIndex: 5,
    },
    hidden: {
      opacity: 0,
      zIndex: 1,
    },
  };
};
export const fadeOutTest = () => {
  return {
    show: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 50,
    },
  };
};
