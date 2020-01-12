const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('database', 'postgres', 'example', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');

        User.findAll().then(users => {
            console.log("All users:", JSON.stringify(users, null, 4));
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
const Model = Sequelize.Model;
class User extends Model { }
User.init({
    // attributes
    id: {
        type: Sequelize.INTEGER,

        primaryKey: true,
        autoIncrementIdentity: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
    // options
});
class Article extends Model {

}
Article.init({
    id: {
        type: Sequelize.INTEGER,

        primaryKey: true,
        autoIncrementIdentity: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, { sequelize, modelName: 'article' })