/* 
OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior:

- passo 1 - dar um jeito de pegar os elementos que reoresentam as abas no HTML;

- passo 2 - dar um jeito de identificar o clique no elemento da aba;

- passo 3 - quando o usuário clicar, desmarcar a aba selecionada;

- passo 4 - marcar a aba clicada como selecionado;

- passo 5 - esconder  o conteúdo anterior;

- passo 6 - mostrar o conteúdo da aba selecionada.

*/

// PASSO 1 
const abas = document.querySelectorAll(".aba");

// PASSO 2 
abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    })
})

function selecionarAba(aba) {
    // PASSO 3
    const abaSelecioanada = document.querySelector(".aba.selecionado");
    abaSelecioanada.classList.remove("selecionado");

    // PASSO 4 
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
    // PASSO 5
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // PASSO 6 
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}