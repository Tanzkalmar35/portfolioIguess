//?  Gsap landing page animations

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const aboutPageTitleHeight = document.querySelector("#about-page-title").getBoundingClientRect().height;

// landing page

let scrollAnimation = gsap.timeline({
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

let animateContactEmail = gsap.to("#landingpage-contact-email", {
    x: -900,
    duration: .7
});

let animateTitleJobTitle = gsap.to("#landingpage-title-jobtitle", {
    x: 1200,
    duration: 1
});

let animateContactLinks = gsap.to("#landingpage-contact-links", {
    x: 1200,
    duration: .7
});

let increaseLandingPageImageSize = gsap.to("#landingpage-profile", {
    scale: 1.2,
    duration: 1
})

let animateSecondSection = gsap.to("#about-page-container", {
    y: -(screenHeight / 2) - (aboutPageTitleHeight / 2),
})

scrollAnimation.add(animateTitleName, 0)
scrollAnimation.add(animateContactEmail, 0)
scrollAnimation.add(animateContactLinks, 0)
scrollAnimation.add(animateTitleJobTitle, 0)
scrollAnimation.add(increaseLandingPageImageSize, 0)

// About page

scrollAnimation.add(animateSecondSection, 1)

// Lenis smooth scrolling

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
