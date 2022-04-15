// export const fadeIn = (direction = 'up'): Variants => {
//     return {
//       initial: {
//         y: direction === 'up' ? 40 : -60,
//         opacity: 0,
//       },
//       animate: {
//         y: 0,
//         opacity: 1,
//         transition: {
//           duration: 0.5,
//           ease: 'easeInOut',
//         },
//       },
//     };
//   };

export const fadeIn = (inView = true, wait = 0, h = 0) => {
  return {
    initial: {
      y: h,
      opacity: 0,
    },
    animate: {
      y: inView ? 0 : h,
      opacity: inView ? 1 : 0,
      transition: {
        duration: 0.5,
        delay: wait,
        ease: 'easeInOut',
      },
    },
    whileHover: {
      marginLeft: 5,
      scale: 1.05,
      cursor: 'pointer',
      transition: {
        type: 'tween',
        duration: 0.2,
      },
    },
    whileTap: {
      scale: 1.03,
      transition: {
        type: 'tween',
        duration: 0.1,
      },
    },
  };
};

// export const moreLinkAnimation = (inView = true, x = 10) => {
//   return {
//     initial: {
//       x: inView ? `${x}vw` : 0,
//       width: inView ? 500 : 100,
//       height: inView ? 300 : 100,

//       backgroundColor: inView ? 'red' : 'green',
//       // x: 0
//     },
//     animate: {
//       x: inView ? `${x}vw` : 0,
//       width: inView ? 300 : 100,
//       height: inView ? 300 : 100,
//       backgroundColor: inView ? 'green' : 'red',
//       rotate: inView ? 360 : -360,
//       transition: {
//         type: 'spring',
//         duration: 2,
//         bounce: 0.3,
//         stifness: 700,
//         damping: 30,
//       },
//     },
//     whileTap: {
//       backgroundColor: '#000',
//       borderRadius: 0,
//     },
//     whileHover: {
//       cursor: 'grab',
//       scale: 1.05,
//     },
//   };
// };

export const moreLinkAnimation = () => {
  return {
    // initial: { x: 0, marginLeft: 0 },
    // animate: {},
    whileHover: {
      marginLeft: 5,
      scale: 1.05,
      cursor: 'pointer',
      transition: {
        type: 'tween',
        duration: 0.2,
      },
    },
    whileTap: {
      scale: 1.03,
      transition: {
        type: 'tween',
        duration: 0.2,
      },
    },
  };
};
