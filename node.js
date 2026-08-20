const contador = document.getElementById("numero");
const mais = document.getElementById("mais");
const menos = document.getElementById("menos");
const zero = document.getElementById("zero");
const biscoito = document.getElementById("biscoito");
const Compra_click = document.getElementById("Compra_click");
const valorElemento = document.getElementById("valor");
const Compra_factory = document.getElementById("Compra_factory");
const N_factorys = document.getElementById("N_factorys");

let numero = 0;
let valor = 1;
let preco_click = 10;
let factory = 0;
let preco_factory = 1000;
let producao_factory = 5;



function pularBiscoito() {
    biscoito.classList.remove("bounce");

    // Permite que a animação seja executada novamente
    void biscoito.offsetWidth;

    biscoito.classList.add("bounce");
}

mais.addEventListener("click", function() {
    numero+=valor;
    contador.textContent = numero;
    pularBiscoito();
});


zero.addEventListener("click", function() {
    numero = 0;
    contador.textContent = numero;
    pularBiscoito();
});


Compra_click.addEventListener("click", function() {
    if(numero>=preco_click){
        numero-=preco_click;
        valor++
        preco_click+=20;
        valorElemento.textContent = valor;
        contador.textContent = numero;
        Compra_click.textContent = preco_click;
    }else{
        alert("Você não tem dinheiro o suficiente")
    }
});

Compra_factory.addEventListener("click", function() {
    if(numero>=preco_factory){
        numero-=preco_factory;
        factory++
        preco_factory+=1000;

        N_factorys.textContent = factory;
        contador.textContent = numero;
        Compra_factory.textContent = preco_factory;
    }else{
        alert("Você não tem dinheiro o suficiente")
    }
});

setInterval(function(){
    numero += factory * producao_factory;
    contador.textContent = numero;
}, 1000);

