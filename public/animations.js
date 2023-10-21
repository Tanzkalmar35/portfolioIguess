const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Gsap animations
let scrollAnimation = gsap.timeline({
    scrollTrigger: {
        scrub: 2,
        start: '0',
        end: screenWidth,
        pin: document.querySelector("#workpage-content")
    }
})

let horizontalScroll = gsap.to("#workpage-content", {
    x: -screenWidth * 1.35,
});

let slideImages = gsap.to(".sliding-image", {
    objectPosition: 0
})

scrollAnimation.add(horizontalScroll, 0);
scrollAnimation.add(slideImages, 0);

// Lenis smooth scrolling

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// other user event animations


