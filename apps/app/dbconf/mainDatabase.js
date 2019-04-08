var mongodb = require('mongodb');

var conectaMongo = () => {
    var banco = new mongodb.Db(
        'laelSenac', //nome do banco de conexão
        new mongodb.Server(
            '195.154.253.45', //local de conexão
            4002, //porta
            // Configuração adicionais, usuario, senha e etc
            {}
        ),
        {}
    );
    // Configuração adicionais do Server
    return banco;
}

module.exports = () => {
    //console.log("Banco OK");
    return conectaMongo;
}