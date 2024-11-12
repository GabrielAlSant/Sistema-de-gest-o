const alltask = function(req, res){
    res.render('task/tasks', {
        title: 'task'
    })
}


const searchtask = function(req, res){
    const task = req.query.tasks;
    res.render('task/search', {
         tasks : task
    })
}

const onetask = function(req, res){
    const taskid = req.params.id
    res.render('task/task', {
        title: taskid
    })
}

const oneUsertask = function(req, res){
    const taskid = req.params.id
    res.render('task/tasks', {
        title: taskid
    })
}



module.exports = {
    alltask,
    onetask,
    searchtask,
    oneUsertask
}