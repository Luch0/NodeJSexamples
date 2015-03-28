
//require node modules (see package.json)
var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

//connect
var url = 'mongodb://127.0.0.1:27017/application';

MongoClient.connect(url, function(err, db) {
  if (err) console.log(err);
  console.log("Connected to Database 'application'");

  //simple json record
  var document1 = {name:"Luis", age:"24"};
  var document2 = {name:"Andres", age:"25"};

  //insert record
  db.collection('users').insert(document1, function(err, records) {
    if (err) console.log(err);
    console.log("Document " + document1.name + " has been inserted");
  });

  db.collection('users').insert(document2, function(err, records) {
    if (err) console.log(err);
    console.log("Document " + document2.name + " has been inserted");
  });

  db.collection('users', {}, function(err, records) {
    records.remove({name:"Luis", age:"24"}, function(err, result) {
      if (err) console.log(err);
      console.log("Document " + document1.name + " has been deleted");
      db.close();
  });






  });
});