exports.get = (req, res) => {
    var teste = require('../model/index-model');

    res.status(200).render('main.ejs', { body: teste(req, res, "<p>oitoPilha1R$<p>"), rodape: "<hr><p>novePilha1R$" }
    );
};
