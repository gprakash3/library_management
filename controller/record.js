
const Book = require('../model/data');

//adding book data
exports.postData = async (req, res, next) => {
    try {
        console.log(req.body);
        const book = req.body.book;
        const createdAt=req.body.createdAt;
        const returntime = req.body.returntime;
        const hour  =  req.body.currenthour;

        let data = await Book.create({
            book: book,
            createdAt:createdAt,
            returntime:returntime,
            hour: hour
        });
        res.status(201).json({ bookdata: data });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ Error: err });
    }
}

//getting all data from database
exports.getAllData = async (req, res, next) => {
    try {
        let datas = await Book.findAll();
        res.status(201).json({ datas: datas });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}

//deleting required book from database
exports.postDelete = async (req, res, next) => {
    try {
        Book.findAll({
            where: {
                book: req.body.book,
            }
        })
            .then(datas => {
                console.log('deleted from database');
                return datas[0].destroy();      
            })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}
