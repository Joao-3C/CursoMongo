db.books.aggregate([
    { $sort: {  pageCount: -1} },
    { $match: {authors: 'Gavin King'}},
    { $limit: 3}
])