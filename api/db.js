const client = require('./connect.js');

function createUser(){
    const query = `CREATE TABLE "User"(
        id SERIAL PRIMARY KEY,
        userName VARCHAR(255),
        password VARCHAR(255)
    )`;
    client.query(query, (err, res) => {
        if (err) {
            console.error('Error creating Users table:', err);
        } else {
            console.log('Users table created successfully');
        }
    });
}
// createUser()
function addUser(userName, password){
    const query = `INSERT INTO "User"(userName, password) VALUES('${userName}', '${password}');`
    client.query(query)
}

function getUser(userName, callback){
    const query = `SELECT * FROM "User" WHERE userName = '${userName}'`;
    client.query(query, (err, res) => {
        callback(res)
    });
}

module.exports ={
    addUser: addUser,
    getUser: getUser
}