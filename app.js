const valorDaConta = document.getElementById("bill");
const numeroDePessoas = document.getElementById("people");
const gorjetaEditada = document.getElementById("custom");
const valorDaGorjeta = document.getElementById("tipAmount");
const valorTotalPorPessoa = document.getElementById("total");
const botaoResetar = document.getElementById("resetBtn");
const botoes = document.querySelectorAll(".tip-btns button");

//Calcula a gorjeta quando clica em algum botão de porcentagem
botoes.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    let valorGorjeta = e.target.innerText;
    valorGorjeta = valorGorjeta.substr(0, valorGorjeta.length - 1);

    if (valorDaConta.value === "") return;
    if (numeroDePessoas.value === "") numeroDePessoas.value = 1;

    calculaGorjeta(
      parseFloat(valorDaConta.value),
      parseInt(valorGorjeta),
      parseInt(numeroDePessoas.value)
    );
  });
});

//Calcula a gorjeta quando o botão "custom" é clicado
gorjetaEditada.addEventListener("blur", (e) => {
  if (valorDaConta.value === "") {
    reiniciarTudo();
    return;
  }
  if (numeroDePessoas.value === "") numeroDePessoas.value = 1;

  calculaGorjeta(
    parseFloat(valorDaConta.value),
    parseFloat(e.target.value),
    parseInt(numeroDePessoas.value)
  );
});

//Calcula a gorjeta
function calculaGorjeta(valorConta, porcentagemGorjeta, numeroPessoas) {
  let valorGorjeta = (valorConta * (porcentagemGorjeta / 100)) / numeroPessoas;
  let gorjeta = Math.floor(valorGorjeta * 100) / 100;
  gorjeta = gorjeta.toFixed(2);

  let valorTotal = (valorGorjeta * numeroPessoas + valorConta) / numeroPessoas;
  valorTotal = valorTotal.toFixed(2);

  valorDaGorjeta.innerHTML = `$${gorjeta}`;
  valorTotalPorPessoa.innerHTML = `$${valorTotal}`;
}

//Reinicia tudo
botaoResetar.addEventListener("click", reiniciarTudo);
function reiniciarTudo() {
  valorDaGorjeta.innerHTML = "$0.00";
  valorTotalPorPessoa.innerHTML = "$0.00";
  valorDaConta.value = "";
  numeroDePessoas.value = "";
  gorjetaEditada.value = "";
}