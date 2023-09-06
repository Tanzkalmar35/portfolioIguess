function addAnimations() {
    let landingPageScrollTrigger = document.querySelector("#landingScrollTrigger");

    landingPageScrollTrigger.addEventListener("click", function () {
        console.log("scrolling");
        window.scrollTo(0, 0);
    });
}

window.onmousemove = e => {

  const mouseTrailer = document.getElementById("cursorTrailer");

  const x = e.clientX - mouseTrailer.offsetWidth,
        y = e.clientY - mouseTrailer.offsetHeight;

  mouseTrailer.style.transform = `translate(${x}px, ${y}px)`;  
}


