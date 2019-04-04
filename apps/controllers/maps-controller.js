exports.get = (req, res) => {
    res.status(200).render('maps/mapa.ejs', {title: "Maps"});
};
