const Book = require('./bookModel');

let bookApiController = {
    getAll(req, res) {
        res.json(Book.getAllBooks);
    },
    get(req, res) {
        if(Book.has(req.id)){
            res.json(Book.getByID(req.id));
        } else {
            res.status(404).send(`Can not get book with ID: ${id}`);
        }
    },
    post(req, res) {
        if (Book.isValid(req.body)) {
            let book = new Book(req.body.author, req.body.title);
            Book.save(book);
            res.status(201);
            res.set("Location", `${req.baseUrl}/${user.id}`).end();
        } else {
            res.status(400).end();
        };
    },
    put(req, res) {
        if (!Book.has(req.id)) {
            let info = 'Book`s ID is invalid';
            bookView.warning(info, res);
        } else if (!Book.isValid(req.data)) {
            let info = 'Author or title is invalid';
            bookView.warning(info, res);
        } else {
            Book.update(req.id, req.data);
            let info = `Book updated with ID: ${req.id}`;
            bookView.success(info, res);
        }
    },
    delete(req, res) {
        if (Book.has(req.id)) {
            Book.remove(req.id);
            let info = `Book deleted with ID: ${req.id}`;
            bookView.success(info, res);
        } else {
            let info = `ID is invalid`;
            bookView.warning(info, res);
        }
    },
};
module.exports = bookApiController;