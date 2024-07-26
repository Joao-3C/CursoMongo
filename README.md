# CURSO MONGO

## -----------------------------------COMANDOS--------------------------------------------------------

+ **Cria banco**: 
    - *use nomeDoBanco*

+ **Cria collection:** 
    - *db.collection.FUncção  Criar previamente, sem nenhum dado*==>
    - *db.createcollection(“nome ”, {capped: true, size: tamanho-em-bits, max: n-máximo-documents-no-banco(linhas)} )*  

+ **Insert:** 
    - *db.nomeCollection.insertOne({ dados })*
    - *db.nomeCollection.insertMany( [{ dados }] )*

+ **Select todos e select filtrado:**  
    - *db.nomeCollection.find()*
    - *db.nomeCollection.find( nome:”tanana”)*

+ **Excluir collection:** 
    - *db.nomeCollection.drop()*

+ **Excluir database:** 
    - entra no teu banco => *db.dropDatabase()*

+ **Insert com ID personalizado:** 
    - *db.create.insertOne({_id: 'ID’', dados})*

+ **Write concer:** 
    - define um limite te tempo máximo pra adicionar dados, isso impede q sejam colocados mts dados de uma vês => *db.create.insertMany( [{nome: "tesoura"}, {nome: "goiaba", preco: 1.00}] , {w: "majority", wtimeout: 200})*

+ **Operador $in:** 
    - dados entre uma faixa de valores =>  *db.books.find({categories: {$in: ['Java', 'Internet'] } } )*

+ **Operador $gt:** 
    - procura dados com valores acima do digitado => *db.books.find({pageCount: { $gt:600 } } )* tbm da pra misturar os filtros => *db.books.find({pageCount: { $gt:600 }, categories: 'Java' } )*

+ **Operador $lt:** 
    - procura apenas valores menores que o digitado => *db.books.find({_id: {$lt: 10}})*

+ **Operador $or:** 
    - procura valores com um valor, OU com outro  => *db.books.find({ $or: [{pageCount: {$gt: 500} }, {_id: {$lt: 10} } ]})*  | APENAS UMA CONDIÇÃO É VERDADEIRA

+ **Count:** 
    - conta o número de resultados => *db.books.find({ pageCount: {$gt: 800} }).count()*

+ **UpdateOne:**   
    - *db.books.updateOne( {_id: 10}, {$set: {pageCount: 2000 } } )* 

+ **UpdateMany:** 
    - *db.books.updateMany({categories: 'Java'}, {$set: {status: "UNPUBLISHED"}})*
    - update várias colunas do mesmo documento => *db.books.updateMany( {_id: 10}, [{ $set: {pageCount: 5000} }, { $set: {title: 'Primeiro update many'} } ] )*   
    - update vários documentos diferente, usando in => *db.books.updateMany( {_id: {$in: [20,30] } }, [{ $set: {pageCount: 5000} }, { $set: {title: 'Terceiro update many'} } ])*
    - update vários documentos diferente, usando in => *db.books.updateMany( { $or: [ {_id:20}, {_id: 30} ] }, [{ $set: {pageCount: 5000} }, { $set: {title: 'Quarto update many'} } ] )*

+ **Adicionar dados com update:**  
    - adiciona uma coluna q não existe => *db.books.updateMany( {authors: "Vikram Goyal"}, {$set: {downloads: 100} } )*

+ **Substitui todos os dados:** 
    - modifica todos os dados/colunas de determinado documento => *db.books.replaceOne({_id: 120}, {foi: 'substituido'})*

+ **Atualizando Array:** 
    - *db.books.updateOne({_id: 122}, {$push: {categories: 'PHP'}})*

+ **Atualiza todos os documentos do banco:** 
    - *db.books.updateMany( {}, {$set: {atualizado: true}} )*

+ **Delete one:** 
    - *db.books.deleteOne({_id: 121})*

+ **Delete many:** 
    - *db.books.deleteMany({categories: 'Java'})*

+ **Delete todos de uma vez:** 
    - *db.books.deleteMany({})*

+ **Operador $ne:**  
    - td que é Not Equal => *db.restaurante.find({type_of_food: { $ne:"Pizza" }})*

+ **Operador $exists:** 
    - verifica se determinado campo existe => *db.restaurante.find({ high_score: {$exists: true} })*

