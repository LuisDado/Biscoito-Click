let contador = document.getElementById("#numero");

const mais = document.getElementById("#mais")
const menos = document.getElementById("#menos")
const zero = document.getElementById("#zero")

let numero = 0;

mais.addEventListener("click", function(){
 numero=numero+1;
 contador.textContent = numero;
});

menos.addEventListener("click", function(){
 numero=numero-1;
 contador.textContent = numero;
});

zero.addEventListener("click", function(){
numero=0
 contador.textContent = numero;
})

