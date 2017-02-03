const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

const firstName = process.argv[2];
const lastName = process.argv[3];

mongo.connect(url, (err, db) => {
  if (err) throw err;
  const docs = db.collection('docs');
  const doc = {firstName, lastName};
  docs.insert(doc, (err, data) => {
    if (err) throw err;
    console.log(JSON.stringify(doc));
    db.close();
  })
});