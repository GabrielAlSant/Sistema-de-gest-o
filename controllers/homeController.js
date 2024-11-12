const home = function(req, res){
    res.render('home/index', {
        title: 'teste'
    })
}

module.exports = {
    home
}