const contador = document.getElementById("numero");
const mais = document.getElementById("mais");
const menos = document.getElementById("menos");
const zero = document.getElementById("zero");
const biscoito = document.getElementById("biscoito");
const compra_click = document.getElementById("compra_click");
const valorElemento = document.getElementById("valor");
const compra_factory = document.getElementById("compra_factory");
const n_factorys = document.getElementById("n_factorys");

let numero = 0;
//Click de valor
let valor = 1;
let preco_click = 10;
//fabrica 
let factory = 0;
let preco_factory = 500;
let producao_factory = 50;
let fabricas = 0;




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


compra_click.addEventListener("click", function() {
    if(numero>=preco_click){
        numero-=preco_click;
        valor++
        preco_click+=20;
        valorElemento.textContent = valor;
        contador.textContent = numero;
        compra_click.textContent = preco_click;
    }else{
        alert("Você não tem dinheiro o suficiente")
    }
});

compra_factory.addEventListener("click", function() {
    if(numero>=preco_factory){
        numero-=preco_factory;
        factory++
        preco_factory+=500;
        if (factory >= 1) {
        document.getElementById("fabrica").classList.add("fabrica-balançando");
        }

        n_factorys.textContent = factory;
        contador.textContent = numero;
        compra_factory.textContent = preco_factory;
    }else{
        alert("Você não tem dinheiro o suficiente")
    }
});

setInterval(function(){
    numero += factory * producao_factory;
    contador.textContent = numero;
}, 1000);

