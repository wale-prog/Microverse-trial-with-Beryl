let images = document.querySelectorAll(".images .picture")
console.log(images)
let proImages = []
for (i = 0; i < images.length; i++) {
    proImages.push(images[i].classList.add("picture"))
}