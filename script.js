document.querySelectorAll(".container img").forEach((img) => {
  img.style.display = "block";
});

let tl = gsap.timeline();

tl.from(".bg", {
  scale: 0,
  opacity: 0,
  duration: 2,
  delay: 0.5,
  y: 100,
})
  .from(
    ".elements",
    {
      opacity: 0,
      duration: 2,
      y: 10,
      scale: 0,
    },
    "-=1"
  )
  .from(
    ".shape",
    {
      y: 100,
      duration: 2,
      opacity: 0,
      ease: "power2.inOut",
      //   onStart: () => {
      //     document.querySelector(".shape").style.display = "block";
      //   },
    },
    "-=1"
  )
  .from(
    ".logo",
    {
      scale: 0,
      opacity: 0,
      duration: 2,
      delay: 0.2,
      ease: "elastic.out(1, 0.2)",
    },
    "-=1"
  )
  .from(".text", {
    scale: 0,
    opacity: 0,
    duration: 2,
  })
  .from(".pack", {
    y: 100,
    scale: 0,
    opacity: 0,
    duration: 2,
  })
  .to(
    ".text",
    {
      y: -86,
      duration: 1.5,
    },
    "-=1"
  )
  .from(
    ".bowl",
    {
      x: -95,
      opacity: 0,
      duration: 1.5,
    },
    "-=1"
  )
  .from(
    ".plate",
    {
      x: 120,
      opacity: 0,
      duration: 1.5,
    },
    "-=1"
  );
