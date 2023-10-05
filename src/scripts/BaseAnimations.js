
// Gsap landing page animation

const screenWidth = window.innerWidth;

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#landingpage-title-name',
        start: '0',
        end: screenWidth,
        scrub: true,
        markers: true
    }
})

tl.to('#landingpage-title-name', {
    x: -900,
    onStart: () => {
        document.querySelector("#everything").style.position = 'fixed';
    },
    onComplete: () => {
        document.querySelector("#everything").style.position = 'relative';
    }
})

// Lenis smooth scrolling

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)