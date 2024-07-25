db.embedded.insertOne({
    nome: "Ned",
    idade: 45,
    enderecos: {
        casa:{
            cidade: 'Winterfell',
            terra: 'norte',
            lordeLocal: 'Ner Stark'
        },
        trabalho:{
            cidade: 'Kings Landing',
            terra: 'Terras da coroa',
            lordeLocal: 'Robert Baratheon'
        }
    }
  })

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