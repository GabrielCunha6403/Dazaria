
var carrinho = {
    itens: [],
    valorTotal: 0,
    quantidade: 0
};

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

$(document).ready(function() {
    
    $('.card-produto').on('click', function() {
        let produto = {
            nome: $(this).find("label").text(),
            valor: $(this).find("span").text(),
            quantidade: 1
        }

        let index = carrinho.itens.findIndex(({nome}) => nome == produto.nome);
        if(index != -1) carrinho.itens[index].quantidade += 1;
        else carrinho.itens.push(produto);
        
        carrinho.quantidade++;
        $('#carrinho-btn span').text((carrinho.quantidade).toString());
    });

});
