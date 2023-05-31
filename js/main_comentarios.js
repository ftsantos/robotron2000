
//const subtrair = document.querySelector('#subtrair');
//const somar = document.querySelector('#somar');
//const braco = document.querySelector('#braco');

//const listaControle = document.querySelectorAll('.controle-ajuste');
const listaControle = document.querySelectorAll('[data-controle]');

listaControle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        //manupilarDados(evento.target.textContent, evento.target.parentNode);
        manupilarDados(evento.target.dataset.controle, evento.target.parentNode);
    });
    
});
//const robotron = document.querySelector('#robotron');
/*
somar.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) + 1;
});

subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1;
});
*/
/*
somar.addEventListener("click", () => { manupilarDados('somar')});
subtrair.addEventListener("click", () => { manupilarDados('subtrair')});
*/

function manupilarDados(operacao, controle){

    //const peca = controle.querySelector('.controle-contador');
    const peca = controle.querySelector('[data-contador]');

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}

/*
function dizOi(nome){
    console.log(nome);
    console.log('Bem vindo ao Robotron 2000');
}

dizOi('Pedro');
*/