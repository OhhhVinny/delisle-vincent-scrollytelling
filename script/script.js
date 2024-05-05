// Plugins GSAP gratuits
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
// Plugins GSAP payants
// gsap.registerPlugin(DrawSVGPlugin);
// gsap.registerPlugin(MorphSVGPlugin);

// Animation de l'Appel à l'action de l'intro
gsap.to(".defilement", {
  y: 10,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

//Permet le fonctionnement de la spritesheet
window.addEventListener("scroll", function () {
  document.body.classList.add("is-scrolling");

  clearTimeout(timer);

  var timer = setTimeout(function () {
    document.body.classList.remove("is-scrolling");
  }, 100);
});

/////////////////////////////////
////////  Chapitre 1  ///////////
/////////////////////////////////
const chapitre1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre1",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: true,
    markers: false,
  },
});

chapitre1
  .to(".lune", { y: "-8vh", duration: 5 })
  .to(".lune", { x: "-15vw", duration: 5 }, "<")
  .to(".lune", { rotation: 1080, duration: 5 })
  .to(".devant-nuit", { scale: 1.2, duration: 5 })
  .to(".chapitre1", { backgroundSize: "150%", duration: 5 }, "<")
  .to(".lune", { scale: 1.5, duration: 5 }, "<")
  .to(".lune", { opacity: 0, duration: 5 }, "<")
  .to(".overlay-1", { opacity: 1, duration: 5 });

/////////////////////////////////
////////  Chapitre 2  ///////////
/////////////////////////////////
// Chapitre 2
const chapitre2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre2",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: true,
    markers: false,
  },
});

chapitre2
  .to(".nuage-arriere", { y: "5vh", scale: 1.1, ease: "slow", duration: 5 })
  .to(".nuage-avant", { y: "3vh", ease: "slow", duration: 5 })
  .to(".nuage-avant", { y: "-3vh", ease: "slow", scale: 1.07, duration: 5 })
  .to(".nuage-arriere", { y: "-5vh", ease: "slow", duration: 5 }, "<")
  .to(".reveille2", { rotation: 180, duration: 5 })
  .to(".reveille2", { y: "100vh", ease: "sine", duration: 5 })
  .to(".overlay-2", { opacity: 1, duration: 5 });

gsap.to(".reveille2", {
  scrollTrigger: {
    trigger: "#chapitre2",
    start: "top top",
    end: "bottom top",
    toggleActions: "play pause reverse pause",
    scrub: 3,
  },
  duration: 2,
  backgroundPositionY: "4800%",
  ease: "steps(48)",
});

// timeline pour les animations DrawSVG des étoiles
const etoilesDraw = gsap.timeline({
  paused: true,
  scrollTrigger: {
    trigger: "#chapitre2",
    start: "top top",
    onEnter: () => {
      etoilesDraw.play();
    },
    onLeaveBack: () => {
      // Si on remonte (scroll) vers le haut dans la page, jouez les animations à l'envers
      etoilesDraw.reverse();
    },
    onEnterBack: () => {
      // Si on revient à la section, jouez les animations à partir du début
      etoilesDraw.reverse();
    },
    onLeave: () => {
      // Si on passe la section, complétez les animations
      etoilesDraw.restart();
    },
  },
});
etoilesDraw
  .fromTo(
    ".etoile-petite .etoile-path-1",
    { drawSVG: "0%" },
    { drawSVG: "100%", duration: 5 }
  )
  .fromTo(
    ".etoile-grande .etoile-path-2",
    { drawSVG: "0%" },
    { drawSVG: "100%", duration: 5 },
    "<"
  );

/////////////////////////////////
////////  Chapitre 3  ///////////
/////////////////////////////////
const chapitre3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre3",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: true,
    markers: false,
  },
});
chapitre3
  .to(".reveille3", {
    motionPath: {
      path: ".animation-trace",
      autoRotate: true,
      align: ".animation-trace",
      alignOrigin: [0.5, 0.5],
      curviness: 2,
    },
    duration: 30,
  })
  .to(".reveille3", { rotation: 0, duration: 5, ease: "slow" }, "0.5<")
  .to(".overlay-3", { opacity: 1, duration: 5 });

