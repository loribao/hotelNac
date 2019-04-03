const express = require('express');
const bodyParser = require('body-parser');


const app = express();
//const router = express.Router(); não esta sendo usado neste arquivo, afim  de efetuar debug estou deixando(mas é desnecessario para producao)
/*
 **Rotas  aqui
 */
const rotaIndex = require('../router/index-rota');
const rotaMaps = require('../router/maps-rota');
/*
 ** abaixo uma função para converter a resposta do servirdor em json
 ** e normalizar a url 
 */
app.set("view engine", 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extend: false
}));
app.use(express.static('./public'))

/*
 ** associacao da rota com o arquivo de rota
 */
app.use('/', rotaIndex);
app.use('/maps', rotaMaps);

/*
 **  Export do objeto "APP" para o arquivo servidor
 **  onde será setado a configuração PORT
 */
module.exports = app;