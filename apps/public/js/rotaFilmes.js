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

function carregarTudo() {
    btAction("btDrama","/filmes/drama");
    btAction("btTerror","/filmes/terror");
    btAction("btHome","/");
}


window.addEventListener('load',carregarTudo);