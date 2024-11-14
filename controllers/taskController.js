const alltasks = require('./Json/task.json');

const alltask = function (req, res) {
    const allTasksArray = alltasks.usuarios.flatMap(user => user.tarefas);
    const totalTasks = allTasksArray.length;
    res.render('task/tasks', {
        title: 'Todas as Tarefas',
        tasks: allTasksArray,
        totalTasks
    });
};


const searchtask = function (req, res) {
    const searchQuery = req.query.task?.toLowerCase() || ''; 
    const filteredTasks = alltasks.usuarios.flatMap(user => 
        user.tarefas.filter(task => task.nome.toLowerCase().includes(searchQuery))
    );

    res.render('task/search', {
        title: `Resultados para "${searchQuery}"`,
        tasks: filteredTasks,
        totalTasks: filteredTasks.length
    });
};

const onetask = function (req, res) {
    const taskId = parseInt(req.params.id, 10);
    let foundTask = null;

    for (const user of alltasks.usuarios) {
        foundTask = user.tarefas.find(task => task.id === taskId);
        if (foundTask) break;
    }

    res.render('task/task', {
        title: foundTask ? `Tarefa ID ${taskId}` : 'Tarefa Não Encontrada',
        task: foundTask
    });
};

const oneUsertask = function (req, res) {
    const userId = parseInt(req.params.id, 10); 

    const user = alltasks.usuarios.find(user => user.id === userId);

    res.render('task/tasks', {
        title: user ? `Tarefas de ${user.usuario}` : 'Usuário Não Encontrado',
        tasks: user ? user.tarefas : [],
        totalTasks : user ? user.tarefas.length : 0
    });
};

module.exports = {
    alltask,
    searchtask,
    onetask,
    oneUsertask
};
