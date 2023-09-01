
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

function openModalCarrinho() {
    $('.background-carrinho').addClass('open');

    

}

function closeMenu() {
    $('.background-menu').removeClass('open');
}

function closeProduto() {
    $('.background-produto').removeClass('open');
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
            quantidade: 1,
            tamanho: '',
            imagePath: $(this).find(".card-image").css('backgroundImage'),
        }

        $('.background-produto').addClass('open');

        let url = produto.imagePath;
        $('.produto-container .produto-body').html(
            '<div class="produto-image" style="background-image: ' + url.replaceAll('"', "'") + ';"></div>' +
            '<div class="produto-info">' + 
                '<h5>' + produto.nome + '</h5>' +
                '<label> Tamanho: ' + produto.tamanho + '</label>' +
                '<label> Valor: ' + produto.valor + '</label>' +
            '</div>');

        // let index = carrinho.itens.findIndex(({nome}) => nome == produto.nome);
        // if(index != -1) carrinho.itens[index].quantidade += 1;
        // else {
        //     carrinho.itens.push(produto);
        //     carrinho.quantidade++;
        //     $('#carrinho-btn span').text((carrinho.quantidade).toString());
        // }

        // $('.carrinho-btn span').removeClass('d-none');
    });

});