/////////////////////////////////
////////  Chapitre 4  ///////////
/////////////////////////////////
const chapitre4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre4",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: true,
    markers: false,
  },
});
chapitre4
  .to(".barreaux", { y: "-25vh", duration: 30, ease: "sine", delay: 10 })
  .to(".x-morph", {
    duration: 5,
    morphSVG: {
      shape: ".check-morph",
    },
  })
  .to(".bg-temple", { scale: 2, duration: 15, ease: "sine", delay: 10 })
  .to(".bg-temple", { y: "-30vh", duration: 15, ease: "sine" }, "<")
  .to(".barreaux", { opacity: 0, duration: 0.1 }, "<")
  .to(".morphing", { opacity: 0, duration: 0.1 }, "<")
  .to(".bg-temple", { opacity: 0, duration: 10 }, "<")
  .to(".texte-4", { opacity: 0, duration: 5 }, "<")
  .to(".reveille4", { opacity: 0, duration: 5 }, "<")
  .to(".texte-voix1", { opacity: 1, duration: 10 })
  .to(".texte-voix1", { opacity: 0, duration: 5 })
  .to(".texte-voix2", { opacity: 1, duration: 10 })
  .to(".texte-voix2", { opacity: 0, duration: 5 });

gsap.to(".reveille4", {
  scrollTrigger: {
    trigger: "#chapitre4",
    start: "top top",
    end: "bottom top",
    toggleActions: "play pause reverse pause",
    scrub: 3,
  },
  duration: 2,
  backgroundPositionY: "4800%",
  ease: "steps(48)",
});

/////////////////////////////////
////////  Chapitre 5  ///////////
/////////////////////////////////

const zAnimations = gsap.timeline({ repeat: -1 });
zAnimations
  .to(".z-petit", { x: "+=3vh", duration: 1, ease: "sine" })
  .to(".z-moyen", { x: "+=3vh", duration: 1, ease: "sine" }, "<")
  .to(".z-grand", { x: "+=3vh", duration: 1, ease: "sine" }, "<")
  .to(".z-petit", { y: "-=8vh", duration: 1, ease: "sine" }, "<")
  .to(".z-petit", { opacity: 0, duration: 1 }, "<")
  .to(".z-moyen", { y: "-=8vh", duration: 1, ease: "sine" }, "<")
  .to(".z-moyen", { opacity: 0, duration: 1 }, "<")
  .to(".z-grand", { y: "-=8vh", duration: 1, ease: "sine" }, "<")
  .to(".z-grand", { opacity: 0, duration: 1 }, "<");

const chapitre5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre5",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: true,
    markers: false,
    onEnter: () => {
      zAnimations.play();
    },
  },
});

chapitre5
  .to(".reveille5", { x: "40vw", duration: 10 })
  .to(".dors", { y: "-50vh", duration: 10 })
  .to(".dors", { opacity: 0, duration: 10 }, "<")
  .to(".overlay-5", { opacity: 1, duration: 5, delay: 20 });

gsap.to(".reveille5", {
  scrollTrigger: {
    trigger: "#chapitre5",
    start: "top top",
    end: "bottom top",
    toggleActions: "play pause reverse pause",
    scrub: 3,
  },
  duration: 1,
  backgroundPositionY: "4800%",
  ease: "steps(48)",
});

gsap.to(".dors", {
  scrollTrigger: {
    trigger: "#chapitre5",
    start: "top top",
    end: "bottom top",
    toggleActions: "play pause reverse pause",
    scrub: 3,
  },
  duration: 1,
  backgroundPositionY: "4800%",
  ease: "steps(48)",
});

/////////////////////////////////
////////  Chapitre 6  ///////////
/////////////////////////////////
const chapitre6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre6",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: true,
    markers: false,
  },
});
chapitre6
  .to(".overlay-6", { opacity: 0, duration: 5 })
  .to(".devant-jour", { scale: 1, duration: 5 })
  .to(".chapitre6", { backgroundSize: "100%", duration: 5 }, "<")
  .to(".soleil", { scale: 1, duration: 5 }, "<")
  .to(".soleil", { opacity: 1, duration: 5 }, "<")
  .to(".soleil", { rotation: -1080, duration: 5 })
  .to(".soleil", { y: "+8vh", duration: 5 })
  .to(".soleil", { x: "15vw", duration: 5 }, "<");
