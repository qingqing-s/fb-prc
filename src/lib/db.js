import mysql from 'mysql2/promise';

let globalConnection = null;

export async function getDbConnection() {
    if (globalConnection) {
        return globalConnection;
    }

    globalConnection = mysql.createPool({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        waitForConnections:true,
        connectionLimit: 10,
        ssl: false
    });

    return globalConnection;
}