//import sequelize
import Sequelize from "sequelize";


const db = new Sequelize('salesDB', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;