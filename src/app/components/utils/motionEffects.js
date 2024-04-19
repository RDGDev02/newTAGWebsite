export function slideInFromLeft(delay) {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  export function slideInFromRight(delay) {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  export function slideInFromTop(delay) {
    return {
      hidden: { y: 100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  export function slideInFromBottom(delay) {
    return {
      hidden: { y: -50, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  export function socialHover() {
    return {
        scale: 1.2,
        transition: { duration: 0.3 },
     
    };
  }
  export function slideInView(delay) {
    return {
      offscreen: {
        x: -100, opacity: 0 
      },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
          when: "beforeChildren",
        },
      },
    }
    
  }
  export function slideToTopImg(delay) {
    return {
      offscreen: {
        y: -100, opacity: 0 
      },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
          when: "beforeChildren",
        },
      },
    }
    
  }
  export function imgAnimation(delay) {
    return {
      initial: {
        opacity: 0,
        y:100,
      },
      animate: {
        opacity:1,
        y:0,
        transition: {
          delay: delay,
        }
      }
    }
  }
  export function teamAnimation(delay, initialDuration) {
    return {
      initial: {
        opacity: 0,
        y:100,
      },
      animate: {
        opacity:1,
        y:0,
        transition: {
          delay: delay,
          duration: initialDuration
        }
      }
    }
  }
  
      