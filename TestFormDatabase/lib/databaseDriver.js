var MongoClient = require('mongodb').MongoClient;
var port = 27017;
var database = "exampleDB";

// Connect to the db
MongoClient.connect("mongodb://localhost:"+ port + "/" + database, function(err, db) {
	if(!err) console.log("We are connected to database " + database);
	else console.log("Could not connect to database " + database);

	//create new collection in mongoDB database
	db.createCollection("testNames", function(err, collection) {});

	//insert documents into collection in database
	var collectionTest = db.collection("testNames");
	var doc = {"name":"Luis"};
	collectionTest.insert(doc);

	//update a document in database
	collectionTest.update({name:"Mary"}, {$set:{name:"Mari"}}, function(err, result) {});

	//remove a document from database
	collectionTest.remove({name:"Luis"}, {w:1}, function(err, result) {});
	//removes all documents in the collection
	//collectionTest.remove();

	//query the database
	/*
	collectionTest.find().toArray(function(err, items) {
		console.log(items);
	});
	*/
	collectionTest.find().each(function(err, item) {
      if(item != null) console.log(item.name);
    });

    //query for just one document
    collectionTest.findOne({name:"Andres"}, function(err, item) {
    	if(item != null) console.log(item.name);
    });
});

