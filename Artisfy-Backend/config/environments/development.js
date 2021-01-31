module.exports = {
    PORT: process.env.PORT,
    DB:{
        username: "root",
        password: process.env.DB_PASSWORD,
        database: "db_dev",
        host: "localhost",
        dialect: "mysql",
        port: 3399
    }
}