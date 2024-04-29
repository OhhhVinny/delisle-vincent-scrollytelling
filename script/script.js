gsap.to(".defilement", {
  y: 10,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

window.addEventListener("scroll", function () {
  document.body.classList.add("is-scrolling");

  clearTimeout(timer);

  var timer = setTimeout(function () {
    document.body.classList.remove("is-scrolling");
  }, 100);
});

// Timeline d'animation pour les sections 1 à 3
const timeline1 = gsap
  .timeline()
  .to(".lune", { y: "-=8vh", duration: 1 })
  .to(".lune", { x: "-=30vh" }, "<")
  .to(".lune", { rotation: 1080, duration: 3 })
  .to(".overlay", { opacity: 1, duration: 2 })
  .to(".nuage-arriere", { y: "+=5vh", duration: 2, ease: "slow" })
  .to(".nuage-avant", { y: "+=3vh", duration: 1, ease: "elastic.out" })
  .to(".nuage-avant", { y: "-=3vh", duration: 1 })
  .to(".nuage-arriere", { y: "-=5vh", duration: 1, ease: "slow" }, "<");

// Timeline d'animation pour les sections 4 à 6
const timeline2 = gsap
  .timeline()
  .to(".barreaux", { y: "-=25vh", duration: 5, ease: "slow" })
  .to(".bg-temple", { scale: 2, duration: 5 })
  .to(".bg-temple", { y: "-=30vh", duration: 4 }, "<")
  .to(".barreaux", { opacity: 0, duration: 0.1 }, "<")
  .to(".bg-temple", { opacity: 0, duration: 5 }, "<")
  .to(".texte-4", { opacity: 0, duration: 5 }, "<")
  .to(".reveille4", { opacity: 0, duration: 3 }, "<")
  .to(".texte-voix1", { opacity: 1, duration: 4 })
  .to(".texte-voix1", { opacity: 0, duration: 2 })
  .to(".texte-voix2", { opacity: 1, duration: 4 })
  .to(".texte-voix2", { opacity: 0, duration: 2 })
  .to(".z-petit", { x: "+=3vh", duration: 2, ease: "sin", repeat: -1 })
  .to(".z-moyen", { x: "+=3vh", duration: 2, ease: "sin", repeat: -1 }, "<")
  .to(".z-grand", { x: "+=3vh", duration: 2, ease: "sin", repeat: -1 }, "<")
  .to(".z-petit", { y: "-=8vh", duration: 2, ease: "sin", repeat: -1 }, "<")
  .to(".z-petit", { opacity: 0, duration: 2, repeat: -1 }, "<")
  .to(".z-moyen", { y: "-=8vh", duration: 2, ease: "sin", repeat: -1 }, "<")
  .to(".z-moyen", { opacity: 0, duration: 2, repeat: -1 }, "<")
  .to(".z-grand", { y: "-=8vh", duration: 2, ease: "sin", repeat: -1 }, "<")
  .to(".z-grand", { opacity: 0, duration: 2, repeat: -1 }, "<")
  .to(".reveille5", { x: "40vw", duration: 5 })
  .to(".soleil", { y: "-=8vh", duration: 1 })
  .to(".soleil", { x: "-=30vh" }, "<")
  .to(".soleil", { rotation: 1080, duration: 5 });
