//? Background switch animation
ScrollTrigger.create({

    trigger: '#projects',
    start: "top -150%",
    end: "bottom 0%",

    onEnter: () => {
        gsap.to('#projects', {duration: 1.0, backgroundColor: '#B68E71'});
        gsap.to('#menu', {duration: 1.0, backgroundColor: '#000'});
        document.getElementById("open-menu-btn").classList.add("hidden");
        document.getElementById("open-menu-btn-white").classList.remove("hidden");
        document.getElementById("close-menu-btn").classList.add("hidden");
        document.getElementById("close-menu-btn-white").classList.remove("hidden");
    },

    onLeaveBack: () => {
        gsap.to('#projects', {duration: 1.0, backgroundColor: '#000'})
        gsap.to('#menu', {duration: 1.0, backgroundColor: '#B68E71'});
        document.getElementById("open-menu-btn").classList.remove("hidden");
        document.getElementById("open-menu-btn-white").classList.add("hidden");
        document.getElementById("close-menu-btn").classList.remove("hidden");
        document.getElementById("close-menu-btn-white").classList.add("hidden");
    },
})

//? Cursor animation
const cursorDot = document.getElementById("cursor");
window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;

//    cursorDot.style.left = `${posX}px`;
//    cursorDot.style.top = `${posY}px`;
});

//?  Gsap landing page animations

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const aboutPageTitleHeight = document.querySelector("#about-page-title").getBoundingClientRect().height;

// landing page

let scrollAnimation = gsap.timeline({
    scrollTrigger: {
        scrub: 1, start: '0', end: screenWidth, pin: document.querySelector("#body-content")
    }
})

let animateTitleName = gsap.to("#landingpage-title-name", {
    x: -1250, duration: 1
})

let animateContactEmail = gsap.to("#landingpage-contact-email", {
    x: -900, duration: .7
});

let animateTitleJobTitle = gsap.to("#landingpage-title-jobtitle", {
    x: 1300, duration: 1
});

let animateContactLinks = gsap.to("#landingpage-contact-links", {
    x: 1300, duration: .7
});

let increaseLandingPageImageSize = gsap.to("#landingpage-profile", {
    scale: 1.4, duration: 1
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

//? projects section
// TODO: Create a better banner
gsap.to(".marquee-part", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear"
}).totalProgress(0.5);

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
        document.querySelectorAll(".marquee-arrow").forEach((arrow) => {
            arrow.classList.add("active")
            arrow.classList.remove("inactive")
        });
    } else {
        document.querySelectorAll(".marquee-arrow").forEach((arrow) => {
            arrow.classList.remove("active")
            arrow.classList.add("inactive")
        });
    }
    lastScrollTop = currentScrollTop;
}, false);
