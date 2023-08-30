
var carrinho = [];

function toggleMenu(element) {
    if(element.checked) {
        $('.background-menu').addClass('open');
    } else {
        $('.background-menu').removeClass('open');
    }
}

function closeMenu() {
    $('.background-menu').removeClass('open');
}

function goToWhatsapp() {
    window.open('https://wa.me/5585988481999', '_blank');
}

function goToInstagram() {
    window.open('https://www.instagram.com/j.gabriel.cj/', '_blank');
}
