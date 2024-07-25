# 1- Anotações de com formatação bonitinha nesse link
    https://docs.google.com/document/d/187guEfzTxK1dn2TOIRJ9RcW0YDDI6GpQYjfVOhtDb6c/edit?usp=sharing
# 2- Lista de comandos:
COMANDOS
Cria banco: use nomeDoBanco
Cria collection: db.***.inserir dados
                           db.createcollection(“nome”, {capped: true, size: tamanho-em-bits, max:                
                            n-máximo-documents-no-banco(linhas)} )
Insert: db.nomeCollection.insertOne({ dados })
	           db.nomeCollection.insertMany( [{ dados }] )
Select todos e select filtrado:  db.nomeCollection.find()
                                                  db.nomeCollection.finf( nome:”tanana”)
Excluir collection: db.nomeCollection.drop()
Excluir database: entra no teu banco => db.dropDatabase()
Insert com ID personalizado: db.create.insertOne({_id: 'ID’', dados})
Write concer: define um limite te tempo máximo pra adicionar dados, isso impede q sejam colocados mts dados de uma vês => db.create.insertMany( [{nome: "tesoura"}, {nome: "goiaba", preco: 1.00}] , {w: "majority", wtimeout: 200})
Operador $in: dados entre uma faixa de valores =>  db.books.find({categories: {$in: ['Java',   
                                                                                                              'Internet'] } } )
Operador $gt: procura dados com valores acima do digitado => 
db.books.find({pageCount: { $gt:600 } } )                             tbm da pra misturar os filtros =>
db.books.find({pageCount: { $gt:600 }, categories: 'Java' } )
Operador $lt: procura apenas valores menores que o digitado =>
db.books.find({_id: {$lt: 10}})
Operador $or: procura valores com um valor, OU com outro  =>
 db.books.find({ $or: [{pageCount: {$gt: 500} }, {_id: {$lt: 10} } ]})  | APENAS UMA CONDIÇÃO É VERDADEIRA
Count: conta o número de resultados =>
db.books.find({ pageCount: {$gt: 800} }).count()
UpdateOne:   db.books.updateOne( {_id: 10}, {$set: {pageCount: 2000 } } )   
UpdateMany: 
db.books.updateMany({categories: 'Java'}, {$set: {status: "UNPUBLISHED"}}) 
update várias colunas do mesmo documento =>
db.books.updateMany( {_id: 10}, [{ $set: {pageCount: 5000} }, { $set: {title: 'Primeiro update many'} } ] )    
update vários documentos diferente, usando in =>
db.books.updateMany( {_id: {$in: [20,30] } }, [{ $set: {pageCount: 5000} }, { $set: {title: 'Terceiro update many'} } ] )
update vários documentos diferente, usando in =>
db.books.updateMany( { $or: [ {_id:20}, {_id: 30} ] }, [{ $set: {pageCount: 5000} }, { $set: {title: 'Quarto update many'} } ] )
Adicionar dados com update:  adiciona uma coluna q não existe =>
db.books.updateMany( {authors: "Vikram Goyal"}, {$set: {downloads: 100} } )
Substitui todos os dados: modifica todos os dados/colunas de determinado documento =>
db.books.replaceOne({_id: 120}, {foi: 'substituido'}) 
Atualizando Array: 
db.books.updateOne({_id: 122}, {$push: {categories: 'PHP'}})
Atualiza todos os documentos do banco
db.books.updateMany( {}, {$set: {atualizado: true}} )
Delete one: db.books.deleteOne({_id: 121})
Delete many: 
 db.books.deleteMany({categories: 'Java'})
Delete todos de uma fez:
db.books.deleteMany({})
Operador $ne:  td que é Not Equal =>
  db.restaurante.find({type_of_food: { $ne:"Pizza" }})
Operador $exists: verifica se determinado campo existe =>
db.restaurante.find({ high_score: {$exists: true} })
Index: meio que define o tipo daquele campo, pro sistema fazer umas parada =>
db.restaurante.createIndex( { name: "text" } )
Operado $text: campos que tenham determinado texto =>

.
.


TIPOS DE DADOS
	Dados comuns: strin, numbers, booleans, array, datas
Datas:  -formato ISO
	-criamos tada com: new Date()
	db.dates.insertOne({data: new Date() })

Document: -parece um objeto no javaScript
	      -guarda com chave valor
db.documents.insertOne( {nome: "Ortoriundo", desc:{profissao: 'Youtuber', hobbied: ['estudar', 'ler']} } )  (esse ‘desc’, seria um document

Double: é igual um float
Relacionamentos
embedded:
	Vc guarda um documento dentro do outro, ou seja, em um dos campos vc coloca um documento q vai ter alguns atributos, seria como guardar um objeto.
