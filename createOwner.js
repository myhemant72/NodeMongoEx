var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://172.30.5.169:27017/sampledb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sampledb");
  var myobj = { name: "Rajeev Vashisht", address: "Kalyan, Maharastra" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
