const images = document.getElementsByClassName("sliding-image");

images.addEventListener("click", (event) => {
    console.log("TARGET CLICKED")
    let element = event.target;
    element.classList.add('w-screen')
    element.classList.add('h-screen')
})
