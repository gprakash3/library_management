const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    book: {
        type:Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type:Sequelize.STRING,
    allowNull:false
    },
    returntime: {
        type:Sequelize.STRING,
    allowNull:false
    },
    hour: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
    
},{ timestamps: false });


module.exports = Book;