+ **Index:** 
    - meio que define o tipo daquele campo, pro sistema fazer umas parada => *db.restaurante.createIndex( { name: "text" } )*

+ **Operador $text:** 
    - campos que tenham determinado texto => *db.inspecoes.createIndex( { business_name: 'text' } )* dps faz isso => *db.inspecoes.find({ $text: {$search: 'HOT DOG'} })*

+ **Operador $inc:** 
    - Acrescenta ou diminui um valor (incrementar) => *db.blog.updateOne({author: 'Matheus Battisti'}, {$inc: {postCount: -5} })*

+ **Operador $inc:** 
    - atualiza determinado valor caso ele seja menor do q o novo valor q vc digitou => *db.blog.updateOne({author: 'João Carlos'} , {$min:{postCount:15, likesReceived: 300} })*

+ **Operador $max:** 
    - oposto do min => *db.blog.updateOne({author: 'João Carlos'} , {$max:{postCount:89, likesReceived: 700, maxPosts: 250} })*

+ **Operador $mul:** 
    - multiplica o número da propriedade por um número definido => *db.blog.updateOne({author: 'João Carlos'} , {$mul: {campoModificado: Multiplicador} })*

+ **Operador $rename:** 
    - renomeia o CAMPO, não o conteúdo => *db.blog.updateMany({}, {$rename: {author: 'author_full_name'}})*

+ **Operador $unset:** 
    - remover um campo de um ítem => *db.blog.updateMany({}, {$unset: {campoName: ''} })*

+ **Operador $addToSet:** 
    - adiciona valores no Array, APENAS se eles n estiverem lá => *db.blog.updateOne({author_full_name: 'Maria Marin'}, {$addToSet: {categories: {$each: ['Go', 'Python', 'Next Js']} } })*

+ **Operador $pop:** 
    - remove o útltimo ou o primeiro elemento do array =>
    -1 remove o primeiro => *db.blog.updateOne({author_full_name: 'Maria Marin'}, {$pop: { categories: -1 } } )*
    1 remove o ultimo => *db.blog.updateOne({author_full_name: 'Maria Marin'}, {$pop: { categories: 1 } } )*

+ **Operador $push:** 
    - igual o push do array normal => *db.blog.updateOne({author_full_name:  'Jhon Doe'}, {$push: {categories: 'Linux'} } )*

+ **Push com mais de 1 ítem:** 
    - precisa usar operador $each => *db.blog.updateOne({author_full_name:  'Jhon Doe'}, {$push: {categories: {$each: ['HTMLL' ,'CSS' ] } } } )*

+ **Operador $pullAll:** 
    - remove um ou mais ítens de um array => *db.blog.updateOne({author_full_name:  'Jhon Doe'}, {$pullAll: {categories: ['HTMLL']} } )*

+ **Criar um ÍNDICE:** 
    - *db.inspecoes.createIndex( {certificate_number: 1 })*

+ **Índices para embeed document:**  
    - dá pra criar índices dentro do campo do embeed document => *db.inspecoes.createIndex( {"adress.city": 1})*

+ **Ver o index das coisas:** 
    - *db.inspecoes.getIndexes()*

+ **Remover index:**
    - *db.inspecoes.dropIndex( { certificate_number: 1 } )*

+ **Remove todos os índices ca collection:** 
    - n usa dropIndex, usar dropIndexES => *db.inspecoes.dropIndexes()*

+ **Pega o plano/ordem da consulta:** 
    - descobre o q ele ta consultando primeiro: *db.inspecoes.find( FILTRO ).explain()*

+ **Tipo text:**  
    - define q determinado campo é um texto => *db.inspecoes.createIndex( { business_name: 'text' } )*


###      AGREGATIONS PIPELINE ==========

+ **Bucket:**
    - é um "balde" que vai agregar resultados e retornar alguma coisa, baseando eles em um campo em comum => 
```
                    db.books.aggregate([
                        {
                            $bucket: {
                                groupBy: '$pageCount',
                                boundaries: [100, 200, 300, 400, 500, 600, 700],
                                default: 'OTHERS',
                                output: {
                                    "count": { $sum: 1 }
                                }
                            }
                        }
                    ])Esse caso está separando os livros por pagecount de 0 a 100, 100 a 200
                    e assim vai e no retorno define uma variável q vai contar +1 pra cada livro q for adicionado
```

