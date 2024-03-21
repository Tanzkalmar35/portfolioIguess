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
});

let animateSecondSection = gsap.to("#about-page-container", {
    y: -(screenHeight / 2) - (aboutPageTitleHeight / 2),
});

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

let bannerAnimation = gsap.timeline({
    scrollTrigger: {
        scrub: 1, start: screenHeight * 2.5, end: "+=1500", trigger: "#projects"
    }
})

let banner1 = gsap.to("#banner-1", {
    x: screenWidth * 2, y: "+=700"
})

let banner2 = gsap.to("#banner-2", {
    x: screenWidth * 1.5, y: "-=700"
})


let banner3 = gsap.to("#banner-3", {
    x: screenWidth * 2, y: "+=200"
})

let banner4 = gsap.to("#banner-4", {
    x: -screenWidth * 3
})

let banner5 = gsap.to("#banner-5", {
    x: -screenWidth * 2, y: "-=500"
})

bannerAnimation.add(banner1, 0)
bannerAnimation.add(banner2, 0)
bannerAnimation.add(banner3, 0)
bannerAnimation.add(banner4, 0)
bannerAnimation.add(banner5, 0)
