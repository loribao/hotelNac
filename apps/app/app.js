const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts')

const app = express();
app.use(express.static('./public'))
//const router = express.Router(); não esta sendo usado neste arquivo, afim  de efetuar debug estou deixando(mas é desnecessario para producao)
/*
 **Rotas  aqui
 */

const rotaIndex = require('../routes/index-rota');
const rotaMaps = require('../routes/maps-rota');
/*
 ** abaixo uma função para converter a resposta do servirdor em json
 ** e normalizar a url 
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extend: false
}));

/**
 * configurações da engine de views e seu layout
 */
app.set("view engine", 'ejs');
app.use(expressLayouts)


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