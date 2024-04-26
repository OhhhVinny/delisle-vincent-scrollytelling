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
