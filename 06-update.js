const mongo = require('mongodb').MongoClient;
const dbName = process.argv[2];
const url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, (err, db) => {
  if (err) throw err;
  const users = db.collection('users');
  users.update( {
    username: "tinatime"
  }, { $set: {
    age: 40
  }}, (err, data) => {
    if (err) throw err;
    db.close();
  })
});

