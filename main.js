const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Assim que voce ficou com duvida sobre o que prefere comer, criamos um chat onde voce consegue tirar suas duvidas. O que voce prefere?",
        alternativas: [
            {
                texto: "doce ",
                afirmacao: "Sentir o gosto açucarado na lingua leva o cerebro a produzir dopamina,dessa forma as pessoas ficam mais felizes. ",
            },
            {
                texto: " Salgada ",
                afirmacao: "Sentir o gosto salgado na lingua leva o cerebro a produzir aldos",
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "  ",
                afirmacao: "",
            },
            {
                texto: " ! ",
                afirmacao: "  ",
            }
        ]
    },
    {
        enunciado: "  ",
        alternativas: [
            {
                texto: "  ",
                afirmacao: "  ",
            },
            {
                texto: "  ",
                afirmacao: "  ",
            }
        ]
    },
    {
        enunciado: " ",
        alternativas: [
            {
                texto: "  ",
                afirmacao: "  ",
            },
            {
                texto: " ",
                afirmacao: " ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: "Afirmação",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas ();
}

function mostraAlternativas (){
    for(const alternativa of perguntaAtual){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativa);
        botaoAlternativa.addEventListener("click", () => respostasSelecionadas(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostasSelecionadas (opcaoSelecionadas){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Em 2049 ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();





}

}