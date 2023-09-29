const mouseTrailer = document.querySelector("#cursorTrailer")

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
