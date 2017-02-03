const mongo = require('mongodb').MongoClient;
const sizeValue = process.argv[2];
const url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
  if (err) throw err;
  const prices = db.collection('prices');
  prices.aggregate([
    { $match: { size: sizeValue }}
    , { $group: {
      _id: 'avg'
      , average: {
        $avg: '$price'
      }
    }}
  ]).toArray((err, results) => {
    if (err) throw err;
    console.log(Number(results[0].average).toFixed(2));
    db.close();
  })

});

