import gsap from "gsap";

// Preloader Animation
const tl = gsap.timeline();

export const preloaderAnimation = () => {
  tl.to(".texts-container", {
    duration: 0,
    opacity: 1,
    ease: "power3.easeOut",
  })
    .from(".texts-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.1,
      ease: "power3.easeOut",
    })
    .to("body", {
      duration: 0.01,
      css: {
        overflow: "scroll",
      },
      ease: "power3.easeOut",
    })
    .from(".sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 1.3,
        height: "0vh",
        ease: "power3.easeOut",
        onComplete: mobileLanding(),
      },
      "-=2"
    )
    .to(".preloader", {
      duration: 0,
      css: {
        display: "none",
      },
    });
};

export const mobileLanding = () => {
  if (window.innerWidth < 763) {
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
  }
};
