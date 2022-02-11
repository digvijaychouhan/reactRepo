const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres", 
    password: "mypostgres", 
    database: "todopernbasic", 
    host: "localhost",
    port: 5432
});

module.exports = pool;