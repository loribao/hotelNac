exports.get = (req, res) => {
    var bodyHtml = require('../views/maps/mapa');
    res.status(200).render('main.ejs', { body: bodyHtml, title: "Maps", rodape: "<hr><p>novePilha1R$" }
    );
};
