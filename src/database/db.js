import Sequelize from 'sequelize';
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
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    token:{
        type: Sequelize.STRING,
        allowNull: false
    },
    restore_token:{
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


class Article extends Model {

}
ArticleReads.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrementIdentity: true
    },
    article_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}, { sequelize, modelName: 'article_reads' })