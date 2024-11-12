const users = [{ id: 1, user: "gabriel", password: "1234" }];

const autenticar = function (req, res) {
    res.render('autenticar/index', {
        title: 'Autenticar'
    });
};

const validarusuario = function (req, res) {
    const { user, password } = req.body;

    for (let i = 0; i < users.length; i++) {
        if (user === users[i].user && password === users[i].password) {
            return res.redirect('../task/tasks');
        }
    }

    return res.status(400).send({ error: "User does not exist" });
};

module.exports = {
    autenticar,
    validarusuario
};
