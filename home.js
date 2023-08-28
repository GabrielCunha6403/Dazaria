const carouselElement = document.querySelector('#carouselExampleDark');

carouselElement.addEventListener('slide.bs.carousel', event => {
    console.log("assererre")
})

function goToWhatsapp() {
    window.open('https://wa.me/85988481999', '_blank');
}

function goToInstagram() {
    window.open('https://www.instagram.com/j.gabriel.cj/', '_blank');
}

