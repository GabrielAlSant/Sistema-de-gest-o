const user = function(req, res){
    res.render('user/index', {
        title: 'user'
    })
}

module.exports = {
    user
}