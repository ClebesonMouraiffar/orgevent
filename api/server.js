const restify = require('restify');

const errors = require('restify-errors');

const server = restify.createServer({
    name: 'orgevent',
    version: '1.0.0'
});

const table ='usuario'

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'orgevent'
    }
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.listen(8000, function () {
    console.log('%s listening at %s', server.name, server.url);
});

//ROTAS REST

server.get('/:tab', (req, res, next) => {

    const { tab } = req.params;

    knex(tab).then((dados) => {
        res.send(dados);
    }, next);
});

server.post('/create/:tab', (req, res, next) => {

    const { tab } = req.params;

    knex(tab)
    .insert(req.body)
    .then((dados) => {
        res.send(dados);
    }, next);
});

server.get('/show/:id/:tab', (req, res, next) => {

    const {id}= req.params;
    const { tab } = req.params;

    knex(tab)
    .where('id', id)
    .first()
    .then((dados) => {
        if(!dados) return 
            res.send(new errors.BadRequestError('nehuma informação encontrada'))
        res.send(dados);
    }, next);
});

server.put('/update/:id/:tab', (req, res, next) => {
    
    const { id } = req.params;
    const { tab } = req.params;

    knex('tab')
        .where('id', id)
        .update(req.body)
        .then((dados) => {
            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
            res.send('dados atualizados');
        }, next)
        
});

server.del('/delete/:id/:tab', (req, res, next) => {
    
    const { id } = req.params;
    const { tab } = req.params;

    knex('tab')
        .where('id', id)
        .delete()
        .then((dados) => {
            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
            res.send('dados excluidos');
        }, next)
        
});
