exports.get = (req, res) => {
    var teste = require('../models/index-model')
    res.status(200).render('cardapio/cardapio.ejs', { title: "Cardápio" }
    );
};
