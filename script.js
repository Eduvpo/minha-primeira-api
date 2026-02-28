const inputBuscarCep = document.querySelector("#buscaCep");
const divLogradouro = document.querySelector("#logradouro");
const divCidade = document.querySelector("#cidade");
const divEstado = document.querySelector("#estado");
const divCep = document.querySelector("#cep");
const botaoBuscar = document.querySelector("#btnBuscar");
 
botaoBuscar.addEventListener("click", () => buscarCEP(inputBuscarCep.value));

// Busca dados do Endereço

function buscarCEP(cep){

    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados);
        const informacoes = dados;
        exibirEndereco(informacoes);
    })
    .catch(erro => {
        erro;
        limparCampos();
    });
    
}

function exibirEndereco(informacoes){
        divLogradouro.textContent = `
            ${informacoes.address}
        `;
        divCidade.textContent = `
            ${informacoes.city}
        `;
        divEstado.textContent = `
            ${informacoes.state}
        `;
        divCep.textContent = `
            ${informacoes.cep}
        `;
}

function limparCampos(){
    divLogradouro.textContent = "";
    divCidade.textContent = "";
    divEstado.textContent = "";
    divCep.textContent = "";
}