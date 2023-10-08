//?  Gsap landing page animations

const screenWidth = window.innerWidth;

// Defining animations

let slideOutLeft = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        start: '0',
        end: screenWidth,
        pin: document.querySelector("#body-content")
    }
})

let animateTitleName = gsap.to("#landingpage-title-name", {
    x: -900,
    duration: 1
})

let animateContactEmail = gsap.to(
    "#landingpage-contact-email", {
        x: -900,
        duration: .7
    }
);

// Starting all landing page animations simultaneously

slideOutLeft.add(animateTitleName, 0)
slideOutLeft.add(animateContactEmail, 0)

// Lenis smooth scrolling

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
