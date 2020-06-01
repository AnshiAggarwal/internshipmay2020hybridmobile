var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mongodb");
  var myobj = { itemcode: "102", itemname: "pencil" , itemprice:"200.0"};
  dbo.collection("item").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 item list inserted");
    db.close();
  });
});