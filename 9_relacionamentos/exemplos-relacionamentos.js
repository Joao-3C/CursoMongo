//              ONE TO ONE-------------------------------------------------------------------------------

db.pessoa.insertOne({
    nome: 'Tyrion',
    idade: '35',
    posicao: 'Herdeiro',
})

const p2 = db.pessoa.findOne({nome: 'Tyrion'})

db.endereco.insertOne({
    cidade: 'Rochedo casterly',
    terra: 'Terras ocidentais',
    lordeLocal: 'Tawin Lennister',
    pessoa_id: p._id
})






//          ONE TO MANY---------------------------------------------------------------------------------------------------

db.pessoas.insertOne({
    nome: 'Sansa',
    idade: 13,
    posicao: 'Herdeira'
})
const sansa = db.pessoas.findOne({nome: 'Sansa'})

db.pessoas.insertOne({
    nome: 'Robert',
    idade: 48,
    posicao: 'Rei'
})
const robert =  db.pessoas.findOne({nome: 'Robert'})


db.pessoas.insertOne({nome: 'Rob', idade: 19, posicao: 'lorde'})
const rob = db.pessoas.findOne({nome: 'Rob'})


db.compras.insertMany([
    {produtos: ['Livro', 'Celular'], pessoa_id: sansa._id},
    {produtos: ['Rpupa', 'espada'], pessoa_id: sansa._id},
    {produtos: ['bebida', 'Comida'], pessoa_id: robert._id},
    {produtos: ['Chocolate', 'Martelo'], pessoa_id: robert._id},
])




//                         MANY TO MANY-----------------------------------------------------------------------------------

db.cursos.insertMany([
    {nome: 'Java Script'},
    {nome: 'Python'},
    {nome: 'Rust'}
])

const js= db.cursos.findOne({nome: 'Java Script'})
const python = db.cursos.findOne({nome: 'Python'})
const rust = db.cursos.findOne({nome: 'Rust'})

db.curso_pessoa.insertMany([     
    {curso_id: js._id, pessoa_id: sansa._id},     
    {curso_id: python._id, pessoa_id: robert._id}
    {curso_id: js._id, pessoa_id: rob._id},
])

//tds os alunos q cursam js
const idsAlunos = [];
db.curso_pessoa.find({curso_id: js._id}).forEach(function(aluno){
    idsAlunos.push(aluno.pessoa_id);
})

db.pessoas.find({
    _id: {$in: idsAlunos}
})