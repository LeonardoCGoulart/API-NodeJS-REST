// banco de dados em memória (poderia user DB)
let books = []

//criação do app
const express = require('express')
const app = express()
app.use(express.json()) // passa a entender JSON

//aplicação de middlewares
app.post('/books', (req, res) => {
    const {id, title, author, publishAt} = req.body
    const book = { id, title, author, publishAt }
    books.push(book)
    return res.status(201).json(book);
})

app.get('/books', (req, res) => {
    return res.status(200).json(books)
})

app.get('/books/:book_id', (req,res) => {
    const {book_id} = req.params
    const book = books.find((book) => book.id === book_id)
    return res.status(200).json(book);
})

//servidor rodando
app.listen(3333, () => console.log("servidor esta rodando na porta 3333!"))