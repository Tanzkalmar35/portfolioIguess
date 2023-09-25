const mouseTrailer = document.querySelector("#cursorTrailer");
const menuTrigger = document.querySelector(".menuTrigger");
const landingPageScrollTrigger = document.querySelector("#landingScrollTrigger");

landingPageScrollTrigger.addEventListener("click", function () {window.scrollTo(0, 0)});

menuTrigger.addEventListener("mouseenter", enterMenuTrigger);
menuTrigger.addEventListener("mouseout", exitMenuTrigger);

window.onmousemove = e => {
  const x = e.clientX - mouseTrailer.offsetWidth / 2,
        y = e.clientY - mouseTrailer.offsetHeight / 2;
  const keyframes = {
    transform: `translate(${x}px, ${y}px)`
  }
  mouseTrailer.animate(keyframes, {
      duration: 800,
      fill: "forwards"
  });
}

function enterMenuTrigger(event) {
  if (event.target === menuTrigger) {
    mouseTrailer.classList.add("w-[5rem]");
    mouseTrailer.classList.add("h-[5rem]");
  }
}

function exitMenuTrigger() {
    mouseTrailer.classList.remove("w-[5rem]");
    mouseTrailer.classList.remove("h-[5rem]");
}
