db.books.aggregate([
    {$match: {categories: 'Java'}},
    {$count: 'contagem'},
   
])