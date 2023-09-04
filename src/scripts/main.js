
function addAnimations() {
    let landingPageScrollTrigger = document.querySelector("#landingScrollTrigger");

    landingPageScrollTrigger.addEventListener("click", function () {
        console.log("scrolling");
        window.scrollTo(0, 0);
    });

}
