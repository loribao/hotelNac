
function oi() {
    alert("Linkei meu JS, está funcionando!");
}
function encaminhar(path) {
    window.location.href = path;
}

function btAction(id,path) {
    var btAct = document.getElementById(id);
    btAct.addEventListener('click', function (event) {
        //alert("Funcionou meu botão!");
        encaminhar(path);
    });
}


/*
function filmesBotao(){

    var fbt = document.getElementById("btFilmes");
    fbt.addEventListener('click',function(event){
        encaminhar();
    });
}
*/
function carregarTudo() {
    btAction("btFilmes","/filmes");
    btAction("btSeries","/series");
    btAction("btNovelas","/novelas");
    btAction("btAnimes","http://www.google.com.br");
}


window.addEventListener('load',carregarTudo);