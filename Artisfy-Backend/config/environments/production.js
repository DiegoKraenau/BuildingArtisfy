module.exports = {
    PORT: 3000,
    DB:{
        username: "root",
        password: process.env.DB_PASSWORD,
        database: "db_prod",
        host: "localhost",
        dialect: "mysql",
        port: 3399
    }
}