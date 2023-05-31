
//const listaControle = document.querySelectorAll('.controle-ajuste');
const listaControle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
console.log(estatisticas);
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

listaControle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        //manupilarDados(evento.target.textContent, evento.target.parentNode);
        manupilarDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);
    });
    
});

function manupilarDados(operacao, controle){

    //const peca = controle.querySelector('.controle-contador');
    const peca = controle.querySelector('[data-contador]');

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}

// preciso saber qual peça foi clicada
function atualizaEstatistica(peca){
    //console.log(pecas[peca]);

    estatisticas.forEach((elemento)=>{
        //console.log(elemento.dataset.estatistica);
        //console.log(elemento.textContent);

        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
}
