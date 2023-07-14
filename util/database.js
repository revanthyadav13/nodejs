const mqsql=require('mysql2');

const pool=mysql.createPool({
host:'localhost',
user:'root',
database:'node-complete',
password:'Admission@10'
});

module.exports= pool.promise();