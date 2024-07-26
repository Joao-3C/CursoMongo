const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/firstConnection');
 
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function(){
    console.log('Conectado ao mongo DB');
})

    //cria um schema pra cada collection

const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String 
})

    //cria um model
const Pessoa = new mongoose.model('Pessoa', pessoaSchema);

    //Cria uma pessoa
const joao = new Pessoa({
    nome: 'João',
    idade: 79,
    profissao: 'Presidente'
})

console.log(joao.nome, ' | ' + joao.idade + ' | ' + joao.profissao );

    //inserir/salvar dados
/* try{
    joao.save();
    console.log("Salvo com sucesso");
} catch(err){
    if(err) {console.log("ERRO INESPERADO: "+ err);}
} */


    //encontrar dados
/* (async () => {
    try {
      const pessoa = await Pessoa.find({ }); // PODE USAR FINONE E PD PASSAR VÀRIO DADOS
      console.log(pessoa);
    } catch (error) {
      console.error("ERRO INESPERADO: ", error);
    }
  })(); */


  async function getByNome(nome){
    try {
        const pessoa = await Pessoa.find({ nome: nome}); // PODE USAR FINONE E PD PASSAR VÀRIO DADOS
        if(pessoa.length === 0){
            console.log('USUÁRIO NÃO ENCONTRADO');
        }else{
            console.log(pessoa);
        }

      } catch (error) {
        console.error("ERRO INESPERADO: ", error);
      } 
  }

  //getByNome('Bruce');


    // INSERT MANY
/* Pessoa.insertMany([

    
    {nome: 'João', idade: 20, profissao: 'Cangaceiro'},
    {nome: 'Maria', idade: 15, profissao: 'EStudante'},
    {nome: 'Jack', idade: 40, profissao: 'Pirata'},
    {nome: 'João', idade: 79, profissao: 'Presidente'},
    {nome: 'Joana', profissao: 'Guerreira'},
    {nome: 'Alexandre',idade: 22, profissao: 'Conquistador' },
    {nome: 'Bruce', idade: 38, profissao:'Cientista'}
]) */


    //DELETANDO PESSOAS
/* Pessoa.deleteOne( {nome: 'Bruce'}).exec(); */


    //update
//Pessoa.updateOne({nome: 'Maria'}, {idade: 16}).exec()

//getByNome('Maria');


    //Where: Utiliza mais filtros

async function getPessoaNomeIdade(nome, idade){
    
    const pessoa = await Pessoa
                            .where('idade').gt(idade)
                            .where('nome', nome)
                            .exec();

    if(pessoa.length === 0){
        console.log('Essa pessoa não existe');
    } else{
        console.log(pessoa);
    }
}

getPessoaNomeIdade('Maria', 20);