+ **BucketAuto:**
    - ele é mais rápido, nele nós definimos quantos buckets queremos, aí o próprio mongo separa pra gente =>
```
                    db.books.aggregate([
                        {
                            $bucketAuto: {
                                groupBy: "$categories",
                                buckets: 6
                            }
                        }
                    ])
```

+ **CollStatus:**
  - retorna status/informaçoes de uma collection =>
```
                db.books.aggregate([{ $collStats: {queryExecStats: {}, count:{} } }])
```

+ **Sort:**
    - ordena os resultados baseados em uma ordem crescente 1 ou decrescente -1 =>
```
                    db.books.aggregate([
                        {
                            $sort: {pageCount: -1}
                        }
                    ])    nesse caso mostra os livros com mais páginas, começando pelos maiores
```

+ **Limit**
    - limita a quantidade de resultados recebidos =>
```

                    db.books.aggregate([
                        { $sort: {  pageCount: -1} },
                        {$limit: 3}
                    ])

```

+ **Match**
    - Filtra por um campo específico. ME parece ser útil no contexto onde vc mistura com outras PipeLines =>
```
                    db.books.aggregate([
                        { $sort: {  pageCount: -1} },
                        { $match: {authors: 'Gavin King'}},
                        { $limit: 3}
                    ])
```

+ **Out**
    - cria uma nova collection a partir dos resultados dessa =>
```
                    db.books.aggregate([
                        {$match: {categories: 'JAVA', pageCount: {$gte: 800} } },
                        {$limit: 5},
                        {$out: "bigJavaBooks"}
                    
                    ])
```

+ **Project**
    - retorna apenas o campo q a gente selecionou =>
```
db.books.aggregate([
    {$match: {authors: 'Gavin King'} },
    {$sort: { pageCount: -1 } },
    {$limit: 3 },
    {$project: {title: 1}}
])
```

+ **Sample**
    - Retorna uma amostragem aleatória, com a quantidade q vc definir =>
```
db.books.aggregate([
    {$sample: {size: 3}}
])
```

+ **Skip**
    - pula determinado número de resultados da consulta. Pula sempre os primeiros =>
```
db.books.aggregate([
    {$match: {categories: 'Microsoft'}},
    {$sort: {pageCount: -1}},
    {$project: {title: 1, pageCount:1}},
    {$skip: 2},
    {$limit: 2},
])    **SE ATENTE A ORDEM DOS COMANDOS**
```

+ **UnWind**
    - ele desmonta um array, aí dá pra trabalhar melhor com os dados dele =>
```
                    db.books.aggregate([
                        {$unwind: "$categories"},
                        {$project: {categories: 1}}
                    ])
```

+ **Extraindo resultados do unwind**
    - usa sortByCount pra ordenar os resultados do unwind, assim dá pra ordenar os dados dele =>
```
                    db.books.aggregate([
                        {$unwind: "$categories"},
                        {$sortByCount: '$categories'},
                    ])                   
```

+ **Unset**
    - remove um ou mais campos do retorno da agregattion (contrário do project) =>
```
                    x'
```

+ **Count**
    - usa o operador pipeline **$count** =>
```
db.books.aggregate([
    {$match: {categories: 'Java'}},
    {$count: 'contagem'},
   
])
```


## -----------------------------------------TIPOS DE DADOS------------------------------------------------------------

    Dados comuns: strin, numbers, booleans, array, datas
+ **Datas:**
    - formato ISO
    - criamos tada com: new Date()
    - *db.dates.insertOne({data: new Date() })*

+ **Document:** 
    - parece um objeto no javaScript
    - guarda com chave valor
    - *db.documents.insertOne( {nome: "Ortoriundo", desc:{profissao: 'Youtuber', hobbied: ['estudar', 'ler']} } )* (esse ‘desc’, seria um document)

+ **Double:** 
    - é igual um float

**Relacionamentos**
+ **Embedded:**
    - Vc guarda um documento dentro do outro, ou seja, em um dos campos vc coloca um documento q vai ter alguns atributos, seria como guardar um objeto.


  **PipeLine**
  Pipelineline é tipo um encanamento, ele serve pra fazer uma agregation (agregar resultados). Pode ser deifnido como o modo como contruímos nossa agregation

  
