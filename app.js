var meuTitulo = document.getElementById("Titulo")
let botaoSimples = document.getElementById("fundoEscuro")

let oFundoEstaClaro = false;

botaoSimples.onclick = trocaClasse;

function trocaClasse() {
    if (oFundoEstaClaro == true) {
        document.body.classList.remove("fundoEscuro");
        document.body.classList.add("fundoClaro");

    oFundoEstaClaro = false;
} else {
    document.body.classList.add("fundoEscuro");
    document.body.classList.remove("fundoClaro");

    oFundoEstaClaro = true;
  }
}
