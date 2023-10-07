
// Gsap landing page animations

const screenWidth = window.innerWidth;

let leftAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ['.animate-slideout-left'],
        scrub: 1,
        start: '0',
        end: screenWidth,
        pin: document.querySelector("#body-content")
    }
})

leftAnimation.to(".animate-slideout-left", {
    x: -900,
})

// Lenis smooth scrolling

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
