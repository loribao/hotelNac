exports.get = (req, res) => {
    var teste = require('../model/index-model');
    
    res.status(200).render( 'cabecalho.ejs' , {body:teste(req,res,"<p>oitoPilha1R$<p>"), rodape:"<br><p>novePilha1R$</br>"}
    );
};
