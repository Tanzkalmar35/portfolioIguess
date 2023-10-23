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

// another image (the same) in full screen perfectly positioned with the transition from the exact position and size of the original to its desired location

const images = document.querySelectorAll(".sliding-image");
const fullscreenHandyImage = document.querySelector("#fullscreen-handy-image");

images.forEach(function (image) {
    image.addEventListener("click", () => {
        const timeline = gsap.timeline();

        // Define the animation steps for expanding the image

        timeline.from(fullscreenHandyImage, {
            width: image.getBoundingClientRect().width,
            height: image.getBoundingClientRect().height,
            left: image.getBoundingClientRect().left,
            top: image.getBoundingClientRect().top,
            duration: 2,
            ease: "power3.inOut",
        });

        // Add a scroll event listener to reverse the animation
        window.addEventListener("scroll", () => {
            timeline.reverse();
        });
    });
});
