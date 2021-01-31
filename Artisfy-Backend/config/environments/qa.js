module.exports = {
    PORT: 9000,
    DB:{
        username: "root",
        password: process.env.DB_PASSWORD,
        database: "db_qa",
        host: "localhost",
        dialect: "mysql",
        port: 3399
    }
}