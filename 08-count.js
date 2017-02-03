const mongo = require('mongodb').MongoClient;
const minimumAge = process.argv[2];
const url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
  if (err) throw err;
  const parrots = db.collection('parrots');
  parrots.count( {
    age: {
      $gt: +minimumAge
    }
  }, (err, count) => {
    if (err) throw err;
    console.log(count);
    db.close();
  })
});

