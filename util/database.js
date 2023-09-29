const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/shop?retryWrites=true'
  )
    .then(client => {
      console.log('Connected!');
      _db=client.db();
      callback(client);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb=()=>{
  if(_db){
    return _db;
  }
  throw 'No database Found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb=getDb;
