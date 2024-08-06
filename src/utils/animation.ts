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

export const fadeInLeft = (duration = 0, delay = 0, staggerChildren = 1) => {
  return {
    hidden: {
      x: -500,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
        staggerChildren: staggerChildren,
      },
    },
  };
};

export const fadeInDown = (duration = 0, delay = 0, staggerChildren = 1) => {
  return {
    hidden: {
      y: -500,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
        staggerChildren: staggerChildren,
      },
    },
  };
};
