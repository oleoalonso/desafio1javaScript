const adicionar = document.querySelector(".adicionar");
    remover = document.querySelector(".remover");
    numero = document.querySelector(".numero");
    
let a = 0;

/* ADICIONANDO */

adicionar.addEventListener("click", ()=> {
    a++;
    /* Adicionar casa decimal */
    a = ( a < 10 ) ? "0" + a : a;
    numero.innerText = a;
    console.log(a);
});

/* REDUZINDO */

remover.addEventListener("click", ()=> {

    if (a > 0) {
        a--;
        a = ( a < 10 ) ? "0" + a : a;
        numero.innerText = a;
    }

});