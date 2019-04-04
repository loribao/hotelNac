'use strict';
const app = require('../app/app');
const https = require('https');
const http = require('http');
const debug = require('debug')('nodestr:server');
const fs = require('fs');
const path = require('path');
const os = require('os');

//Portas de acesso ao protocolo http ou https 
const httpPort = '3000';
const httpsPort = '3001';


const configuracaoHttps = {
    key: fs.readFileSync(path.join(__dirname,'ssl','server.key')),
    cert: fs.readFileSync(path.join(__dirname,'ssl','server.crt'))
};


http.createServer(app).listen(httpPort,()=>{
        console.log(' Servidor http rodando em -->  http://localhost:'+httpPort);
});
//Configura o servidor com o app
const port = normalizePort(process.env.PORT || httpsPort);
app.set('port', port);
const server = https.createServer(configuracaoHttps,app).listen(port,() => {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe' + addr :
        'port' + addr.port;
    debug('Iniciado ' + bind)
});

//Tratativa de eventos do servidor

server.on('error', (error) => {
    if (error.syscall != 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' necessario executar com privilegios');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' Está em uso');
            process.exit(1);
            break;
        default:
            throw error;
    }

});


console.log('\n\n Plataforma de serviço '+ os.platform(),'\n Servidor https rodando em --> https://localhost:' + port);

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}