const images = document.querySelectorAll(".sliding-image");

images.forEach(function (element) {
    element.addEventListener('click', function () {
        alert('image clicked: ' + element);
    });
});
