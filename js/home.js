var carrinho = {
  itens: [],
  valorTotal: 0,
  quantidade: 0,
};

function toggleMenu(element) {
  if (element.checked) {
    $(".background-menu").addClass("open");
  } else {
    $(".background-menu").removeClass("open");
  }
}

function openModalCarrinho() {
  $(".background-carrinho").addClass("open");
}

function closeMenu() {
  $(".background-menu").removeClass("open");
}

function closeProduto() {
  $(".background-produto").removeClass("open");
}

function goToWhatsapp() {
  window.open("https://wa.me/5585988481999", "_blank");
}

function goToInstagram() {
  window.open("https://www.instagram.com/j.gabriel.cj/", "_blank");
}

$(document).ready(function () {

  $(".card-produto").on("click", function () {
    let produto = {
      nome: $(this).find("label").text(),
      valor: $(this).find("span").text(),
      quantidade: 1,
      tamanho: "",
      imagePath: $(this).find(".card-image").css("backgroundImage"),
    };

    $(".background-produto").addClass("open");

    let url = produto.imagePath;
    $(".produto-container .produto-body").html(
      '<div class="produto-image" style="background-image: ' + url.replaceAll('"', "'") + ';"></div>' +
      '<div class="produto-info">' +
        "<h4>" + produto.nome + "</h4>" +
        "<div class='input-tamanho'>" +
          "<h5 class='required'>Tamanho</h5>" +
          "<div class='tamanho-btn-area'>" +
            "<button onclick='selectProductSize(this)'>P</button>" +
            "<button onclick='selectProductSize(this)'>M</button>" +
            "<button onclick='selectProductSize(this)'>G</button>" +
          "</div>"+
        "</div>" +
        "<div class='input-quantidade'>" +
          "<h5>Quantidade</h5>" +
          "<div class='quantidade-area'>" +
            "<button id='btn-menos' onclick='menos()'>-</button>" +
            "<input type='number' value='1' min='1' readonly>" +
            "<button id='btn-mais' onclick='mais()'>+</button>" +
          "</div>" +
        "</div>" +
        "<div class='valor-area'>" +
          "<h5 class='m-0'>Valor unitário</h5>" +
          "<label>" + produto.valor + "</label>" +
        "</div>" +
        "<div class='modal-produto-btn-area'>" +
        "<button onclick='addProductToCar()' id='btn-adicionar-carrinho' class='btn-disabled' disabled='true'>" +
          "<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 576 512'><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z'/></svg>" +
            "Adicionar ao carrinho" +
        "</button>" +
      "</div>"
    );

  });

  $("#btn-adicionar-carrinho").on("click", function () {
    let modal = $(".produto-body");
    let produto = {
      nome: modal.find(".produto-info h4").text(),
      valor: modal.find(".valor-area label").text(),
      quantidade: modal.find(".input-quantidade input").val(),
      tamanho: modal.find(".tamanho-btn-area .selected").text(),
      imagePath: modal.find(".produto-image").css("backgroundImage"),
    };
    let index = carrinho.itens.findIndex(({nome}) => nome == produto.nome);
    if(index != -1) carrinho.itens[index].quantidade += 1;
    else {
        carrinho.itens.push(produto);
        carrinho.quantidade++;
        $('#carrinho-btn span').text((carrinho.quantidade).toString());
    }
    $('.carrinho-btn span').removeClass('d-none');
  });
});

function mais() {
  let qtd = parseInt($(".quantidade-area input").val()) + 1;
  if (qtd > 0) $(".quantidade-area input").val(qtd);
}

function menos() {
  let qtd = parseInt($(".quantidade-area input").val()) - 1;
  if (qtd > 0) $(".quantidade-area input").val(qtd);
}

function selectProductSize(self) {
  $(".input-tamanho button").removeClass("selected");
  $(self).addClass("selected");
  $("#btn-adicionar-carrinho").removeClass("btn-disabled");
  $("#btn-adicionar-carrinho").prop("disabled", false);
}

function addProductToCar() {
  let modal = $(".produto-body");
  let produto = {
    nome: modal.find(".produto-info h4").text(),
    valor: modal.find(".valor-area label").text(),
    quantidade: modal.find(".input-quantidade input").val(),
    tamanho: modal.find(".tamanho-btn-area .selected").text(),
    imagePath: modal.find(".produto-image").css("backgroundImage"),
  };
  let index = carrinho.itens.findIndex(({nome}) => nome == produto.nome);
  if(index != -1) carrinho.itens[index].quantidade += 1;
  else {
      carrinho.itens.push(produto);
      carrinho.quantidade++;
      $('#carrinho-btn span').text((carrinho.quantidade).toString());
  }
  $('.carrinho-btn span').removeClass('d-none');
  closeProduto();
}