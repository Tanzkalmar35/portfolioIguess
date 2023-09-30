const mouseTrailer = document.querySelector("#cursorTrailer")
const loadingIndicator = document.querySelector("#enter-website")

loadingIndicator.onclick = () => {
    // Transition into the landing page
    // Landing page is inspired by https://oxyco.webflow.io/
}

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

loadingIndicator.classList.add("loading_indicator_loaded");
loadingIndicator.classList.add("cursor-pointer");
loadingIndicator.innerHTML = "Enter";
