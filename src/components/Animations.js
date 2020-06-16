import gsap from 'gsap';

/**
 * Unhide Menu
 * @param {React.MutableRefObject<HTMLElement> | HTMLElement} menu
 * @param {React.MutableRefObject<HTMLElement>[] | HTMLElement[]} targets
 */
export const showMenu = (menu, targets) => {
  gsap.to(menu, {
    duration: 0,
    css: {
      display: 'block',
    },
  });
  gsap.to(targets, {
    duration: 0,
    opacity: 1,
    height: '100%',
  });
};

/**
 * Stagger Reveal Menu
 * @param {React.MutableRefObject<HTMLElement>[] | HTMLElement[]} targets
 */
export const staggerReveal = (targets) => {
  gsap.from(targets, {
    duration: 0.8,
    height: 0,
    transformOrigin: 'right top',
    skewY: 2,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.1,
    },
  });
};

/**
 * Hide Menu
 * @param {React.MutableRefObject<HTMLElement>[] | HTMLElement[]} target
 */
export const hideMenu = (target) => {
  gsap.to(target, { duration: 1, css: { display: 'none' } });
};

/**
 * Stagger Reveal Close Menu
 * @param {React.MutableRefObject<HTMLElement>[] | HTMLElement[]} targets
 */
export const staggerRevealClose = (targets) => {
  gsap.to(targets, {
    duration: 0.8,
    height: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.07,
    },
  });
};

/**
 * Stagger Link Text
 * @param {React.MutableRefObject<HTMLElement>[] | HTMLElement[] | any[]} targets
 */
export const staggerText = (targets) => {
  gsap.from(targets, {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.3,
    },
  });
};

/**
 * Fade In Up
 * @param {React.MutableRefObject<HTMLElement>[] | HTMLElement[]} target
 */
export const fadeInUp = (target) => {
  gsap.from(target, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: 'power3.inOut',
  });
};

/**
 * Hover Link
 * @param {React.MouseEvent<HTMLElement> | MouseEvent} e
 */
export const handleHoverIn = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: 'power1.inOut',
  });
};

/**
 * Unhover Link
 * @param {React.MouseEvent<HTMLElement> | MouseEvent} e
 */
export const handleHoverOut = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: 'power1.inOut',
  });
};

/**
 * Animate background in
 * @param {*} city
 * @param {React.MutableRefObject<HTMLElement> | HTMLElement} target
 */
export const handleCityHoverIn = (city, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`,
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: 'power3.inOut',
  });
  gsap.from(target, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: 'right top',
  });
};

/**
 * Animate background out
 * @param {React.MutableRefObject<HTMLElement> | HTMLElement} target
 */
export const handleCityHoverOut = (target) => {
  gsap.to(target, {
    duration: 0,
    skewY: 0,
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
    skewY: 0,
  });
};
