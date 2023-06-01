
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

// Mudar cor do Robotron 2.000

const imgRobo = document.querySelector('.robo');


imgRobo.addEventListener("click", (evento) => {
    console.log('Clicaram no RoboTron 2.000!');
    mostraCores(evento.target.dataset.exibido);
});

function mostraCores(exibido){

    const lista = document.querySelector(".lista");
    //console.log(lista);    

    if(exibido === "sim"){
        lista.style.visibility = "hidden";
        imgRobo.dataset.exibido = "não"
    }else{
        lista.style.visibility = "visible";
        imgRobo.dataset.exibido = "sim"
    }
}

const listaCores = document.querySelectorAll('[cor]');
//console.log(listaCores);

listaCores.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        //manupilarDados(evento.target.textContent, evento.target.parentNode);
        //manupilarDados(evento.target.dataset.controle, evento.target.parentNode);
        //console.log(evento.target.parentNode);
        console.log('Você clicou na '+ elemento.textContent);   
        //const novoRobo = document.querySelector('#robotron') ;
        
        //escolheCorDoRobo(novoRobo, elemento.textContent);
        escolheCorDoRobo(elemento.textContent);
    });
});

function escolheCorDoRobo(corDoRobo){

    const novoRobo = document.querySelector('#robotron') ;

    if(corDoRobo === "Azul"){
        novoRobo.src = "./img/robotron.png";
    }
    if(corDoRobo === "Vermelho"){
        novoRobo.src = "./img/Robotron 2000 - Vermelho.png";
    }
    if(corDoRobo === "Branco"){
        novoRobo.src = "./img/Robotron 2000 - Branco.png";
    }
    if(corDoRobo === "Amarelo"){
        novoRobo.src = "./img/Robotron 2000 - Amarelo.png";
    }
    if(corDoRobo === "Rosa"){
        novoRobo.src = "./img/Robotron 2000 - Rosa.png";
    }
    if(corDoRobo === "Preto"){
        novoRobo.src = "./img/Robotron 2000 - Preto.png";
    }
}