import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 480) {
  // Hero section animation
  let heroTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-section",
    },
  });

  heroTL
    .from(".hero-section", {
      backgroundSize: "4000px 2000px",
      duration: 1.5,
      ease: "Power2.easeOut",
      delay: 0.75,
    })
    .from(".header", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "Power2.easeOut",
      delay: 0.5,
    })
    .from(".hero-section__text", {
      opacity: 0,
      y: 20,
      duration: 0.75,
      ease: "Power2.easeOut",
    })
    .from(".hero-section__card img", {
      x: 1000,
      duration: 0.75,
      ease: "Power4.easeOut",
    })
    .from(".hero-section__card a", {
      y: 10,
      opacity: 0,
      duration: 1,
      ease: "Power2.easeOut",
    });

  // Features section animation
  gsap.from(".features-title", {
    scrollTrigger: {
      trigger: ".features-card",
      start: "top bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
  });

  gsap.from(".stage1", {
    scrollTrigger: {
      trigger: ".stage1",
      start: "center bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
  });

  gsap.from(".stage2", {
    scrollTrigger: {
      trigger: ".stage2",
      start: "center bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 0.5,
  });

  gsap.from(".stage3", {
    scrollTrigger: {
      trigger: ".stage3",
      start: "center bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 0.5,
  });

  gsap.from(".stage4", {
    scrollTrigger: {
      trigger: ".stage4",
      start: "center bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 0.5,
  });

  // Jumbotron animation
  gsap.from(".top-jumbotron", {
    scrollTrigger: {
      trigger: ".top-jumbotron",
      start: "top bottom",
    },
    y: 80,
    opacity: 0,
    skewY: 10,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 0.5,
  });

  gsap.from(".top-jumbotron .jumbotron-content__text", {
    scrollTrigger: {
      trigger: ".top-jumbotron",
      start: "center bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 1,
  });

  gsap.from(".bottom-jumbotron", {
    scrollTrigger: {
      trigger: ".bottom-jumbotron",
      start: "top bottom",
    },
    y: 80,
    opacity: 0,
    skewY: 10,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 0.5,
  });

  gsap.from(".bottom-jumbotron .jumbotron-content__text", {
    scrollTrigger: {
      trigger: ".bottom-jumbotron",
      start: "center bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 1,
  });

  // Demo section animation
  gsap.from(".demo-section__top-text", {
    scrollTrigger: {
      trigger: ".demo-section__top",
      start: "top bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 0.5,
  });

  gsap.from(".demo-section__top-img", {
    scrollTrigger: {
      trigger: ".demo-section__top-img",
      start: "20% bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 0.5,
  });

  gsap.from(".demo-section__bottom-text", {
    scrollTrigger: {
      trigger: ".demo-section__bottom",
      start: "top bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 0.5,
  });

  gsap.from(".demo-section__bottom-video", {
    scrollTrigger: {
      trigger: ".demo-section__bottom-video",
      start: "30% bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 0.5,
  });

  // Sales cetion
  gsap.from(".sale-section", {
    scrollTrigger: {
      trigger: ".sale-section",
      start: "top bottom",
    },
    y: 80,
    opacity: 0,
    skewY: 10,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 0.5,
  });
  gsap.from(".sale-content__text", {
    scrollTrigger: {
      trigger: ".sale-section",
      start: "top bottom",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
    delay: 1,
  });

  let targets = document.querySelectorAll(".advantages-item");

  targets.forEach((target) => {
    const tl = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "center 80%",
          end: "center 20%",
        },
      })
      .fromTo(target, { y: 50 }, { y: -50 })
      .from(target, { opacity: 0, duration: 0.2 }, 0)
      .to(target, { opacity: 0, duration: 0.2 }, 0.8);
  });
}
