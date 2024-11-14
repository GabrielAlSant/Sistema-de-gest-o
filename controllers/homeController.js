const alltasks = require('./Json/task.json');

const home = function(req, res){
    const totalUsuarios = alltasks.usuarios.length;
    const usuariosComTarefas = alltasks.usuarios.map(usuario => {
        const tarefasConcluidas = usuario.tarefas.filter(tarefa => tarefa.status === 3).length;
        const tarefasEmAndamento = usuario.tarefas.filter(tarefa => tarefa.status === 2).length;
        const tarefasNaoIniciadas = usuario.tarefas.filter(tarefa => tarefa.status === 1).length;
        return {
            ...usuario,
            resumoTarefas: {
                concluidas: tarefasConcluidas,
                emAndamento: tarefasEmAndamento,
                naoIniciadas: tarefasNaoIniciadas
            }
        };
    });

    const totalTasks = usuariosComTarefas.length
    res.render('home/index', {
        user: 'N/I',
        usuarios: usuariosComTarefas,
        totalUsuarios,
        totalTasks
    })
}

module.exports = {
    home
}