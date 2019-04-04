exports.get = (req, res) => {
    var teste = require('../models/index-model');

    res.status(200).render('layout.ejs', { body: teste(req, res, "<p>oitoPilha1R$<p>"), rodape: "<hr><p>novePilha1R$",title:'Index' }
    );
};
